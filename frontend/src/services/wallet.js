import { ethers } from "ethers";

const erc20Abi = ["function transfer(address to, uint256 amount) external returns (bool)"];

export async function connectWallet() {
  if (!window.ethereum) throw new Error("MetaMask not found");
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  return { provider, signer, address };
}

export async function transferCredits({ toAddress, amountCredits }) {
  const { signer } = await connectWallet();
  const contractAddress = import.meta.env.VITE_CARBON_TOKEN_CONTRACT;
  if (!contractAddress) throw new Error("Missing VITE_CARBON_TOKEN_CONTRACT");
  const contract = new ethers.Contract(contractAddress, erc20Abi, signer);
  const tx = await contract.transfer(toAddress, ethers.parseUnits(String(amountCredits), 18));
  const receipt = await tx.wait();
  return { hash: tx.hash, blockNumber: receipt.blockNumber };
}
