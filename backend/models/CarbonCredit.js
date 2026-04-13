const mongoose = require("mongoose");

const carbonCreditSchema = new mongoose.Schema(
  {
    plantationId: { type: mongoose.Schema.Types.ObjectId, ref: "Plantation", required: true },
    tonsCO2: { type: Number, required: true },
    totalCredits: { type: Number, required: true },
    tokenId: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    price: { type: Number, default: 0 },
    sold: { type: Boolean, default: false },
    chainMint: {
      mintCreditsTxHash: { type: String },
      mintNftTxHash: { type: String }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarbonCredit", carbonCreditSchema);
