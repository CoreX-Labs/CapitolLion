/* @marketplace */
const TronWeb =  require('tronweb');
//grab the contract instance 
async function getContract(){
   let contractInstance = await tronWeb.contract().at("TBBp5VF2q73hfMUoyxr138Kx3kbsi6HQRS");
    console.log(res);
}
getContract();// Execute the function
