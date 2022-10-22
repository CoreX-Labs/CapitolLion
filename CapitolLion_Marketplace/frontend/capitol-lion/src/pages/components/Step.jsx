import React from 'react';
import styled from 'styled-components';

const Step = () => {
	return (
		<React.Fragment>
		<div className="flex items-center justify-center">
			<div className="pb-[100px]">
				<h1 className='text-center font-[500] text-[36px] leading-[80px] orbitron-light pb-[42px]'>
					Create and List your NFT
				</h1>
				<div className='flex items-center gap-[45.33px]'>
					<Card
						icon='/credit-card.png'
						title='Connect Wallet'
						detail='Connect wallet to gain access to the Capitol Lion Music Network'
					/>
					<Card
						icon='/shopping-bag.png'
						title='NFT Marketplace'
						detail='Capitol Lion’s NFT Marketplace is Fueled by Music & Entertainment.'
					/>
					<Card
						icon='/heart.png'
						title='Collect NFT'
						detail='Build your collection with the Capitol Lion Music Platform.'
					/>
				</div>
			</div>
		</div>
		</React.Fragment>
	);
};

export default Step;

export const Card = ({ icon, title, detail }) => {
	return (
		<CardBox>
			<InnerContainer>
				<ImageDiv>
					<img src={icon} alt='Icon' />
				</ImageDiv>
				<TitleDiv>
					<TitleText className='orbitron-light'>{title}</TitleText>
				</TitleDiv>
				<div>
					<SubheaderText className="orbitron-light">{detail}</SubheaderText>
				</div>
			</InnerContainer>
		</CardBox>
	);
};

const CardBox = styled.div`
	cursor: pointer;
	width: 372.45px;
	height: 313px;
	background: rgba(91, 46, 157, 0.15);
	border: 0.5px solid #5b2e9d;
	border-radius: 20px;
`;

const InnerContainer = styled.div`
	width: 293.63px;
	height: 172px;
	margin-top: 89px;
	margin-left: 39.41px;
`;

const ImageDiv = styled.div`padding-bottom: 30px;`;

const TitleDiv = styled.div`padding-bottom: 8px;`;

const TitleText = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
`;

const SubheaderText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 21px;
`;
