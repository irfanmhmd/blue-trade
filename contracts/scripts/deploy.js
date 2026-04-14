import hre from "hardhat";

async function main() {
  const Registry = await hre.ethers.getContractFactory("Registry");
  const registry = await Registry.deploy();
  await registry.waitForDeployment();

  const CarbonCredit = await hre.ethers.getContractFactory("CarbonCredit");
  const carbonCredit = await CarbonCredit.deploy();
  await carbonCredit.waitForDeployment();

  const ProjectNFT = await hre.ethers.getContractFactory("ProjectNFT");
  const projectNFT = await ProjectNFT.deploy();
  await projectNFT.waitForDeployment();

  console.log("Registry:", await registry.getAddress());
  console.log("CarbonCredit:", await carbonCredit.getAddress());
  console.log("ProjectNFT:", await projectNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
