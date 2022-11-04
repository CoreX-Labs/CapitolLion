import React, { useEffect, useRef, useState } from 'react';
import Artists from './components/Artists';
import Hero from './components/Hero';
import Nfts from './components/Nfts';
import Partners from './components/Partners';
import Step from './components/Step';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import '../App.css';
import Navbar from '../navbar/Navbar';
import Objective from '../pages/components/Objective';

const Home = () => {
	return (
		<React.Fragment>
			<div className='text-white h-1000 bg-[#121212]'>
				<div className="h-screen bg-[url('rectangle.png')] bg-no-repeat bg-cover">
					<Navbar />
					<div className='pt-[110px]'>
						<Launchpad />
					</div>
				</div>
				{/* <Hero /> */}
				<Partners />
				<Objective />
				<Nfts />
				<Artists />
				<Step />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Home;

export const Launchpad = () => {
	return (
		<Container>
			<div className="hidden sm:block">
				<img src='/LaunchNFT.png' alt='Texture' />
			</div>
			<Sub>
				<div>
					<p className='orbitron-light font-[400] text-[14px] leading-[26px] pb-[25px] capitalize'>j. cole</p>
				</div>
				<div>
					<h2 className='orbitron-light font-[700] text-[32px] leading-[48px] pb-[25px] capitalize'>
						kevin's heart
					</h2>
				</div>
				<div className='pb-[12px]'>
					<Timer />
				</div>
				<div className='pb-[12px]'>
					<HeroButtonOne>
						<p className='tracking-wide orbitron-light'>View Song</p>
					</HeroButtonOne>
				</div>
				<div className='tracking-widest orbitron-light'>
					<HeroButtonTwo>
						<div>
							<img src='/bell.png' alt='Bell Icon' />
						</div>
						<div>
							<p className='tracking-wide orbitron-light'>Get Notified</p>
						</div>
					</HeroButtonTwo>
				</div>
			</Sub>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 170px;
	height: 122px;
	display: flex;
	gap: 135px;
	align-items: center;
	padding-left: 90px;
	@media (max-width: 568px) {
			margin-top: 6.25rem;
   padding-left: 0.625rem;
  }
`;

const Sub = styled.div`padding: 1px;`;

const HeroButtonOne = styled.button`
	width: 233px;
	height: 40px;
	background: rgba(65, 55, 55, 0.17);
	border-radius: 6px;
	border: 1px solid rgba(183, 180, 180, 0.47);
`;

const HeroButtonTwo = styled.button`
	width: 233px;
	height: 40px;
	background: linear-gradient(268.69deg, #4f2149 -0.52%, #2d3f63 101.76%);
	border: 1px solid rgba(183, 180, 180, 0.47);
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 9.01px;
`;

export const Timer = () => {
	const [ timerDays, setTimerDays ] = useState('00');
	const [ timerHours, setTimerHours ] = useState('00');
	const [ timerMinutes, setTimerMinutes ] = useState('00');
	const [ timerSeconds, setTimerSeconds ] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date('November 14 2022 00:00:00').getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				// stop timer
				clearInterval(interval.current);
			} else {
				// update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	//componentDidMount
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval();
		};
	});

	return (
		<div className=''>
			<section className='timer-container'>
				<section className='timer'>
					<div className='time'>
						<section>
							<h3 className='orbitron-header font-[400] text-[48px] leading-[52px] tracking-wider'>
								{timerDays}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Days</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[48px] leading-[52px] tracking-wider'>
								{timerHours}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Hours</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[48px] leading-[52px] tracking-wider'>
								{timerMinutes}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Minutes</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[48px] leading-[52px] tracking-wider'>
								{timerSeconds}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Seconds</small>
							</h3>
						</section>
					</div>
				</section>
			</section>
		</div>
	);
};

// px-[24px] md:px-[70px] 2xl:px-[300px]
