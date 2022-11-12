require('dotenv').config();
const TronWeb = require('tronweb')
const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": 'your api key' },
    privateKey: 'your private key'
})

//contract instance
export default async function getContract(){
   let contractInstance = await tronWeb.contract().at("TBBp5VF2q73hfMUoyxr138Kx3kbsi6HQRS");
   console.log(contractInstance);
}
getContract();// Execute the function
//signing a transaction 
export const sign  = async transaction => {
    try {
        const tronweb = window.tronWeb;
        const signedTransaction = await tronweb.trx.sign(transaction.transaction);
        return signedTransaction;
    } catch (error) {
        console.log(error, 'signerr');
        throw new Error(error);
    }
};


