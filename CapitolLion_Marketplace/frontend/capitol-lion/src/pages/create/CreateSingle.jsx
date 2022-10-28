import React from 'react';
import styled from 'styled-components';

const CreateSingle = () => {
	const details = [
		{
			id   : 1,
			tag  : '/price.png',
			text : 'Fixed price'
		},
		{
			id   : 2,
			tag  : '/auction.png',
			text : 'Auction'
		},
		{
			id   : 3,
			tag  : '/bids.png',
			text : 'Open bids'
		}
	];
	return (
		<React.Fragment>
			<div className='flex items-center justify-center pb-[100px]'>
				<div>
					<div className=''>
						<div className='pb-[32px]'>
							<h1 className='orbitron-light font-[600] text-[24px] leading-[30px]'>Upload file</h1>
						</div>
						<InputSection>
							<div>
								<h1 className='text-center orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px]'>
									PNG, JPG, GIF WEBP or MP4. Max 200MB
								</h1>
								<div className='flex items-center justify-center pt-[24px]'>
									<input type='file' />
								</div>
							</div>
						</InputSection>
						<div className='pb-[80px]'>
							<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[51px]'>
								Click to select method
							</h1>
							<div className='flex gap-[22px] items-center'>
								{details.map((d, index) => (
									<SelectMethod>
										<div key={index} className='flex items-center justify-center pb-[18px]'>
											<img src={d.tag} alt='Price Tag' />
										</div>
										<div>
											<p className='orbitron-light font-[500] text-[18px] leading-[23px] text-center'>{d.text}</p>
										</div>
									</SelectMethod>
								))}
							</div>
						</div>
						<div>
							<form>
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>Price</h1>
								</label>
								<Input className='orbitron-light' type='' placeholder='enter price for one item (ETH)' />
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
										Choose collection
									</h1>
								</label>
								<Input className='orbitron-light' type='' placeholder='Choose collection' />
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>Title</h1>
								</label>
								<Input className='orbitron-light' type='' placeholder='e.g “Crypto Punk”' />
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
										Description
									</h1>
								</label>
								<Input className='orbitron-light' type='' placeholder='e.g “this is a very limited item”' />
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
										Royalties
									</h1>
								</label>
								<Input
									className='orbitron-light'
									type=''
									placeholder='suggested: 0, 10%, 20%, 30%. Maximum is 70%'
								/>
								<div className='pt-[52px]'>
									<button className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 orbitron-light'>
										Create Item
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CreateSingle;

const InputSection = styled.div`
	width: 700px;
	height: 170px;
	border: 2.5px dashed #5b2e9d;
	border-radius: 20px;
	margin-bottom: 80px;
`;

const Input = styled.input`
	width: 699px;
	height: 40px;
	background: #121212;
	border: 0.5px solid #5b2e9d;
	border-radius: 10px;
	padding: 10px;
`;

const SelectMethod = styled.div`
	width: 162px;
	height: 139px;
	background: #121212;
	border: 0.5px solid #5b2e9d;
	border-radius: 20px;
	padding: 29px 26px;
	cursor: pointer;
`;
