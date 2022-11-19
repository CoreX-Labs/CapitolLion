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
import UpcomingDrops from './components/UpcomingDrops';
import toast, { Toaster } from 'react-hot-toast';
import Swiper from './components/Swiper';

const notify = () => toast('Notification set successfully', {
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
			marginTop: '20px',
	},
	className: '',

	// Custom Icon
	icon: '👏',

	// Aria
	ariaProps: {
			role: 'status',
			'aria-live': 'polite',
	},
});

const Home = () => {
	return (
		<React.Fragment>
		<Toaster />
			<div className='text-white h-1000 bg-[#121212]'>
				<div className="h-screen bg-[url('rectangle.png')] bg-no-repeat bg-cover">
					<Navbar />
					<div className='pt-[110px]'>
						<Launchpad />
					</div>
				</div>
				<Swiper />
				{/* <UpcomingDrops /> */}
				<Hero />
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
	
	const setNotification = () => {
		notify();
	}
	
	return (
		<Container>
			<div className="hidden sm:block md:flex">
				{/* <div>
					<img src='/label.png' alt='Texture' />
				</div> */}
				<div className="md:pl-[20px]">
					<video className="rounded-lg" width="600px" height="100px" src="vid.webm" autoPlay loop muted></video>
				</div>
			</div>
			<Sub>
				<div>
					<p className='orbitron-light font-[400] text-[14px] leading-[26px] pb-[25px] capitalize'>Tron</p>
				</div>
				<div>
					<h2 className='orbitron-light font-[700] text-[32px] leading-[48px] pb-[25px] capitalize'>
						Tron soundup
					</h2>
				</div>
				<div className='pb-[12px]'>
					<Timer />
				</div>
				<div className='pb-[12px]'>
					<HeroButtonOne>
						<a href='https://kraftly.io/mintable/111/gallery?page=1' target='_blank' rel='noreferrer' className='tracking-wide orbitron-light'>View Song</a>
					</HeroButtonOne>
				</div>
				<div className='tracking-widest orbitron-light pb-[30px]'>
					<HeroButtonTwo onClick={setNotification}>
						<div>
							<img src='/bell.png' alt='Bell Icon' />
						</div>
						<div>
							<p className='tracking-wide orbitron-light'>Get Notified</p>
						</div>
					</HeroButtonTwo>
				</div>
				{/*  */}
				<div className="block sm:hidden">
					<video className="rounded-lg" width="600px" height="100px" src="vid.webm" autoPlay loop muted></video>
				</div>
			</Sub>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 140px;
	height: 122px;
	display: flex;
	gap: 120px;
	align-items: center;
	padding-left: 40px;
	@media (max-width: 568px) {
			margin-top: 13.75rem;
   padding-left: 7px;
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
		const countdownDate = new Date('November 28 2022 00:00:00').getTime();

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
		<div className='pb-[20px]'>
			<section className='timer-container'>
				<section className='timer'>
					<div className='time'>
						<section>
							<h3 className='orbitron-header font-[400] text-[43px] leading-[52px] tracking-wider'>
								{timerDays}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Days</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[43px] leading-[52px] tracking-wider'>
								{timerHours}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Hours</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[43px] leading-[52px] tracking-wider'>
								{timerMinutes}
							</h3>
							<h3>
								<small className='font-[400] text-[12px] leading-[14px] orbitron-light'>Minutes</small>
							</h3>
						</section>
						<span className='font-[400] text-[52px] leading-[52px] -mt-[30px]'>:</span>
						<section>
							<h3 className='orbitron-header font-[400] text-[43px] leading-[52px] tracking-wider'>
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
