import React from 'react';
import Hero from './components/Hero';
import Nfts from './components/Nfts';
import Partners from './components/Partners';

const Home = () => {
	return (
		<React.Fragment>
			<div className='bg-[#121212] h-1000 px-[24px] md:px-[70px] 2xl:px-[300px] text-white'>
				<Hero />
				<Partners />
				<Nfts />
			</div>
		</React.Fragment>
	);
};

export default Home;
