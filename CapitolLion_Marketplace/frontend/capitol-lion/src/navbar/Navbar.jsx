import React, { useState, useEffect,createContext } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
//import { useCapitolLionZustandGlobalAppStore } from '../zustandstore/zustandGlobalStore';
export const userAddress = createContext();
const Navbar = () => {
	const [ showNav, setShowNav ] = useState(false);

	//not in use
   const [errorMessage, setErrorMessage]= useState(null)
   const [userBalance, setUserBalance]=useState(null)


   const [connectButtonText, setConnectButtonText]= useState({addres:"connect Wallet"})
   //const [truncAddress, setTruncAddress]=useState(null)

   const connectWalletHandler=async()=>{
    if (window.tronWeb){
       //[TronLink] We recommend that DApp developers use tronLink.request({method: 'tron_requestAccounts'}) 
       //to request users’ account information at the earliest time possible in order to get a complete TronWeb 
       //sinjection and to ensure proper connection of your DApp to TronLink extension wallet.
        window.tronLink.request({method: "tron_requestAccounts"})
        .then(result=>{
            console.log(result)
            if (result.code=="200"){
                 //setConnectButtonText("connected")
                  accountChangeHandler(window.tronWeb.defaultAddress.base58)
            }else{
                console.log("not connected")
            }
          
         
        })
       
    //an error message pops up if tronLink is not installed in the user's browser
    } else{
        setErrorMessage("Install Tronlink")
    }
   }

   //this get the default address and truncates it
   const SetTruncAddress=()=>{
	setConnectButtonText({
		addres: (window.tronWeb.defaultAddress.base58).substr(0,5) + "....." + (window.tronWeb.defaultAddress.base58).substr((window.tronWeb.defaultAddress.base58).length - 5)
	});
       
   }
   //this is called when the default account changes so as to update the address and the balance to that
   //of the current address

   const accountChangeHandler=(newAccount)=>{
      //setDefaultAccount(newAccount)
      SetTruncAddress()
      getUserBalance(newAccount)
   }

   //not in use yet
//this gets the user balance
   const getUserBalance=(address)=>{
       window.tronWeb.trx.getBalance(address)
       .then(balance=>{
        setUserBalance(parseFloat(window.tronWeb.fromSun(balance)).toFixed(3))
       })
   }

   //this listens to setAccount account action i.e it reloads if the account changes
   window.addEventListener('message', (res) => {
    if (res.data.message && res.data.message.action == "setAccount") {
      if (window.tronWeb) {
        if (res.data.message.data.address != window.tronWeb.defaultAddress.base58) {
          console.log('changed');
            window.location.reload();
        }
      }
    }
     if (res.data.message && res.data.message.action == "disconnect") {
            console.log("disconnect event", res.data.message.isTronLink)
            window.location.reload()
        }

        
  
    //this listens to setNode action i.e it reloads if the node changes(mainnet to testnet and vice-versa)
    if (res.data.message && res.data.message.action == "setNode") {
      window.location.reload();
   
    }

 });
	return (
		<userAddress.Provider value={connectButtonText.addres}>
		<React.Fragment>
			<div className='w-screen h-[64px] p-[55px] text-white flex justify-between items-center px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<Link to='/'>
					<div className='cursor-pointer'>
						<img src='/CapitolLion Website Logo.png' alt='Capitol Lion Website Logo' />
					</div>
				</Link>
				{/* mobile */}
				<div onClick={() => setShowNav(!showNav)} className='block transition-all duration-500 lg:hidden'>
					{showNav ? (
						<img className='pr-[10px]' src='/close-icon.png' alt='close-icon' />
					) : (
						<img src='/menu.png' alt='Hamburger-menu' />
					)}
				</div>
				{/* dropdown */}
				<div
					className={
						(showNav ? 'top-[90px] left-0 right-0' : '-top-[500px] left-0 right-0') +
						' absolute w-full h-[300px] bg-[#121212] dropdown transition-top duration-500 z-50'
					}>
					<ul className='mr-40px'>
						<NavLink to='/create'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Marketplace</li>
						</NavLink>
						<NavLink to='musicDAO'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>
								<a href='https://lionxeco.net/capitol-lion-genesis.html' target='_blank' rel='noreferrer'>
									<p className='text-[14px]'>MusicDAO</p>
								</a>
							</li>
						</NavLink>
						<NavLink to='/collection'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Collection</li>
						</NavLink>
						<li className='h-[56px] px-[12px] orbitron-light pt-[18px]'>
							<motion.button
								onClick={connectWalletHandler}
								whileTap={{ scale: -0.5 }}
								className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500  truncate__collection__mobile'>
								{connectButtonText.addres}
							</motion.button>
						</li>
					</ul>
				</div>
				<div className='hidden lg:block'>
					<ul className='flex gap-[24px] items-center'>
						<NavLink className='' to='/create'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Marketplace</li>
						</NavLink>
						<NavLink to='/musicDAO'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>MusicDAO</li>
						</NavLink>
						{/* <li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>
							<a href='https://lionxeco.net/capitol-lion-genesis.html' target='_blank' rel='noreferrer'>
								<p className='text-[14px]'>MusicDAO</p>
							</a>
						</li> */}
						<NavLink to='/collection'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Collection</li>
						</NavLink>
							<li className='cursor-pointer orbitron-light'>
								<motion.button
									onClick={connectWalletHandler}
									whileTap={{ scale: -1.0 }}
									className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
									<div className="flex items-center justify-center"></div>
									<p className="p-1 truncate__collection">{connectButtonText.addres}</p>
									
								</motion.button>
							</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
		</userAddress.Provider>
	);
};

export default Navbar;
