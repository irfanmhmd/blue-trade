// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Registry {
    enum Status {
        Pending,
        Approved,
        Rejected
    }

    struct PlantationRecord {
        uint256 plantationId;
        string ipfsHash;
        address ngoAddress;
        Status status;
        uint256 timestamp;
    }

    address public admin;
    mapping(uint256 => PlantationRecord) public plantations;

    event PlantationRegistered(uint256 indexed plantationId, string ipfsHash, address indexed ngoAddress);
    event PlantationApproved(uint256 indexed plantationId);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function registerPlantation(uint256 plantationId, string calldata ipfsHash, address ngoAddress) external onlyAdmin {
        plantations[plantationId] = PlantationRecord({
            plantationId: plantationId,
            ipfsHash: ipfsHash,
            ngoAddress: ngoAddress,
            status: Status.Pending,
            timestamp: block.timestamp
        });
        emit PlantationRegistered(plantationId, ipfsHash, ngoAddress);
    }

    function approvePlantation(uint256 plantationId) external onlyAdmin {
        plantations[plantationId].status = Status.Approved;
        emit PlantationApproved(plantationId);
    }

    function getPlantation(uint256 plantationId) external view returns (PlantationRecord memory) {
        return plantations[plantationId];
    }
}
