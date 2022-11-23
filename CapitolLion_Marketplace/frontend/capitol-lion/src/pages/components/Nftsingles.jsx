import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { motion } from 'framer-motion';

const Nftsingles = ({ market }) => {
	const { name, price } = useParams();
	return (
		<React.Fragment>
			<div className='bg-[#121212] h-screen'>
        <Navbar />
          <div className="flex space-x-[50px] items-canter pt-[100px] pl-[200px]">
            {/* for image */}
            <div>
              <img className="w-[400px] h-[400px] " src="/one.png" alt="tag" />
            </div>
            {/* for text content */}
            <div className="pt-[50px]">
              <p className="orbitron-light font-[800] text-[12px] md:text-[30px] leading-[2px] text-white pb-[42px] capitalize">{ name }</p>
              <p className="orbitron-light font-[700] text-[12px] md:text-[18px] leading-[2px] text-white pb-[30px]">{ price }</p>
              <p className="orbitron-light font-[700] text-[12px] md:text-[18px] text-white pb-[30px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae illum<br /> odit minima. Nemo illum deleniti maiores alias consequuntur tempora sunt<br /> error ab delectus iure reiciendis expedita vel, sint ipsum facilis<br /> necessitatibus nisi rem, non enim quisquam sapiente commodi<br /> dolor vitae. Neque vel esse et quasi perf rendis repellendus,<br /> laudantium rem? </p>
              <motion.button
                whileTap={{ scale: -0.5 }}
                className='orbitron-light w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all  duration-500 text-white'
              >
                Buy Item
              </motion.button>
            </div>
          </div>
			</div>
		</React.Fragment>
	);
};

export default Nftsingles;
