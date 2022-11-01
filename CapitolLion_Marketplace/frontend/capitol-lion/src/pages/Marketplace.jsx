import React from 'react';
import styled from 'styled-components';

const Marketplace = () => {
  return (
  <React.Fragment>
    <div className='bg-[#121212] h-auto pt-[110px] text-white px-[24px] md:px-[70px] 2xl:px-[300px]'>
    <Container>
      <h1 className="orbitron-header font-[700] text-[50px] leading-[63px]">Marketplace</h1>
    </Container>
    <div className='h-screen'>
      
    </div>
    </div>
  </React.Fragment>
  );
};

export default Marketplace;


const Container = styled.div`
  height: 299px;
  background-color: #5B2E9D;
  border-radius: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 29px 3px rgba(91, 46, 157, 0.3), inset 0px 4px 50px rgba(0, 0, 0, 0.8);
  margin-bottom: 37px
`;