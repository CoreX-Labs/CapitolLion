import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';

const Nfts = () => {
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
		<React.Fragment>
			<div className='pb-[135px]'>
				<h1 className='text-center font-[500] text-[24px] md:text-[36px] leading-[80px] orbitron-light pb-[42px]'>
					Popular Items
				</h1>
				<div className='hidden md:flex md:gap-[20px] md:overflow-x-scroll'>
					{popularnfts.map((nft, idx) => (
						<Fade key={idx} right>
							<div className='w-[305.23px] h-[421.25px] rounded-[20px] nft__div cursor-pointer'>
								<div>
									<img src={nft.nftimage} alt='NFT Pic' />
								</div>
								<div className='flex'>
									<div className='px-[18px] pt-[10.75px] orbitron-light capitalize'>
										<h1 className='pb-[12px]'>{nft.title}</h1>
										<h1 className='pb-[12px]'>{nft.author}</h1>
										<div className='flex items-center'>
											<div>
												<p>{nft.ethprice}</p>
											</div>
											<div>
												<img src={nft.ethlogo} alt='Etherun Logo' />
											</div>
										</div>
									</div>
									{/*  */}
									<div className='pt-[18.75px]'>
										<motion.button
											whileTap={{ scale: -0.5 }}
											className='capitalize transition-all bid__button orbitron-light'>
											bid
										</motion.button>
										<p className='text-center orbitron-light pt-[12px]'>{nft.dollarprice}</p>
									</div>
								</div>
							</div>
						</Fade>
					))}
				</div>
				<div className="block md:hidden">
					<MobileNftCardSection />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Nfts;

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
	return(
		<div className="flex-col overflow-y-scroll  h-[500px] pl-[30px]">
					{popularnfts.map((nft, idx) => (
						<Fade key={idx} right>
							<div className='w-[305.23px] h-[421.25px] rounded-[20px] nft__div cursor-pointer mb-[30px]'>
								<div>
									<img src={nft.nftimage} alt='NFT Pic' />
								</div>
								<div className='flex'>
									<div className='px-[18px] pt-[10.75px] orbitron-light capitalize'>
										<h1 className='pb-[12px]'>{nft.title}</h1>
										<h1 className='pb-[12px]'>{nft.author}</h1>
										<div className='flex items-center'>
											<div>
												<p>{nft.ethprice}</p>
											</div>
											<div>
												<img src={nft.ethlogo} alt='Etherun Logo' />
											</div>
										</div>
									</div>
									{/*  */}
									<div className='pt-[18.75px]'>
										<motion.button
											whileTap={{ scale: -0.5 }}
											className='capitalize transition-all bid__button orbitron-light'>
											bid
										</motion.button>
										<p className='text-center orbitron-light pt-[12px]'>{nft.dollarprice}</p>
									</div>
								</div>
							</div>
						</Fade>
					))}
					</div>
	)
}
