import React from 'react';
import '../../App.css';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Nfts = () => {

	const popularnfts = [
		{
			id          : 1,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.13ETH',
			dollarprice : '$2,736'
		},
		{
			id          : 2,
			nftimage    : '/one.png',
			title       : 'face',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.50ETH',
			dollarprice : '$1,330'
		},
		{
			id          : 3,
			nftimage    : '/five.png',
			title       : 'flaged',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.22ETH',
			dollarprice : '$2,000'
		},
		{
			id          : 4,
			nftimage    : '/three.png',
			title       : 'paint',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.65ETH',
			dollarprice : '$3,976'
		},
		{
			id          : 5,
			nftimage    : '/two.png',
			title       : 'abstract',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.40ETH',
			dollarprice : '$1,500'
		},
		{
			id          : 6,
			nftimage    : '/one.png',
			title       : 'face01',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.32ETH',
			dollarprice : '$5,126'
		},
		{
			id          : 7,
			nftimage    : '/four.png',
			title       : 'sculpt',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,233'
		},
		{
			id          : 8,
			nftimage    : '/nft.png',
			title       : 'wall',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.03ETH',
			dollarprice : '$3,333'
		},
		{
			id          : 9,
			nftimage    : '/one.png',
			title       : 'face',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.12ETH',
			dollarprice : '$4,500'
		},
		{
			id          : 10,
			nftimage    : '/five.png',
			title       : 'flaged',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.17ETH',
			dollarprice : '$1,988'
		}
	];
	return (
		<React.Fragment>
			<div className='pb-[135px] px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<h1 className='text-center font-[500] text-[24px] md:text-[36px] leading-[80px] orbitron-light pb-[42px]'>
					Popular Items
				</h1>
				<div className='hidden md:flex md:gap-[40px] md:overflow-x-scroll overflow-hidden'>
					{popularnfts.map((nft, idx) => (
						<Fade key={idx} right>
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
										<Button>Bid</Button>
										<p className='text-center pt-[18px]'>{nft.dollarprice}</p>
									</div>
								</div>
							</Card>
						</Fade>
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
				<div className='md:hidden flex justify-center items-center'>
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
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 2,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 3,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 4,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 5,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 6,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 7,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 8,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 9,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		},
		{
			id          : 10,
			nftimage    : '/nft.png',
			title       : 'serickism',
			author      : 'by Angie_00',
			ethlogo     : '/eth.png',
			ethprice    : '0.23ETH',
			dollarprice : '$8,976'
		}
	];
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
								<Button>Bid</Button>
								<p className='text-center pt-[18px]'>{nft.dollarprice}</p>
							</div>
						</div>
					</Card>
				</Fade>
			))}
		</div>
	);
};
