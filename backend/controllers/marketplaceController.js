const MarketplaceListing = require("../models/MarketplaceListing");

async function getListings(_, res) {
  const listings = await MarketplaceListing.find({ sold: false })
    .populate("seller", "name organization")
    .sort({ createdAt: -1 });
  return res.json(listings);
}

async function getAllListings(req, res) {
  const listings = await MarketplaceListing.find({ purchasedBy: req.user._id })
    .populate("seller", "name organization");
  return res.json(listings);
}

async function createListing(req, res) {
  const listing = await MarketplaceListing.create({
    projectName: req.body.projectName,
    location: req.body.location,
    creditsAvailable: req.body.creditsAvailable,
    pricePerCredit: req.body.pricePerCredit,
    seller: req.user._id
  });
  return res.status(201).json(listing);
}

async function buyListing(req, res) {
  const listing = await MarketplaceListing.findById(req.params.id);
  if (!listing) return res.status(404).json({ message: "Listing not found" });
  if (listing.sold) return res.status(400).json({ message: "Already sold" });

  listing.sold = true;
  listing.purchasedBy = req.user._id;
  listing.txHash = req.body.txHash || "pending_on_chain_tx";
  await listing.save();
  return res.json(listing);
}

module.exports = { getListings, getAllListings, createListing, buyListing };
