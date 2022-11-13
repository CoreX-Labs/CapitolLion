//import interact from './interact';
//import navFunction from '../navbar/navfunction';

async function getContractInstance() {
  let deployingNfts = await tronWeb.contract().at(
    "TGFT2a97b1MKahZQDkRBVr1EzRB5DDdnat"
  );
}

//now we have acess to our contract methods 
function NftMint() {
  //trigger point to connected wallet
  //ipfs automation from calling json api 
  let addressToMintTo = serialMint().to_address;

}

function ownerTokens() {
  //check connected wallet 
  //check nfts listed by connected wallet 

}

function approveContractTransact() {
  let addressTo = setApprovalForAll().to_address;
  let isApproved = setApprovalForAll().approved_bool;
}

