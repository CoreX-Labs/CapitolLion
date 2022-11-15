import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import Footer from '../footer/Footer';
// import Fade from 'react-reveal';

const onsale = [
	{
		id       : 1,
		nftimage : '/three.png',
		title    : 'face of man',
		price    : 'by Angie_00'
	},
	{
		id       : 2,
		nftimage : '/six.png',
		title    : 'walled',
		price    : 'by Angie_00'
	},
	{
		id       : 3,
		nftimage : '/four.png',
		title    : 'sculpt',
		price    : 'by Angie_00'
	},
	{
		id       : 4,
		nftimage : '/one.png',
		title    : 'face',
		price    : 'by Angie_00'
	},
	{
		id       : 5,
		nftimage : '/two.png',
		title    : 'galaxy',
		price    : 'by Angie_00'
	},
	{
		id       : 6,
		nftimage : '/five.png',
		title    : 'flagged',
		price    : 'by Angie_00'
	},
	{
		id       : 7,
		nftimage : '/five.png',
		title    : 'flagged',
		price    : 'by Angie_00'
	},
	{
		id       : 8,
		nftimage : '/two.png',
		title    : 'galaxy',
		price    : 'by Angie_00'
	},
	{
		id       : 9,
		nftimage : '/one.png',
		title    : 'face',
		price    : 'by Angie_00'
	}
];

