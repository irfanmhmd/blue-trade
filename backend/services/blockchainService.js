const { ethers } = require("ethers");

const registryAbi = [
  "function registerPlantation(uint256 plantationId, string ipfsHash, address ngoAddress) external",
  "function approvePlantation(uint256 plantationId) external"
];
const carbonAbi = ["function mintCredits(address user, uint256 amount) external"];
const nftAbi = [
  "function mintCertificate(address to, string plantationName, string location, string ipfsMetadata, uint256 carbonCredits) external returns (uint256)"
];

function getSigner() {
  if (!process.env.BLOCKCHAIN_RPC_URL || !process.env.PRIVATE_KEY) return null;
  const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL);
  return new ethers.Wallet(process.env.PRIVATE_KEY, provider);
}

function getContracts() {
  const signer = getSigner();
  if (!signer) return null;
  if (!process.env.REGISTRY_CONTRACT || !process.env.CARBON_TOKEN_CONTRACT || !process.env.NFT_CONTRACT) return null;
  return {
    registry: new ethers.Contract(process.env.REGISTRY_CONTRACT, registryAbi, signer),
    carbon: new ethers.Contract(process.env.CARBON_TOKEN_CONTRACT, carbonAbi, signer),
    nft: new ethers.Contract(process.env.NFT_CONTRACT, nftAbi, signer)
  };
}

async function registerAndApprovePlantationOnChain({ plantationId, ipfsHash, ngoAddress }) {
  const contracts = getContracts();
  if (!contracts) return { skipped: true, reason: "Missing chain env config" };

  const registerTx = await contracts.registry.registerPlantation(Number(plantationId), ipfsHash || "", ngoAddress);
  await registerTx.wait();
  const approveTx = await contracts.registry.approvePlantation(Number(plantationId));
  await approveTx.wait();

  return { registerTxHash: registerTx.hash, approveTxHash: approveTx.hash };
}

async function mintCreditsAndCertificateOnChain({ to, amount, plantationName, location, ipfsMetadata }) {
  const contracts = getContracts();
  if (!contracts) return { skipped: true, reason: "Missing chain env config" };

  const mintTx = await contracts.carbon.mintCredits(to, Number(amount));
  await mintTx.wait();
  const nftTx = await contracts.nft.mintCertificate(to, plantationName, location, ipfsMetadata || "", Number(amount));
  await nftTx.wait();

  return { mintCreditsTxHash: mintTx.hash, mintNftTxHash: nftTx.hash };
}

module.exports = { registerAndApprovePlantationOnChain, mintCreditsAndCertificateOnChain };
