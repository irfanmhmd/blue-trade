// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonCredit is ERC20, Ownable {
    constructor() ERC20("Blue Carbon Credit", "BCC") Ownable(msg.sender) {}

    function mintCredits(address user, uint256 amount) external onlyOwner {
        _mint(user, amount * 10 ** decimals());
    }

    function transferCredits(address to, uint256 amount) external returns (bool) {
        return transfer(to, amount * 10 ** decimals());
    }

    function burnCredits(uint256 amount) external {
        _burn(msg.sender, amount * 10 ** decimals());
    }
}
