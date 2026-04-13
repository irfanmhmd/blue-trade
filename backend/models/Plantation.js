const mongoose = require("mongoose");

const plantationSchema = new mongoose.Schema(
  {
    plantationName: { type: String, required: true },
    ecosystemType: { type: String, enum: ["mangrove", "seagrass", "salt_marsh"], required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    area: { type: Number, required: true },
    numberOfPlants: { type: Number, required: true },
    imageUrl: { type: String },
    videoUrl: { type: String },
    droneImageUrl: { type: String },
    iotSensorData: { type: Object, default: {} },
    notes: { type: String },
    ipfsHash: { type: String },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    carbonEstimated: { type: Number, default: 0 },
    chainRecord: {
      registerTxHash: { type: String },
      approveTxHash: { type: String }
    }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Plantation", plantationSchema);
