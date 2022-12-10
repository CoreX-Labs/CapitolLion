import React from 'react';
// import axios from "axios";
import './musicDAO.css';
import LogoImagery from '../Assets/imagery.png';
import Abouts from '../Assets/about.png';
import Footer from '../footer/Footer.jsx';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const MusicDAO = () => (
	<React.Fragment>
		<div className='allBackground bg-black'>
			<Navbar />
			<div className='md:container md:mx-auto md:px-20 mt-10'>
				<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-2 '>
					<div className='col-md-6 '>
						<img className='' src={LogoImagery} alt='music dao img' />
						<p className='tx1 mb-13'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						</p>
						<button className='bottonGradient'>Mint Now 1000 TRX</button>
						<p className='tokentxt'>
							My Token IDs <br /> .................
						</p>
					</div>
					<div className='col-md-6 mt-[50px]'>
						<Video
							className='object-cover rounded-lg'
							src='/Official Capitol Lion Genesis NFT.MP4'
							alt='Capitol Lion Clip'
							autoPlay
							loop
							muted
						/>
					</div>
				</div>
			</div>

			<div className='md:container md:mx-auto md:px-20 mt-20'>
				<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-2 '>
					<div>
						<div className='text-7xl henesis text-center'>
							Genesis NFT <br />
							<div className='flex items-center justify-center gap-6'>
								<small className='o tx1 text-center font-bold'>0</small>{' '}
								<small className='tx1 text-center'>of 1111 Minted</small>
							</div>
						</div>
					</div>
					<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-3 text-center txs'>
						<div className='mb-7'>
							<h2 className='text-6xl mb-4'>1,111</h2>
							<small className='purple'>Total NFTs</small>
						</div>
						<div>
							<h2 className='text-6xl mb-4'>80</h2> <small className='purple'>Total Owners</small>
						</div>
						<div>
							<h2 className='text-6xl mb-4'>0</h2>
							<small className='purple mt-9'>Floor Price [TRX]</small>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-center items-center'>
				<div>
					<div className=''>
						<div />
						<div className='md:pr-4 text-center'>
							<h2 className='yellow text-4xl font-bold text-center'>How To Mint</h2>
						</div>
						<div />
						<div />
					</div>

					<div className='md:container md:grid md:grid-cols-4 py-12 md:px-40 md:gap-[120px]'>
						<div className='md:pr-4 text-center mb-7'>
							<h2 className='white text-4xl font-bold md:mb-7'>1</h2>
							<small className='white smalls'>
								Confirm <br />Connected
							</small>
						</div>
						<div className='md:pr-4 text-center mb-7'>
							<h2 className='white text-4xl font-bold md:mb-7'>2</h2>
							<small className='white smalls'>
								Click Mint <br />Now
							</small>
						</div>
						<div className='md:pr-4 text-center mb-7'>
							<h2 className='white text-4xl font-bold md:mb-7'>3</h2>
							<small className='white smalls'>
								Confirm <br />Transaction
							</small>
						</div>
						<div className='md:pr-4 text-center mb-7'>
							<h2 className='white text-4xl font-bold md:mb-7'>4</h2>
							<small className='white smalls'>
								Receive<br />Your NFTs
							</small>
						</div>
					</div>
				</div>
			</div>

			<div className='md:container md:grid md:grid-cols-2 py-12 md:px-40'>
				<div className='p-5 mt-[60px]'>
					<img className='pictures' src={Abouts} alt='about' />
				</div>
				<div className='p-5'>
					<div className='md:pr-4 mb-[18px]'>
						<h2 className='yellow text-4xl font-bold '>About Us</h2>
					</div>
					<p className='white justifier txtabout'>
						We’re seeking to create a Globalized Network on The Tron Blockchain which Main focus is to evolve
						the Traditional Music Industry. The NFT standard will create situations where things become
						successfully automated without the need of Human Interference. This Business Motto is Naturally
						changing Traditional Operating systems of all kinds. We want to show the world that shared
						progression of success is possible through this New Digital Age. The “Capitol Lion” Music Network
						Platform is built up into (3) Main Foundational Features which consist of a MusicDAO, MusicNFT
						Launchpad, & Market Place better known as (MusicMarkets). Our Network will develop opportunities
						through Products, Services, Tools & Resources that will promote productivity of the Evolution of
						Music.
					</p>
				</div>
			</div>

			<div className='md:container md:grid md:grid-cols-5 py-12 md:px-40 white p-9'>
				<div />
				<div>
					<div>
						<button className='btngradient'>Music DAO</button>
					</div>
					<p className='justifier'>
						The holders of the Genesis NFT Collection will make up the DAO implemented within the Capitol Lion
						Music Network. Each Genesis NFT will be used as a unit of account, meaning each (GNFT) Will count as
						one vote.
					</p>
				</div>
				<div />
				<div />
				<div />
			</div>

			<div className='md:container md:grid md:grid-cols-5 py-12 md:px-40 white p-9'>
				<div />
				<div />
				<div />
				<div>
					<div>
						<button className='btngradient'>Music Launch Pad</button>
						<p className='justifier'>
							This is where we spotlight Projects Launching out of the Capitol Lion Music Network. We help Genesis
							Holder’s & Community members Tokenize Music content and promote their movement to our partners
							across Tron Network and beyond.
						</p>
					</div>
				</div>
				<div />
			</div>

			<div className='md:container md:grid md:grid-cols-5 py-12 md:px-40 white p-9'>
				<div />
				<div>
					<div>
						<button className='btngradient'>Music NFT's</button>
					</div>
					<p className='justifier'>
						Fractionalized ownership of intellectual property rights. Creating a brand new asset class while
						Connecting Artists to supporters on their journey to conquering the transition from the traditional
						age to the digital age.
					</p>
				</div>
				<div />
				<div />
				<div />
			</div>

			<div className='md:container md:grid md:grid-cols-4 mb-9 mt-20'>
				<div />
				<div className='md:pr-4 text-center'>
					<h2 className='yellow text-4xl font-bold '>ROADMAP</h2>
				</div>
				<div />
				<div />
			</div>

			<div className='md:container md:grid md:grid-cols-5 py-12 md:px-20 white pl-[50px]'>
				<div>
					<div className='boxModel'>
						<div className='boxtitle'>
							<h2 className='text-center txheads'>Phase 01</h2>
						</div>
						<div className='boxbody'>
							<h2 className='white titles text-center mt-5 titles'>
								Pre Mint Launch <br />(Q2 2022)
							</h2>
							<p className='white text-center mt-5'>
								Build Twitter Following <br />
								Whitelist <br />
								Contest / Giveaways <br />
								Whiteslist Sale <br />
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='boxModel'>
						<div className='boxtitle'>
							<h2 className='text-center txheads'>Phase 22</h2>
						</div>
						<div className='boxbody'>
							<h2 className='white titles text-center mt-5 titles'>
								Mint <br />(Q2 2022)
							</h2>
							<p className='white text-center mt-5'>
								Public Sales <br />
								AMA with Corex<br />
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='boxModel'>
						<div className='boxtitle'>
							<h2 className='text-center txheads'>Phase 03</h2>
						</div>
						<div className='boxbody'>
							<h2 className='white titles text-center mt-5 titles'>
								Tesm Building Phase <br /> (Q4 2022)
							</h2>
							<p className='white text-center mt-5'>
								Team Building <br />
								MetaVerse Networking<br />
								Staking Capabilities <br />
								Submission Realm <br />
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='boxModel'>
						<div className='boxtitle'>
							<h2 className='text-center txheads'>Phase 04</h2>
						</div>
						<div className='boxbody'>
							<h2 className='white titles text-center mt-5 titles'>
								LaunchPad Ignition <br />(Q1 2023)
							</h2>
							<p className='white text-center mt-5'>
								LaunchPad Activated<br />
								LaunchPad Resourcea<br />
								NFT Rewards<br />
								Genesis Revenue<br />
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='boxModel'>
						<div className='boxtitle'>
							<h2 className='text-center txheads'>Phase 05</h2>
						</div>
						<div className='boxbody'>
							<h2 className='white titles text-center mt-5 titles'>
								Marketplace <br />
								(Q2 2023)
							</h2>
							<p className='white text-center mt-5'>
								Buy & Sale Native NFTs<br />
								Build Catalog of NFTs<br />
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	</React.Fragment>
);

export default MusicDAO;

const Video = styled.video`
	width: 591px;
	box-shadow: 1px 1px 60px 5px rgba(91, 46, 157, 0.3);
	border-radius: 25px;
`;