const owned = [
	{
		id       : 1,
		nftimage : '/two.png',
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
		nftimage : '/five.png',
		title    : 'face of man',
		price    : 'by Angie_00'
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

const notify = () =>
	toast('Copied to Clipboard', {
		duration  : 1500,
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
		icon      : '👏',

		// Aria
		ariaProps : {
			role        : 'status',
			'aria-live' : 'polite'
		}
	});

const Collection = () => {
	const [ profilePic, setProfilePicture ] = useState('/blank.png');
	const [ banner, setBanner ] = useState('/banner.png');

	const handleProfilePicChange = (e) => {
		console.log(e.target.files);
		setProfilePicture(URL.createObjectURL(e.target.files[0]));
	};

	const handleBannerChange = (e) => {
		console.log(e.target.files);
		setBanner(URL.createObjectURL(e.target.files[0]));
	};

	const handleCopyEvent = async () => {
		await navigator.clipboard.writeText('TPvu2GA1u2PthLCNgEDUDCygxE...');
		await notify();
	};

	return (
		<React.Fragment>
			<div className='bg-[#121212] h-auto text-white'>
				<Toaster />
				<Navbar />
				<div className=''>
					<img
						className='h-[200px] md:h-[404px] w-[100vw] object-cover object-top'
						src={banner}
						alt='Banner'
					/>
				</div>
				<div className='flex justify-end items-center -mt-[38px] cursor-pointer absolute right-[10px]'>
					<form>
						<input type='file' name='picture' id='file-input' onChange={handleBannerChange} />
						<label className='cursor-pointer' htmlFor='file-input'>
							<img className='' src='/camera.png' alt='camera' />
						</label>
					</form>
				</div>
				<div className='flex justify-center items-center -mt-[60px] md:-mt-[90px]'>
					<div>
						<img
							className='rounded-full md:w-[208px] md:h-[208px] object-cover w-[120px] h-[120px]'
							src={profilePic}
							alt='User'
						/>
					</div>
				</div>
				<div className=''>
					{/* <form>
						<input type='file' name='picture' id='dp-input' onChange={handleProfilePicChange} />
						<label className='cursor-pointer' htmlFor='dp-input'>
							<img src='/dpcamera.png' alt='camera' />
						</label>
					</form> */}
				</div>
				{/*  */}
				<div className='flex justify-center mt-[30px]'>
					<h1 className='orbitron-light font-[500] text-[24px] leading-[31px] text-center inline-flex items-center gap-[10px]'>
						User45948{' '}
						<span className='flex w-3 h-3'>
							<span className='animate-ping absolute inline-flex h-[13px] w-[13px] rounded-full bg-[#008000]  -mt-[1px]' />
							<span className='relative inline-flex rounded-full h-3 w-3 bg-[#008000]' />
						</span>
					</h1>
				</div>
				<h1 className='orbitron-light font-[400] text-[16px] leading-[31px] text-center'>
					TPvu2GA1u2PthLCNgEDUDCygxE4DK9qJwZ
				</h1>
				<div className='flex justify-center mt-[10px] gap-[10px]'>
					<CopyButton>
						<form>
							<input type='file' name='picture' id='dp-input' onChange={handleProfilePicChange} />
							<label className='cursor-pointer' htmlFor='dp-input'>
								Edit
							</label>
						</form>
					</CopyButton>
					<CopyButton onClick={handleCopyEvent}>Copy</CopyButton>
				</div>
				{/*  */}
				<div className='flex gap-[0.5506rem] justify-center items-center mt-[40px] md:mt-[50px]'>
					<select
						id='tab-select'
						class='sm:hidden py-3 px-4 pr-9 block w-full rounded-md text-sm'
						aria-label='Tabs'
						role='tablist'>
						<option value='#hs-tab-to-select-1'>On Sale</option>
						<option value='#hs-tab-to-select-2'>Owned</option>
					</select>
					{/*  */}
					<div class='hidden sm:block border-b border-gray-200 dark:border-gray-700'>
						<nav class='flex space-x-2' aria-label='Tabs' role='tablist' hs-data-tab-select='#tab-select'>
							<button
								type='button'
								class='hs-tab-active:bg-[#5b2e9d] hs-tab-active:border-b-transparent hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-white text-sm font-medium text-center text-[#5b2e9d] orbitron-light tracking-wider rounded-t-lg active'
								id='hs-tab-to-select-item-1'
								data-hs-tab='#hs-tab-to-select-1'
								aria-controls='hs-tab-to-select-1'
								role='tab'>
								On Sale
							</button>
							<button
								type='button'
								class='hs-tab-active:bg-[#5b2e9d] hs-tab-active:border-b-transparent hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-2 bg-white text-sm font-medium text-center text-[#5b2e9d] orbitron-light tracking-wider rounded-t-lg active'
								id='hs-tab-to-select-item-2'
								data-hs-tab='#hs-tab-to-select-2'
								aria-controls='hs-tab-to-select-2'
								role='tab'>
								Owned
							</button>
						</nav>
					</div>
				</div>
				<div class='mt-3'>
					<div id='hs-tab-to-select-1' role='tabpanel' aria-labelledby='hs-tab-to-select-item-1'>
						<div className='flex justify-center items-center mt-[30px]'>
							<div className='lg:grid lg:gap-[54px] md:grid md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:grid-rows-3'>
								{onsale.map((item, idx) => (
									<Card key={idx} className='w-[347px] h-[428px] bg-[#121212] cursor-pointer'>
										<img
											className='object-cover transition-all duration-300 lg:opacity-50 lg:hover:opacity-100'
											src={item.nftimage}
											alt='NFT pic'
										/>
										<div className='px-[1.4375rem] flex align-center gap-[44px] orbitron-light pt-[22px]'>
											<div>
												<h3 className='font-[700] text-[18px] leading-[21px] pb-[6px] capitalize'>{item.title}</h3>
												<p className='capitalize font-[400] text-[14px] leading-[16px] pb-[6px]'>{item.price}</p>
												<button onClick={handleClick} className='capitalize font-[700] text-[20px] text-[#5B2E9D] hover:text-[#874edd] transition-all'>list for sale</button>
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>
					</div>
					<div
						id='hs-tab-to-select-2'
						class='hidden'
						role='tabpanel'
						aria-labelledby='hs-tab-to-select-item-2'>
						<div className='flex justify-center items-center mt-[30px]'>
							<div className='lg:grid lg:gap-[54px] md:grid md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:grid-rows-3'>
								{owned.map((item, idx) => (
									<Card key={idx} className='w-[347px] h-[428px] bg-[#121212] cursor-pointer'>
										<img
											className='object-cover transition-all duration-300 lg:opacity-50 lg:hover:opacity-100'
											src={item.nftimage}
											alt='NFT pic'
										/>
										<div className='px-[1.4375rem] flex align-center gap-[44px] orbitron-light pt-[22px]'>
											<div>
												<h3 className='font-[700] text-[18px] leading-[21px] pb-[6px] capitalize'>{item.title}</h3>
												<p className='capitalize font-[400] text-[14px] leading-[16px] pb-[6px]'>{item.price}</p>
												<button onClick={handleClick} className='capitalize font-[700] text-[20px] text-[#5B2E9D] hover:text-[#874edd] transition-all'>up for sale</button>
											</div>
										</div>
									</Card>
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

export default Collection;

const CopyButton = styled.button`
	width: 72px;
	height: 30px;
	background: #5b2e9d;
	border-radius: 5px;
	font-family: orbitron-light;
`;

const Card = styled.div`
	background: rgba(91, 46, 157, 0.15);
	backdrop-filter: blur(7.5px);
	border-radius: 20px;
	margin-bottom: 30px;
`;
