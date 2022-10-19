import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const [showNav, setShowNav ] = useState(false);
	return (
		<React.Fragment>
			<div className='w-screen h-[64px] bg-[#121212] border-b border-white text-white flex justify-between items-center px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<div>
					<img
						src='/Capitol Lion Website Logo 1.png'
						alt='Capitol Lion Website Logo'
					/>
				</div>
				{/* mobile */}
				<div onClick={() => setShowNav(!showNav)}  className='block lg:hidden'>
					<img
						src='/menu.png'
						alt='Hamburger-menu'
					/>
				</div>
				{/* dropdown */}
				<div className={(showNav ? "top-[65px] left-0" : "-top-[500px]") + " absolute w-full h-[357px] bg-[#121212] dropdown"}>
					<ul className="">
						<li className="h-[56px] pl-[24px] orbitron-light border-b pt-[18px]">Create</li>
						<li className="h-[56px] pl-[24px] orbitron-light border-b pt-[18px]">Marketplace</li>
						<li className="h-[56px] pl-[24px] orbitron-light border-b pt-[18px]">Launchpad</li>
						<li className="h-[56px] pl-[24px] orbitron-light border-b pt-[18px]">MusicDAO</li>
						<li className="h-[56px] pl-[24px] orbitron-light border-b pt-[18px]">Collection</li>
						<li className="h-[56px] px-[12px] orbitron-light pt-[18px]">
							<button className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
								Connect Wallet
							</button>
						</li>
					</ul>
				</div>
				<div className='hidden lg:block'>
					<ul className='flex gap-[24px] items-center'>
						<li className='cursor-pointer orbitron-light'>Create</li>
						<li className='cursor-pointer orbitron-light'>Marketplace</li>
						<li className='cursor-pointer orbitron-light'>Launchpad</li>
						<li className='cursor-pointer orbitron-light'>MusicDAO</li>
						<li className='cursor-pointer orbitron-light'>Collection</li>
						<li className='cursor-pointer orbitron-light'>
							<button className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
								Connect Wallet
							</button>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
