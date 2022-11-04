import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <React.Fragment>
      <div className='pb-[107.31px] bg-[#121212] text-white'>
        <div className='flex items-center justify-center pb-[92px]'>
          <img src='/line.png' alt='' />
        </div>
        <div className='block sm:flex md:gap-[241px] md:justify-between'>
          <div className='pl-[40px]'>
            <img src='footerlogo.png' alt='' />
          </div>
          <div className='pr-[90px]'>
            <div className='pb-[32px]'> 
              <ul className='pl-[10px] flex gap-[24px] orbitron-light'>
                <li>
                  <a href='https://lionx.one/documents' target='_blank' rel='noreferrer'>
                    <p className="text-[13px] md:text-[19px]">Docs</p>
                  </a>
                </li>
                <li>
                  <a href='https://forum.trondao.org/t/the-establishment-of-lionx/2660?u=tashlion' target='_blank' rel='noreferrer'>
                    <p className="text-[13px] md:text-[19px]">Forum</p>
                  </a>
                </li>
                <li>
                  <a href='https://lionx.one/' target='_blank' rel='noreferrer'>
                    <p className="text-[13px] md:text-[19px]">Newsletter</p>
                  </a>
                </li>
                <li>
                  <a href='https://sunswap.com/#/scan/detail/TNP1D18nJCqQHhv4i38qiNtUUuL5VyNoC1' target='_blank' rel='noreferrer'>
                    <p className="text-[13px] md:text-[19px]">LDA Token</p>
                  </a>
                </li>
                <li>
                  <a href='https://lionxeco.net/' target='_blank' rel='noreferrer'>
                    <p className="text-[13px] md:text-[19px]">LionX</p>
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
