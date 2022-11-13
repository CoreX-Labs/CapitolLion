//import interact from './interact';
//import navFunction from '../navbar/navfunction';
//tronWeb.trx.whatever you want to do
//treatnfts as tokens and use the tronweb page to handle the rest 
//import contractAbi from './abi.json';
var nftMarketPlace;
async function getContractInstance() {
  let nftMarketPlace = await tronweb.contract({ "entrys": [{ "inputs": [{ "name": "_feeRecipient", "type": "address" }, { "name": "_platformFee", "type": "uint16" }], "stateMutability": "Nonpayable", "type": "Constructor" }, { "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "nft", "type": "address" }, { "name": "tokenId", "type": "uint256" }], "name": "ItemCanceled", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "nft", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "payToken", "type": "address" }, { "name": "pricePerItem", "type": "uint256" }], "name": "ItemListed", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "seller", "type": "address" }, { "indexed": true, "name": "buyer", "type": "address" }, { "indexed": true, "name": "nft", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "quantity", "type": "uint256" }, { "name": "payToken", "type": "address" }, { "name": "pricePerItem", "type": "uint256" }], "name": "ItemSold", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "nft", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "payToken", "type": "address" }, { "name": "newPrice", "type": "uint256" }], "name": "ItemUpdated", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "Event" }, { "inputs": [{ "name": "platformFee", "type": "uint256" }], "name": "UpdatePlatformFee", "type": "Event" }, { "inputs": [{ "name": "platformFeeRecipient", "type": "address" }], "name": "UpdatePlatformFeeRecipient", "type": "Event" }, { "outputs": [{ "name": "paytoken", "type": "address" }], "inputs": [{ "type": "uint256" }], "name": "AllowedCrypto", "stateMutability": "View", "type": "Function" }, { "inputs": [{ "name": "_paytoken", "type": "address" }], "name": "addCurrency", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_nftAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_payToken", "type": "address" }, { "name": "_owner", "type": "address" }], "name": "buyItem", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_nftAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }], "name": "cancelListing", "stateMutability": "nonpayable", "type": "function" }, { "outputs": [{ "type": "address" }], "name": "feeReceipient", "stateMutability": "View", "type": "Function" }, { "inputs": [{ "name": "_nftAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_quantity", "type": "uint256" }, { "name": "_payToken", "type": "address" }, { "name": "_pricePerItem", "type": "uint256" }], "name": "listItem", "stateMutability": "nonpayable", "type": "function" }, { "outputs": [{ "name": "quantity", "type": "uint256" }, { "name": "payToken", "type": "address" }, { "name": "pricePerItem", "type": "uint256" }], "inputs": [{ "type": "address" }, { "type": "uint256" }, { "type": "address" }], "name": "listings", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "name": "owner", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "address" }], "inputs": [{ "type": "address" }, { "type": "uint256" }], "name": "ownerOf", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "name": "platformFee", "stateMutability": "View", "type": "Function" }, { "outputs": [{ "type": "bool" }], "inputs": [{ "name": "_payToken", "type": "address" }], "name": "registeredToken", "stateMutability": "View", "type": "Function" }, { "name": "renounceOwnership", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_nftAddress", "type": "address" }, { "name": "_tokenId", "type": "uint256" }, { "name": "_payToken", "type": "address" }, { "name": "_newPrice", "type": "uint256" }], "name": "updateListing", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_platformFee", "type": "uint16" }], "name": "updatePlatformFee", "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_platformFeeRecipient", "type": "address" }], "name": "updatePlatformFeeRecipient", "stateMutability": "nonpayable", "type": "function" }] }, "TUrPgCu1RwmvLT8JffE9cPnZqpyqh5UBsj");

  //async function getContractInstance() {
  //let nftMarketPlace = await tronWeb.contract().at("TUrPgCu1RwmvLT8JffE9cPnZqpyqh5UBsj");
  //we now have acess to our contract methods

  async function triggerContract() {
    let instance = await tronWeb.contract().at('TUrPgCu1RwmvLT8JffE9cPnZqpyqh5UBsj');
    //[owner] = await Promise.all([instance.owner().call(),]);

    let res = await instance.owner().call();
    console.log(res);
  }
  triggerContract();
  //async function viewListings() {
  // let tokenId = await  nftMarketPlace._tokenId_uint256;
  //let sellerAddress = nftMarketPlace._nftAddress_address;
  // let sellerAddress = await nftMarketPlace.makeItem(nftMarketPlace._nftAddress_address,
  // nftMarketPlace._tokenId_uint256, nftMarketPlace._pricePerItem_uint256);
  //nftMarketPlace.feeRecepient
  //}
  console.log(nftMarketPlace.feeRecepient);



  function listingNft() {
    let nftAddress = myDetails().address;
    let tokenNftTokenId = listItem()._tokenId_uint256;
    let noOfNfts = listItem()._quantity_uint256;
    let payTokenAddress = listItem()._payToken_address;
    let nftPrice = listItem()._pricePerItem_uint256;

  }

  function cancelNftListing() {
    let nftAddress1 = cancelListing()._nftAddress_address;
    let tokenNftTokenId = cancelListing()._tokenId_uint256;

  }
  function approveContract() {
    //transfer approval
    let ownAddress = myDetails.address;
    let spenderAddress = _spenderAddress
    let amount = listItem._pricePerItem_uint256;
    //return  approve(ownAddress, spenderAddress, amount);
    let sendNft = tronWeb.transactionBuilder.sendToken(spenderAddress, amount, tokenId, ownAddress,);
    return sendNft;
  }
  function buyNft() {
    let nftAddress3 = buyItem()._nftAddress_address;
    let spenderAddress = buyItem()._payToken_address;
    let tokenId1 = buyItem()._tokenId_uint256;
    let addressToPay = buyItem()._payToken_address;
    let ownerAddress = buyItem()._owner_address;

    require(tronWeb.trx.getBalance(nftAddress3) <= amount, "Not enough funds to make purchase");

    return tronWeb.transactionBuilder.purchaseToken(nftAddress3, tokenId1, amount, spenderAddress, approveContract());

  }

}
