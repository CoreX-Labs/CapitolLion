import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
//import { useCapitolLionZustandGlobalAppStore } from '../zustandstore/zustandGlobalStore';

const Navbar = () => {
	const [ showNav, setShowNav ] = useState(false);

	const connectWallet = () => {
  window.tronWeb.contract().at('TPvu2GA1u2PthLCNgEDUDCygxE4DK9qJwZ');
	const interval = setInterval(async () => {
      getWalletDetails();
      //wallet checking interval 2 sec
    }, 2000);
    return () => {
      clearInterval(interval);
    };
};

	const [myMessage, setMyMessage] = useState(<h3>Connecting...</h3>);
  const [myDetails, setMyDetails] = useState({
    name: 'Connect Wallet',
    address: 'Connect Wallet',
    balance: 'Connect Wallet',
    network: 'Connect Wallet',
    link: 'false',
  });

  //getBalance Method 
  const getBalance = async () => {
    //if wallet is installed and logged, get TRX token balance 
    if (window.tronWeb && window.tronWeb.ready) {
      let walletBalances = await window.tronWeb.trx.getAccount(
        window.tronWeb.defaultAddress.base58
      );
      return walletBalances;
    } else {
      return 0;
    }
  };

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
        setMyMessage(<h3>Wallet Detected Please Log In</h3>);
        setMyDetails({
          name: 'Connect Wallet',
          address: 'Connect Wallet',
          balance: 'Connect Wallet',
          network: 'Connect Wallet',
          link: 'false',
        });
      }
    } else {
      //wallet not detected at all
      setMyMessage(<h3>Wallet Not Detected</h3>);
    }
  };

	return (
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
								onClick={connectWallet}
								whileTap={{ scale: -0.5 }}
								className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500  truncate__collection__mobile'>
								{myDetails.address}
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
						<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>
							<a href='https://lionxeco.net/capitol-lion-genesis.html' target='_blank' rel='noreferrer'>
								<p className='text-[14px]'>MusicDAO</p>
							</a>
						</li>
						<NavLink to='/collection'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Collection</li>
						</NavLink>
							<li className='cursor-pointer orbitron-light'>
								<motion.button
									onClick={connectWallet}
									whileTap={{ scale: -1.0 }}
									className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
									<div className="flex items-center justify-center"></div>
									<p className="p-1 truncate__collection">{myDetails.address}</p>
								</motion.button>
							</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
