const mongoose = require("mongoose");

const marketplaceListingSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    location: { type: String, required: true },
    creditsAvailable: { type: Number, required: true },
    pricePerCredit: { type: Number, required: true },
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    purchasedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sold: { type: Boolean, default: false },
    txHash: { type: String },
    imageUrl: { type: String },
    plantationId: { type: mongoose.Schema.Types.ObjectId, ref: "Plantation" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MarketplaceListing", marketplaceListingSchema);
