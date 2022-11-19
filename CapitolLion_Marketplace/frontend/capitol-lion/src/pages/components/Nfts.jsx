import React from 'react';
import '../../App.css';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

const Nfts = () => {

	const popularnfts = [
		{
			id          : 1,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.13TRX',
			dollarprice : '$2,736'
		},
		{
			id          : 2,
			nftimage    : '/one.png',
			title       : 'face',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.50TRX',
			dollarprice : '$1,330'
		},
		{
			id          : 3,
			nftimage    : '/five.png',
			title       : 'flaged',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.22TRX',
			dollarprice : '$2,000'
		},
		{
			id          : 4,
			nftimage    : '/three.png',
			title       : 'paint',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.65TRX',
			dollarprice : '$3,976'
		},
		{
			id          : 5,
			nftimage    : '/two.png',
			title       : 'abstract',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.40TRX',
			dollarprice : '$1,500'
		},
		{
			id          : 6,
			nftimage    : '/one.png',
			title       : 'face01',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.32TRX',
			dollarprice : '$5,126'
		},
		{
			id          : 7,
			nftimage    : '/four.png',
			title       : 'sculpt',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,233'
		},
		{
			id          : 8,
			nftimage    : '/nft.png',
			title       : 'wall',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.03TRX',
			dollarprice : '$3,333'
		},
		{
			id          : 9,
			nftimage    : '/one.png',
			title       : 'face',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.12TRX',
			dollarprice : '$4,500'
		},
		{
			id          : 10,
			nftimage    : '/five.png',
			title       : 'flaged',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.17TRX',
			dollarprice : '$1,988'
		}
	];

	const notification = () => toast('Wallet not connected, connect to your wallet.', {
		duration: 5000,
		position: 'top-center',
	
		// Styling
		style: {
				border: '1px solid #5b2e9d',
				borderRadius: '20px',
				padding: '16px',
				color: '#ffffff',
				background: '#121212',
				boxShadow: '1px 1px 29px 3px rgba(91, 46, 157, 0.3), inset 0px 4px 50px rgba(0, 0, 0, 0.8)',
				fontSize: '18px',
				fontFamily: 'orbitron-light',
				marginTop: '20px'
		},
		className: '',
	
		// Custom Icon
		icon: '⚠️',
	
		// Aria
		ariaProps: {
				role: 'status',
				'aria-live': 'polite',
		},
	});
	
	const handleClick = () => {
		notification();
	}
	
	return (
		<React.Fragment>
		<Toaster />
			<div className='pb-[135px] px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<h1 className='text-center font-[500] text-[24px] md:text-[36px] leading-[80px] orbitron-light pb-[42px]'>
					Popular Items
				</h1>
				<div className='hidden md:flex md:gap-[40px] md:overflow-x-scroll overflow-hidden'>
					{popularnfts.map((nft, idx) => (
						<div key={idx} right>
							<Card>
								<img className='object-cover' src={nft.nftimage} alt='NFT pic' />
								<div className='px-[1.4375rem] flex align-center gap-[44px] orbitron-light pt-[22px]'>
									<div>
										<h3 className='font-[700] text-[18px] leading-[21px] pb-[6px] capitalize'>{nft.title}</h3>
										<p className='capitalize font-[400] text-[14px] leading-[16px] pb-[6px]'>{nft.author}</p>
										<div className='flex gap-[0.7188rem] align-center justify-start'>
											<div className=''>
												<img src={nft.ethlogo} alt='ETH Logo' />
											</div>
											<div>
												<p className='uppercase font-[400] text-[18px]'>{nft.ethprice}</p>
											</div>
										</div>
									</div>
									<div>
										<Button onClick={handleClick}>Bid</Button>
										<p className='text-center pt-[18px]'>{nft.dollarprice}</p>
									</div>
								</div>
							</Card>
						</div>
					))}
					<div>
						{/* {
							databaseData?databaseData.map((data, idx) => (
								<div key={idx}>
									<h1>{data.price}</h1>
								</div>
							)) : null
						} */}
					</div>
				</div>
				<div className='flex items-center justify-center md:hidden'>
					<MobileNftCardSection />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Nfts;

const Card = styled.div`
	width: 349px;
	height: 26.75rem;
	background: rgba(91, 46, 157, 0.15);
	backdrop-filter: blur(7.5px);
	border-radius: 20px;
	margin-bottom: 25px;
	cursor: pointer;
	@media (max-width: 568px) {
		width: 340px;
	}
`;

const Button = styled.button`
	width: 139px;
	height: 36px;
	border: 3px solid #5b2e9d;
	border-radius: 30px;
`;

export const MobileNftCardSection = () => {
	const popularnfts = [
		{
			id          : 1,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 2,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 3,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 4,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 5,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 6,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 7,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 8,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 9,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		},
		{
			id          : 10,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23TRX',
			dollarprice : '$8,976'
		}
	];


	const notification = () => toast('Wallet not connected, connect to your wallet.', {
		duration: 5000,
		position: 'top-center',
	
		// Styling
		style: {
				border: '1px solid #5b2e9d',
				borderRadius: '20px',
				padding: '16px',
				color: '#ffffff',
				background: '#121212',
				boxShadow: '1px 1px 29px 3px rgba(91, 46, 157, 0.3), inset 0px 4px 50px rgba(0, 0, 0, 0.8)',
				fontSize: '18px',
				fontFamily: 'orbitron-light',
				marginTop: '20px'
		},
		className: '',
	
		// Custom Icon
		icon: '⚠️',
	
		// Aria
		ariaProps: {
				role: 'status',
				'aria-live': 'polite',
		},
	});
	
	const handleClick = () => {
		notification();
	}
	
	return (
		<div className='flex-col overflow-y-scroll h-[500px]'>
			{popularnfts.map((nft, idx) => (
				<Fade key={idx} bottom>
					<Card>
						<img className='object-cover' src={nft.nftimage} alt='NFT pic' />
						<div className='px-[1.4375rem] flex align-center gap-[44px] orbitron-light pt-[22px]'>
							<div>
								<h3 className='font-[700] text-[18px] leading-[21px] pb-[6px] capitalize'>{nft.title}</h3>
								<p className='capitalize font-[400] text-[14px] leading-[16px] pb-[6px]'>{nft.author}</p>
								<div className='flex gap-[0.7188rem] align-center justify-start'>
									<div className=''>
										<img src={nft.ethlogo} alt='ETH Logo' />
									</div>
									<div>
										<p className='uppercase font-[400] text-[18px]'>{nft.ethprice}</p>
									</div>
								</div>
							</div>
							<div>
								<Button onClick={handleClick}>Bid</Button>
								<p className='text-center pt-[18px]'>{nft.dollarprice}</p>
							</div>
						</div>
					</Card>
				</Fade>
			))}
		</div>
	);
};
