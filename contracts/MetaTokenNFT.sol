// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract MetaTokenNFT is ERC721A {
    constructor() ERC721A("MetaToken", "MTA") {}

    function mint(uint256 _quantity) external payable {
        _mint(msg.sender, _quantity);
    }

    function promptDescription() public pure returns (string memory) {
        return "NFT art collection of skyscrapers, each with a different artistic style and angle";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
