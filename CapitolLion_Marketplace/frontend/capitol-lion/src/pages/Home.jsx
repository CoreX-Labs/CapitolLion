import React from 'react';
import Hero from './components/Hero';


const Home = () => {
	return (
		<React.Fragment>
			<div className="bg-[#121212] h-screen px-[24px] md:px-[70px] 2xl:px-[300px] text-white">
				<Hero />
			</div>
		</React.Fragment>
	);
};

export default Home;