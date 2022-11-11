// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "./TRC721Storage.sol";
import "../Library/Counters.sol";

contract LionXCreateItem is TRC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    address contractAddress;
    uint256 public cost = 100;

    constructor(
        address marketContract,
        string memory name,
        string memory symbol
    ) TRC721(name, symbol) {
        contractAddress = marketContract;
    }

    function mintNFT(string memory tokenURI) public payable returns (uint) {
        require(msg.value > cost, "Need to send the minting fee!");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        (bool sent, ) = payable(contractAddress).call{
            value: balanceOf(address(this))
        }("");
        require(sent, "internal error");

        return newItemId;
    }
}
