const axios = require("axios");
const FormData = require("form-data");

async function uploadViaPinata(file) {
  const formData = new FormData();
  formData.append("file", file.buffer, file.originalname || "upload.bin");
  const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${process.env.PINATA_JWT}`,
      ...formData.getHeaders()
    }
  });
  return response.data.IpfsHash;
}

async function uploadViaWeb3Storage(file) {
  const response = await axios.post("https://api.web3.storage/upload", file.buffer, {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${process.env.WEB3_STORAGE_TOKEN}`,
      "Content-Type": "application/octet-stream",
      "X-NAME": file.originalname || "upload.bin"
    }
  });
  return response.data.cid;
}

async function uploadToIpfs(file) {
  if (!file) return null;
  const provider = (process.env.IPFS_PROVIDER || "pinata").toLowerCase();
  const gateway = process.env.IPFS_GATEWAY || "https://ipfs.io/ipfs/";

  let hash;
  if (provider === "web3storage") {
    hash = await uploadViaWeb3Storage(file);
  } else {
    hash = await uploadViaPinata(file);
  }

  return { hash, url: `${gateway}${hash}` };
}

module.exports = { uploadToIpfs };
