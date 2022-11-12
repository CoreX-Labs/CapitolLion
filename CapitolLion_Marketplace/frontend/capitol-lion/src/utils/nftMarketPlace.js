import interact from './interact';
import navFunction from '../navbar/navfunction';

async function getContractInstance(){
let nftMarketPlace = await tronWeb.contract().at("TBBp                                           5VF2q73hfMUoyxr138Kx3kbsi6HQRS");
}//we now have acess to our contract methods

export default function viewListings(connectedAddress){
    //grab the connected wallet 
    let contractAddress = myDetails.address;
    let tokenId = this.tokenId;
    let sellerAddress = listItem()._nftAddress_address;

    return {
    'tokenId':tokenId,
    'sellerAddress':sellerAddress
    }
}

export default function listingNft() {
    let nftAddress = myDetails().address;                                                                                     
    let tokenNftTokenId = listItem()._tokenId_uint256;
    let noOfNfts = listItem()._quantity_uint256;
    let payTokenAddress = listItem()._payToken_address;
    let nftPrice = listItem()._pricePerItem_uint256;

}

export default function cancelNftListing() {
    let nftAddress1 = cancelListing()._nftAddress_address;
    let  tokenNftTokenId = cancelListing()._tokenId_uint256;

}
export default function approveContract () {
    //transfer approval
    let ownAddress = myDetails.address;
    let spenderAddress = _spenderAddress
    let amount = listItem._pricePerItem_uint256;
    approve(ownAddress, spenderAddress, amount);
}
export default function buyNft() {
    let nftAddress3 = buyItem()._nftAddress_address;
    let spenderAddress = buyItem()._payToken_address;
    let tokenId1 = buyItem()._tokenId_uint256;
    let addressToPay = buyItem()._payToken_address;
    let ownerAddress = buyItem()._owner_address;
}