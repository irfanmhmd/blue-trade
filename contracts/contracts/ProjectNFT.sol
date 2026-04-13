// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProjectNFT is ERC721, Ownable {
    uint256 public nextTokenId;

    struct ProjectMetadata {
        string plantationName;
        string location;
        string ipfsMetadata;
        uint256 carbonCredits;
    }

    mapping(uint256 => ProjectMetadata) public metadataByToken;

    constructor() ERC721("Blue Carbon Project Certificate", "BCPC") Ownable(msg.sender) {}

    function mintCertificate(
        address to,
        string calldata plantationName,
        string calldata location,
        string calldata ipfsMetadata,
        uint256 carbonCredits
    ) external onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        metadataByToken[tokenId] = ProjectMetadata(plantationName, location, ipfsMetadata, carbonCredits);
        return tokenId;
    }
}
