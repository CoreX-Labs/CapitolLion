import React from 'react';
import '../../App.css';

const Hero = () => {
  return (
    <React.Fragment>
      <div className='pt-[80px] md:pt-[70px] md:flex md:gap-[160px] bg-[#121212] px-[24px] md:px-[70px] 2xl:px-[300px]'>
        <div className="pb-[80px]">
          <p className='uppercase orbitron-light font-[700] text-[16px] leading-[20px] text-[#5B2E9D] pb-[30px]'>
            capitol lion
          </p>
          <h1 className='orbitron-header font-[700] text-[28px] md:text-[50px] leading-[35px] md:leading-[63px] tracking-wide pb-[30px]'>
            Create, Trade and
            <br /> Collect Digital Assets.
          </h1>
          <p className='orbitron-light font-[700] text-[12px] md:text-[18px] leading-[23px] text-[#a2a2a2] pb-[30px]'>
            Capitol Lion is a Self Governed NFT Platform
            <br /> Fueled by Music & Entertainment.
          </p>
          {/* <motion.button
            whileTap={{ scale: -0.5 }}
            className='orbitron-light w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 mb-[30px]'
          >
            Connect Wallet
          </motion.button> */}
          <div className='md:flex md:gap-[24px] orbitron-light font-[700] text-[18px] leading-[23px] md:text-[28px] md:leading-[35px]'>
            <div className="pb-[28px]">
              <h1>
                27, 000
                <br /> NFTs
              </h1>
            </div>
            <div className="pb-[28px]">
              <h1>
                27k
                <br /> Auctions
              </h1>
            </div>
            <div className="pb-[28px]">
              <h1>
                4k
                <br /> Creators
              </h1>
            </div>
          </div>
        </div>
        <div className=''>
          <img
            src='/meta.png'
            alt='Capitol Lion Loogo'
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;