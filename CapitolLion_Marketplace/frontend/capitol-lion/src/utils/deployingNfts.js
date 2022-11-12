import interact from './interact';
import navFunction from '../navbar/navfunction';

async function getContractInstance() {
    let deployingNfts = await tronWeb.contract().at(
        "TBBp5VF2q73hfMUoyxr138Kx3kbsi6HQRS"
    );
}

//now we have acess to our contract methods 
export default function serialMint() {
    
}