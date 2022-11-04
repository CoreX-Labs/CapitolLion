import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const [ showNav, setShowNav ] = useState(false);
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
						' absolute w-full h-[357px] bg-[#121212] dropdown transition-top duration-500 z-50'
					}>
					<ul className=''>
						<NavLink to='/create'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Marketplace</li>
						</NavLink>
						<NavLink to='musicDAO'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>MusicDAO</li>
						</NavLink>
						<NavLink to='/collection'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Collection</li>
						</NavLink>
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
						<NavLink className='' to='/create'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Marketplace</li>
						</NavLink>
						<NavLink to='/musicDA0'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>MusicDAO</li>
						</NavLink>
						<NavLink to='/collection'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Collection</li>
						</NavLink>
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
