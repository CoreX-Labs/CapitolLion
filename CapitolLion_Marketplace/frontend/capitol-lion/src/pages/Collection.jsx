import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../App.css';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const notify = () =>
	toast('Wallet Address copied to Clipboard', {
		duration  : 1500,
		position  : 'top-center',

		// Styling
		style     : {
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
	const [ profilePic, setProfilePicture ] = useState('/user.png');
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
		await navigator.clipboard.writeText('TRxvdndjdgsvsgndfgdjkdfsdfg');
		await notify();
	};

	return (
		<React.Fragment>
			<div className='bg-[#121212] h-[2000px] text-white'>
				<Toaster />
				<Navbar />
				<div className=''>
					<img className='h-[404px] w-[100vw] object-cover object-top' src={banner} alt='Banner' />
				</div>
				<div className='flex justify-end items-center -mt-[60px] pr-[20px] cursor-pointer relative'>
					<form>
						<input type='file' name='picture' id='file-input' onChange={handleBannerChange} />
						<label className='cursor-pointer' for='file-input'>
							<img src='/camera.png' alt='camera' />
						</label>
					</form>
				</div>
				<div className='flex justify-center items-center -mt-[90px]'>
					<div>
						<img className='rounded-full w-[208px] h-[208px] object-cover' src={profilePic} alt='User' />
					</div>
				</div>
				<div className='flex justify-center items-center pl-[175px] -mt-[75px] cursor-pointer relative'>
					<form>
						<input type='file' name='picture' id='dp-input' onChange={handleProfilePicChange} />
						<label className='cursor-pointer' for='dp-input'>
							<img src='/dpcamera.png' alt='camera' />
						</label>
					</form>
				</div>
				{/*  */}
				<div className='flex justify-center mt-[65px]'>
					<h1 className='orbitron-light font-[500] text-[24px] leading-[31px] text-center inline-flex items-center gap-[10px]'>
						User45948{' '}
						<span class='flex h-3 w-3'>
							<span class='animate-ping absolute inline-flex h-[13px] w-[13px] rounded-full bg-[#008000]  -mt-[1px]' />
							<span class='relative inline-flex rounded-full h-3 w-3 bg-[#008000]' />
						</span>
					</h1>
				</div>
				<h1 className='orbitron-light font-[400] text-[16px] leading-[31px] text-center'>
					TRxvdndjdgsvsgndfgdjkdfsdfg
				</h1>
				<div className='flex justify-center mt-[10px]'>
					<CopyButton onClick={handleCopyEvent}>Copy</CopyButton>
				</div>
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
`;
