import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='pb-[90px] md:pb-[70px]'>
				<div className='flex items-center justify-center'>
					<img src='/line.png' alt='hr' />
				</div>
				<div>
					<div className='md:pt-[92px] md:flex md:gap-[150px]'>
						<div className='px-[130px] pt-[50px] md:pt-0 pb-[30px]'>
							<img src='/footerlion.png' alt='Capitiol Lion Logo' />
						</div>
						{/*  */}
						<div className='flex justify-center md:block'>
							<div className=''>
								<div className='grid grid-cols-2 md:grid-cols-5 gap-[20px] orbitron-light pb-[26px]'>
									<div>
										<a href='https://lionx.one/documents' target='_blank' rel='noreferrer'>
											Docs
										</a>
									</div>
									<div>
										<a
											href='https://forum.trondao.org/t/the-establishment-of-lionx/2660?u=tashlion'
											target='_blank'
											rel='noreferrer'>
											Forum
										</a>
									</div>
									<div>
										<a href='https://lionx.one/' target='_blank' rel='noreferrer'>
											Newsletter
										</a>
									</div>
									<div>
										<a
											href='https://sunswap.com/#/scan/detail/TNP1D18nJCqQHhv4i38qiNtUUuL5VyNoC1'
											target='_blank'
											rel='noreferrer'>
											LDA Token
										</a>
									</div>
									{/* <div>
                  <a href="" target="_blank" rel='noreferrer'>Launchpad</a>
                </div> */}
									<div>
										<a href='https://lionxeco.net/' target='_blank' rel='noreferrer'>
											LionX
										</a>
									</div>
								</div>
								{/*  */}
								<div className='flex gap-[36px]'>
									<a href='https://discord.gg/7ypPS5fhch' target='_blank' rel='noreferrer'>
										<Socials className='flex items-center justify-center'>
											<img src='/discord.png' alt='Discord Logo' />
										</Socials>
									</a>
									<a href='https://t.me/Lionxone' target='_blank' rel='noreferrer'>
										<Socials className='flex items-center justify-center'>
											<img src='/telegram.png' alt='Telegram Logo' />
										</Socials>
									</a>
									<a
										href='https://twitter.com/capitollion?s=11&t=LFjwC_7mjtAL7YQuaMsE4A'
										target='_blank'
										rel='noreferrer'>
										<Socials className='flex items-center justify-center'>
											<img src='/twitter.png' alt='Twitter Logo' />
										</Socials>
									</a>
								</div>
							</div>
						</div>
						{/*  */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

const Socials = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	background: rgba(91, 46, 157, 0.15);
`;
