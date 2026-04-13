const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const plantationRoutes = require("./routes/plantationRoutes");
const carbonRoutes = require("./routes/carbonRoutes");
const marketplaceRoutes = require("./routes/marketplaceRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get("/health", (_, res) => res.json({ status: "ok", service: "blue-trade-api" }));
app.get("/api/status", (_, res) => {
  const mongoConnected = mongoose.connection.readyState === 1;
  const ipfsReady = Boolean(
    (process.env.IPFS_PROVIDER === "pinata" && process.env.PINATA_JWT) ||
      (process.env.IPFS_PROVIDER === "web3storage" && process.env.WEB3_STORAGE_TOKEN)
  );
  const blockchainReady = Boolean(
    process.env.BLOCKCHAIN_RPC_URL &&
      process.env.PRIVATE_KEY &&
      process.env.REGISTRY_CONTRACT &&
      process.env.CARBON_TOKEN_CONTRACT &&
      process.env.NFT_CONTRACT &&
      !process.env.REGISTRY_CONTRACT.includes("0000000000000000000000000000000000000000") &&
      !process.env.CARBON_TOKEN_CONTRACT.includes("0000000000000000000000000000000000000000")
  );

  return res.json({
    service: "blue-trade-api",
    modules: {
      mongodb: mongoConnected,
      ipfs: ipfsReady,
      blockchain: blockchainReady
    }
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/plantations", plantationRoutes);
app.use("/api/carbon", carbonRoutes);
app.use("/api/marketplace", marketplaceRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection failed:", err.message);
    process.exit(1);
  });
