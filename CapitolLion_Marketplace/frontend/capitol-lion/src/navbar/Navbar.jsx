import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [ showNav, setShowNav ] = useState(false);
	return (
		<React.Fragment>
			<div className='w-screen h-[64px] bg-[#121212] border-b border-white text-white flex justify-between items-center px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<Link to='/'>
					<div className='cursor-pointer'>
						<img src='/Capitol Lion Website Logo 1.png' alt='Capitol Lion Website Logo' />
					</div>
				</Link>
				{/* mobile */}
				<div
					onClick={() => setShowNav(!showNav)}
					className='block transition-all duration-500 lg:hidden'>
					{showNav ? (
						<img className='pr-[10px]' src='/close-icon.png' alt='close-icon' />
					) : (
						<img src='/menu.png' alt='Hamburger-menu' />
					)}
				</div>
				{/* dropdown */}
				<div
					className={
						(showNav ? 'top-[65px] left-0 right-0' : '-top-[500px] left-0 right-0') +
						' absolute w-full h-[357px] bg-[#121212] dropdown transition-top duration-500'
					}>
					<ul className=''>
						<Link to='/create'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Create</li>
						</Link>
						<Link to='/marketplace'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Marketplace</li>
						</Link>
						<Link to='/launchpad'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Launchpad</li>
						</Link>
						<Link to='musicDAO'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>MusicDAO</li>
						</Link>
						<Link to='/collection'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Collection</li>
						</Link>
						<li className='h-[56px] px-[12px] orbitron-light pt-[18px]'>
							<motion.button
								whileTap={{ scale: -0.5 }}
								className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
								Connect Wallet
							</motion.button>
						</li>
					</ul>
				</div>
				<div className='hidden lg:block'>
					<ul className='flex gap-[24px] items-center'>
						<Link to='/create'>
							<li className='cursor-pointer orbitron-light'>Create</li>
						</Link>
						<Link to='/marketplace'>
							<li className='cursor-pointer orbitron-light'>Marketplace</li>
						</Link>
						<Link to='/launchpad'>
							<li className='cursor-pointer orbitron-light'>Launchpad</li>
						</Link>
						<Link to='/musicDA0'>
							<li className='cursor-pointer orbitron-light'>MusicDAO</li>
						</Link>
						<Link to='/collection'>
							<li className='cursor-pointer orbitron-light'>Collection</li>
						</Link>
						<li className='cursor-pointer orbitron-light'>
							<motion.button
								whileTap={{ scale: -1.0 }}
								className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
								Connect Wallet
							</motion.button>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
