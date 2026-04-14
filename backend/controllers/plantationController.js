const Plantation = require("../models/Plantation");
const MarketplaceListing = require("../models/MarketplaceListing");
const { uploadToIpfs } = require("../services/uploadService");
const { calculateCredits } = require("../utils/carbonCalculator");
const { verifySubmission } = require("../services/verificationService");
const { registerAndApprovePlantationOnChain } = require("../services/blockchainService");

async function createPlantation(req, res) {
  try {
    const image = await uploadToIpfs(req.files?.photo?.[0]);
    const video = await uploadToIpfs(req.files?.video?.[0]);
    const drone = await uploadToIpfs(req.files?.drone?.[0]);

    const record = await Plantation.create({
      plantationName: req.body.plantationName,
      ecosystemType: req.body.ecosystemType,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      area: req.body.area,
      numberOfPlants: req.body.numberOfPlants,
      imageUrl: image?.url,
      videoUrl: video?.url,
      droneImageUrl: drone?.url,
      ipfsHash: image?.hash || drone?.hash,
      iotSensorData: req.body.iotSensorData ? JSON.parse(req.body.iotSensorData) : {},
      notes: req.body.notes,
      uploadedBy: req.user._id,
      carbonEstimated: calculateCredits(req.body.ecosystemType, req.body.area)
    });

    const lastSubmission = await Plantation.findOne({
      uploadedBy: req.user._id,
      _id: { $ne: record._id }
    }).sort({ createdAt: -1 });

    const verification = verifySubmission({
      newImageHash: record.ipfsHash,
      previousImageHash: lastSubmission?.ipfsHash,
      latitude: record.latitude,
      longitude: record.longitude,
      previousLatitude: lastSubmission?.latitude,
      previousLongitude: lastSubmission?.longitude
    });

    // ─── AUTOMATION: REGISTER ON CHAIN & LIST IN MARKETPLACE ───
    try {
      // Auto-register on blockchain (simulating field staff immediate on-chain submission)
      await registerAndApprovePlantationOnChain({
        plantationId: Number(BigInt(`0x${record._id.toString().slice(-8)}`)),
        ipfsHash: record.ipfsHash,
        ngoAddress: req.user.walletAddress || "0x0000000000000000000000000000000000000000"
      });

      // Auto-create Marketplace Listing
      const listing = await MarketplaceListing.create({
        projectName: record.plantationName,
        location: `${record.latitude}° N, ${record.longitude}° E`,
        creditsAvailable: record.carbonEstimated,
        pricePerCredit: record.ecosystemType === 'mangrove' ? 15 : 12,
        seller: req.user._id,
        imageUrl: record.imageUrl,
        plantationId: record._id
      });

      // Emit real-time notification
      const io = req.app.get("socketio");
      if (io) {
        io.emit("new_listing", {
          ...listing.toObject(),
          seller: { name: req.user.name, organization: req.user.organization }
        });
      }
    } catch (chainErr) {
      console.error("Auto-listing failed:", chainErr.message);
    }

    return res.status(201).json({ plantation: record, verification });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function getAllPlantations(_, res) {
  const plantations = await Plantation.find().populate("uploadedBy", "name role organization");
  return res.json(plantations);
}

async function getPlantationById(req, res) {
  const plantation = await Plantation.findById(req.params.id).populate("uploadedBy", "name role");
  if (!plantation) return res.status(404).json({ message: "Not found" });
  return res.json(plantation);
}

async function approvePlantation(req, res) {
  const plantation = await Plantation.findById(req.params.id).populate("uploadedBy", "walletAddress");
  if (!plantation) return res.status(404).json({ message: "Not found" });

  plantation.status = "approved";
  let chainResult;
  try {
    chainResult = await registerAndApprovePlantationOnChain({
      plantationId: Number(BigInt(`0x${plantation._id.toString().slice(-8)}`)),
      ipfsHash: plantation.ipfsHash,
      ngoAddress: plantation.uploadedBy?.walletAddress || req.body.ngoAddress || "0x0000000000000000000000000000000000000000"
    });
  } catch (error) {
    chainResult = { error: error.message };
  }
  plantation.chainRecord =
    chainResult?.registerTxHash && chainResult?.approveTxHash
      ? { registerTxHash: chainResult.registerTxHash, approveTxHash: chainResult.approveTxHash }
      : {};
  await plantation.save();

  return res.json({ plantation, chainResult });
}

async function rejectPlantation(req, res) {
  const plantation = await Plantation.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
  if (!plantation) return res.status(404).json({ message: "Not found" });
  return res.json(plantation);
}

async function deletePlantation(req, res) {
  const plantation = await Plantation.findByIdAndDelete(req.params.id);
  if (!plantation) return res.status(404).json({ message: "Not found" });
  return res.json({ message: "Deleted" });
}

module.exports = {
  createPlantation,
  getAllPlantations,
  getPlantationById,
  approvePlantation,
  rejectPlantation,
  deletePlantation
};
