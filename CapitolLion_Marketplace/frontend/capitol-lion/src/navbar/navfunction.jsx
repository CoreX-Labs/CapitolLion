import { React, useState, useEffect } from 'react';

//creating the connect button functionality 
export default function navFunction() {
    const [myMessage, setMyMessage] = useState(<h3>LOADING...</h3>);
    const [myDetails, setMyDetails] = useState({
        name: 'none',
        address: 'none',
        balance: 0,
        network: 'none',
        link: 'false',
    });
//getBalance Method 
const getBalance = async () => {
    //if wallet is installed and logged, get TRX token balance 
    if (window.tronWeb && window.tronWeb.ready) {
        let walletBalances = await window.reonWeb.trx.getAccount (
            window.tronWeb.defaultAddress.base58
        );
        return walletBalances;
    } else {
        return 0;
    }
}; 

//getWalletDetails Method
const getWalletDetails = async () => {
    if (window.tronWeb) {
        //checking if wallet is injected 
        if (window.tronWeb.ready) {
            let tempBalance = await getBalance();

            if (!tempBalance.balance) {
                tempBalance.balance = 0;
            }

//setting the message once we have a wallet and are logged in 
setMyMessage(<h3>Wallet Connected</h3>);
setMyDetails({ 
    name: window.tronWeb.defaultAddress.name,
    address: window.tronWeb.defaultAddress.base58,
    balance: tempBalance.balance / 1000000,
    network: window.tronWeb.fullNode.host,
    link: 'true',
});
        } else {
            //we have a wallet and are not logged  in 
            setMyMessag(<h3>Wallet Detected Please Log In</h3>);
            setMyDetails({
                name: 'none',
                address: 'none',
                balance: 0,
                network: 'none',
                link: 'false',
            });
        }
    } else {
        //wallet not detected at all
         setMyMessage(<h3>Wallet Not Detected</h3>);
    }
};

//using useEffect hook to set wallet checking interval 
useEffect(() => {
    const interval = setInterval(async () => {
        getWalletDetails();
        //wallet checking interval 2 sec
    }, 2000);
    return () => {
        clearInterval(interval);
    };
});

return (
    <div className='App'>
        <div className='Card'>
            <h1>WALLET INTEGRATION</h1>
            <div className='Stats'>
                <h4>Account Name: {myDetails.name}</h4>
                <h4>My Address: {myDetails.address} </h4>
                <h4> Balance: {myDetails.balance}</h4>
                <h4>network Selected: {myDetails.network}</h4>
                <h4>Link Established: {myDetails.link}</h4>
            </div>
        </div>

</div>
);
}
