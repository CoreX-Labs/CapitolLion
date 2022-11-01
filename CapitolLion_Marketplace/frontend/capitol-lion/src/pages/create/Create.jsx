import React from 'react';
import styled from "styled-components";
import Footer from "../../footer/Footer"
import { Link, Outlet } from "react-router-dom";

const Create = () => {
  return (
    <React.Fragment>
      <div className="bg-[#121212] h-auto pt-[110px] text-white px-[24px] md:px-[70px] 2xl:px-[300px]">
        <Container>
          <h1 className="orbitron-header font-[700] text-[50px] leading-[63px]">Create collectible</h1>
        </Container>
        <div>
          <h1 className="text-center orbitron-light font-[400] text-[22px] leading-[28px] opacity-25">Choose “Single” if you want your collectible to be one of a kind<br /> or “Multiple” if you want to sell one collectible multiple times</h1>
          <div className="md:flex md:items-center md:justify-center gap-[90px] pt-[70px] pb-[100px] pl-[25px]">
            <div>
              <Link to="create-single">
                <SingleCard>
                  <Identifier>
                    <div>
                      <img src="/null.png" alt="" />
                    </div>
                    <div>
                      <p className="orbitron-light font-[600] text-[22px] leading-[28px]">Single</p>
                    </div>
                  </Identifier>
                </SingleCard>
              </Link>
            </div>
            <div>
              <Link to="create-multiple">
                <MultipleCard>
                  <Identifier>
                    <div>
                      <img src="/null.png" alt="" />
                    </div>
                    <div>
                      <p className="orbitron-light font-[600] text-[22px] leading-[28px]">Multiple</p>
                    </div>
                  </Identifier>
                </MultipleCard>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      <Footer />
      </div>
    </React.Fragment>
  );
};

export default Create;

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

const SingleCard = styled.div`
  width: 320px;
  height: 320px;
  background: #121212;
  border: 1px solid #5B2E9D;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    box-shadow: #5B2E9D 0px 0px 26px 5px;
    transition: 500ms ease-in-out;
  }
`;

const MultipleCard = styled.div`
  width: 320px;
  height: 320px;
  background: #121212;
  border: 1px solid #5B2E9D;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    box-shadow: #5B2E9D 0px 0px 26px 5px;
    transition: 500ms ease-in-out;
  }
`;

const Identifier = styled.div`
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    padding-bottom: 24px;
  }
`