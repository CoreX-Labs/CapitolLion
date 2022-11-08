import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal';
import Navbar from '../navbar/Navbar';
import '../App.css';
import Footer from '../footer/Footer';

const market = [
	{
		id       : 1,
		nftimage : '/one.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 2,
		nftimage : '/four.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 3,
		nftimage : '/three.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 4,
		nftimage : '/four.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 5,
		nftimage : '/two.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 6,
		nftimage : '/six.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 7,
		nftimage : '/five.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 8,
		nftimage : '/two.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 9,
		nftimage : '/one.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	}
];

const Marketplace = () => {
	return (
		<React.Fragment>
			<div className='bg-[#121212] h-auto text-white'>
				<Navbar />
				<div className='px-[24px] md:px-[70px] 2xl:px-[300px]'>
					<Container>
						<h1 className='orbitron-header font-[700] text-[50px] leading-[63px]'>Marketplace</h1>
					</Container>
					<div className='h-auto'>
						<div className='px-[140px] md:block md:gap-[134px] pb-[86px] hidden sm:hiddem lg:flex'>
							<div>
								<SearchInput>
									<div>
										<input className='bg-transparent w-[210px] focus:outline-none border-none focus:border-none' type='text' />
									</div>
									<div>
										<img src='/search.png' alt='Search Icon' />
									</div>
								</SearchInput>
							</div>
							{/*  */}
							<div className='lg:block hidden'>
								<div class='hs-dropdown relative inline-flex [--trigger:hover]'>
									<button
										id='hs-dropdown-hover-event'
										type='button'
										className='hs-dropdown-toggle py-3 px-[20px] inline-flex justify-center items-center gap-2 rounded-md bg-[#121212]  text-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm orbitron-light font-[700] dropdown__menu'>
										Categories
										<svg
											className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-'
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
											/>
										</svg>
									</button>
									<div
										className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-[#121212] border-[#5B2E9D] shadow-md rounded-lg p-2  dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full z-50 border'
										aria-labelledby='hs-dropdown-hover-event'>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											Music
										</a>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											Entertainment
										</a>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='lg:block hidden'>
								<div class='hs-dropdown relative inline-flex [--trigger:hover]'>
									<button
										id='hs-dropdown-hover-event'
										type='button'
										className='hs-dropdown-toggle py-3 px-[20px] inline-flex justify-center items-center gap-2 rounded-md bg-[#121212]  text-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm orbitron-light font-[700] dropdown__menu'>
										Buy 
										<svg
											className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-'
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
											/>
										</svg>
									</button>
									<div
										className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-[#121212] border-[#5B2E9D] shadow-md rounded-lg p-2  dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full z-50 border'
										aria-labelledby='hs-dropdown-hover-event'>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											Buy Now
										</a>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											On Auction
										</a>
									</div>
								</div>
							</div>
							{/*  */}
							<div className='lg:block hidden'>
								<div class='hs-dropdown relative inline-flex [--trigger:hover]'>
									<button
										id='hs-dropdown-hover-event'
										type='button'
										className='hs-dropdown-toggle py-3 px-[20px] inline-flex justify-center items-center gap-2 rounded-md bg-[#121212]  text-white align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm orbitron-light font-[700] dropdown__menu'>
										All
										<svg
											className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-'
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
												stroke='currentColor'
												stroke-width='2'
												stroke-linecap='round'
											/>
										</svg>
									</button>
									<div
										className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-[#121212] border-[#5B2E9D] shadow-md rounded-lg p-2  dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full z-50 border'
										aria-labelledby='hs-dropdown-hover-event'>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											Verified Accounts
										</a>
										<a
											className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-white orbitron-light hover:bg-[#5e2b9d] focus:ring-2 focus:ring-blue-500 cursor-pointer'
											href={window.scrollTo(10, 10)}>
											Verified Collections
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* TO LIST CARDS */}
						<div className='flex justify-center items-center'>
							<div className='lg:grid lg:gap-[54px] md:grid md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:grid-rows-3'>
								{market.map((item, idx) => (
									<Fade bottom>
										<Card key={idx} className='w-[347px] h-[428px] bg-[#121212] cursor-pointer'>
											<img
												className='object-cover lg:opacity-50 lg:hover:opacity-100 transition-all duration-300'
												src={item.nftimage}
												alt='NFT pic'
											/>
											<div className='px-[1.4375rem] flex align-center gap-[44px] orbitron-light pt-[22px]'>
												<div>
													<h3 className='font-[700] text-[18px] leading-[21px] pb-[6px] capitalize'>{item.title}</h3>
													<p className='capitalize font-[400] text-[14px] leading-[16px] pb-[6px]'>{item.price}</p>
													<button className='uppercase font-[700] text-[20px] text-[#5B2E9D]'>Place a Bid</button>
												</div>
											</div>
										</Card>
									</Fade>
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Marketplace;

const Container = styled.div`
	height: 299px;
	background: linear-gradient(
		90.85deg,
		rgba(66, 5, 65, 0.15) -3.14%,
		rgba(82, 96, 173, 0.15) 101.54%
	);
	backdrop-filter: blur(5px);
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 37px;
	@media (max-width: 600px) {
		height: 200px;
		h1 {
			font-size: 30px;
		}
	}
`;

const SearchInput = styled.div`
	width: 301px;
	height: 47px;
	background: linear-gradient(91.13deg, #1b0754 -5.38%, rgba(236, 28, 153, 0) 103.68%);
	border-radius: 10px;
	border: 1px solid #5b2e9d;
	padding: 5px;
	font-size: 18px;
	font-family: orbitron-light;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;

const Card = styled.div`
	background: rgba(91, 46, 157, 0.15);
	backdrop-filter: blur(7.5px);
	border-radius: 20px;
	margin-bottom: 30px;
`;
