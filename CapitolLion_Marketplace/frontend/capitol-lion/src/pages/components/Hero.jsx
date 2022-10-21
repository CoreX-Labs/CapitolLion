import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

const Hero = () => {
	return (
		<React.Fragment>
			<div className='md:pt-[159px] flex gap-[81px]'>
				<div>
					<p className='uppercase orbitron-light font-[700] text-[16px] leading-[20px] text-[#5B2E9D] pb-[30px]'>
						capitol lion
					</p>
					<h1 className='orbitron-header font-[700] text-[50px] leading-[63px] tracking-wide pb-[30px]'>
						Create, sell and
						<br /> collect digital assets.
					</h1>
					<p className='orbitron-light font-[700] text-[18px] leading-[23px] text-[#a2a2a2] pb-[30px]'>
						Capitol Lion is a Self Governed NFT Platform
						<br /> Fueled by Music & Entertainment.
					</p>
					<motion.button
						whileTap={{ scale: -0.5 }}
						className='orbitron-light w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 mb-[30px]'
					>
						Connect Wallet
					</motion.button>
					<div className='flex gap-[24px] orbitron-light font-[700] text-[28px] leading-[35px]'>
						<div>
							<h1>
								27, 000
								<br /> NFTs
							</h1>
						</div>
						<div>
							<h1>
								27k
								<br /> Auctions
							</h1>
						</div>
						<div>
							<h1>
								4k
								<br /> Creators
							</h1>
						</div>
					</div>
				</div>
				<div className='herologobackground'>
					<img
						src='/herologo.png'
						alt='Capitol Lion Loogo'
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Hero;
