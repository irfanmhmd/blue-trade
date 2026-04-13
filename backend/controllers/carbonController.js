const CarbonCredit = require("../models/CarbonCredit");
const Plantation = require("../models/Plantation");
const User = require("../models/User");
const { calculateCredits } = require("../utils/carbonCalculator");
const { mintCreditsAndCertificateOnChain } = require("../services/blockchainService");

async function calculate(req, res) {
  try {
    const { ecosystemType, area } = req.body;
    const credits = calculateCredits(ecosystemType, area);
    return res.json({ tonsCO2: credits, totalCredits: credits });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

async function mintCredit(req, res) {
  const { plantationId, ownerId, price } = req.body;
  const plantation = await Plantation.findById(plantationId);
  if (!plantation) return res.status(404).json({ message: "Plantation not found" });
  const owner = await User.findById(ownerId);
  if (!owner) return res.status(404).json({ message: "Owner not found" });

  const totalCredits = calculateCredits(plantation.ecosystemType, plantation.area);
  let chainResult;
  try {
    chainResult = await mintCreditsAndCertificateOnChain({
      to: owner.walletAddress || req.body.walletAddress || "0x0000000000000000000000000000000000000000",
      amount: totalCredits,
      plantationName: plantation.plantationName,
      location: `${plantation.latitude},${plantation.longitude}`,
      ipfsMetadata: plantation.ipfsHash
    });
  } catch (error) {
    chainResult = { error: error.message };
  }
  const credit = await CarbonCredit.create({
    plantationId,
    tonsCO2: totalCredits,
    totalCredits,
    owner: ownerId,
    price: price || 0,
    tokenId: `bcc-${Date.now()}`,
    chainMint:
      chainResult?.mintCreditsTxHash && chainResult?.mintNftTxHash
        ? {
            mintCreditsTxHash: chainResult.mintCreditsTxHash,
            mintNftTxHash: chainResult.mintNftTxHash
          }
        : {}
  });
  return res.status(201).json({ credit, chainResult });
}

async function getCredits(_, res) {
  const credits = await CarbonCredit.find()
    .populate("plantationId", "plantationName ecosystemType")
    .populate("owner", "name organization");
  return res.json(credits);
}

module.exports = { calculate, mintCredit, getCredits };
