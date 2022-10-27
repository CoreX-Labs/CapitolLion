import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<React.Fragment>
			<div className='pb-[107.31px]'>
				<div className='flex items-center justify-center pb-[92px]'>
					<img src='/line.png' alt='' />
				</div>
				<div className='md:flex md:gap-[241px] md:justify-between'>
					<div className='pl-[40px]'>
						<img src='footerlogo.png' alt='' />
					</div>
					<div className='pr-[90px]'>
						<div className='pb-[32px]'>
							<ul className='pl-[10px] flex gap-[24px] orbitron-light'>
								<li>
									<a href='https://google.com' target='_blank' rel='noreferrer'>
										<p className="text-[13px] ">Docs</p>
									</a>
								</li>
								<li>
									<a href='https://google.com' target='_blank' rel='noreferrer'>
										<p className="text-[13px] ">Forum</p>
									</a>
								</li>
								<li>
									<a href='https://google.com' target='_blank' rel='noreferrer'>
										<p className="text-[13px] ">Newsletter</p>
									</a>
								</li>
								<li>
									<a href='https://google.com' target='_blank' rel='noreferrer'>
										<p className="text-[13px] ">LDA Token</p>
									</a>
								</li>
								<li>
									<a href='https://google.com' target='_blank' rel='noreferrer'>
										<p className="text-[13px] ">LionX</p>
									</a>
								</li>
							</ul>
						</div>
						<div className='flex gap-[36px] justify-center'>
							<Socials>
								<a href='https://discord.gg/7ypPS5fhch' target='_blank' rel='noreferrer'>
									<div className=''>
										<img src='/discord.png' alt='Discord Logo' />
									</div>
								</a>
							</Socials>
							<Socials>
								<a href='https://t.me/Lionxone' target='_blank' rel='noreferrer'>
									<div className=''>
										<img src='/instagram.png' alt='Instagram Logo' />
									</div>
								</a>
							</Socials>
							<Socials>
								<a
									href='https://twitter.com/capitollion?s=11&t=LFjwC_7mjtAL7YQuaMsE4A'
									target='_blank'
									rel='noreferrer'>
									<div className=''>
										<img src='/twitter.png' alt='Twitter Logo' />
									</div>
								</a>
							</Socials>
						</div>
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
	background: rgba(91, 46, 157, 0.15);
	border-radius: 100%;
	border: 0.1px solid #5b2e9d;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;
