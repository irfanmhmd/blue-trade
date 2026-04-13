require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: { evmVersion: "cancun" }
  },
  networks: {
    amoy: {
      url: process.env.BLOCKCHAIN_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 30000000000,
      gas: 3000000,
      maxFeePerGas: 50000000000,
      maxPriorityFeePerGas: 30000000000
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  mocha: { timeout: 120000 }
};