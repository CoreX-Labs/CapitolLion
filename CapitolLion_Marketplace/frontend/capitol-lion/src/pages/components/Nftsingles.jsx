import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const notification = () =>
	toast('Wallet not connected, connect to your wallet.', {
		duration  : 5000,
		position  : 'top-center',

		// Styling
		style     : {
			border       : '1px solid #5b2e9d',
			borderRadius : '20px',
			padding      : '16px',
			color        : '#ffffff',
			background   : '#121212',
			boxShadow    : '1px 1px 29px 3px rgba(91, 46, 157, 0.3), inset 0px 4px 50px rgba(0, 0, 0, 0.8)',
			fontSize     : '18px',
			fontFamily   : 'orbitron-light',
			marginTop    : '20px'
		},
		className : '',

		// Custom Icon
		icon      : '⚠️',

		// Aria
		ariaProps : {
			role        : 'status',
			'aria-live' : 'polite'
		}
	});

const handleClick = () => {
	notification();
};

const Nftsingles = ({ market }) => {
	const { name, price } = useParams();
	return (
		<React.Fragment>
			<Toaster />
			<div className='bg-[#121212] h-screen md:h-screen'>
				<Navbar />
				<div className='md:flex md:space-x-[50px] items-center pt-[30px] md:pt-[100px] md:pl-[200px] px-[10px]'>
					{/* for image */}
					<div>
						<img className='w-[400px] h-[400px] ' src='/one.png' alt='tag' />
					</div>
					{/* for text content */}
					<div className='pt-[50px]'>
						<p className='orbitron-light font-[800] text-[24px] md:text-[30px] leading-[2px] text-white pb-[28px] md:pb-[42px] capitalize'>
							{name}
						</p>
						<p className='orbitron-light font-[700] text-[14px] md:text-[18px] leading-[2px] text-white pb-[15px] md:pb-[30px]'>
							{price}
						</p>
						<p className='orbitron-light font-[700] text-[13px] md:text-[18px] text-white md:pb-[30px] hidden md:block'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illum<br /> odit minima. Nemo illum
							deleniti maiores alias consequuntur tempora sunt<br /> error ab delectus iure reiciendis expedita
							vel, sint ipsum facilis<br /> necessitatibus nisi rem, non enim quisquam sapiente commodi<br />{' '}
							dolor vitae. Neque vel esse et quasi perf rendis repellendus,<br /> laudantium rem?{' '}
						</p>
						{/* mobile */}
						<p className='orbitron-light font-[700] text-[13px] md:text-[18px] text-white pb-[30px] block md:hidden'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illum odit minima. Nemo illum
							deleniti maiores alias consequuntur tempora sunt error ab delectus iure reiciendis expedita vel,
							sint ipsum facilis necessitatibus nisi rem, non enim quisquam sapiente commodi dolor vitae. Neque
							vel esse et quasi perf rendis repellendus, laudantium rem?{' '}
						</p>
						<motion.button
							onClick={handleClick}
							whileTap={{ scale: -0.5 }}
							className='orbitron-light w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all  duration-500 text-white mb-[30px] md:mb-0'>
							Buy Item
						</motion.button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Nftsingles;
