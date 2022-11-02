import React from 'react';
import "../../App.css";

const Artists = () => {
  const artistdetails = [
    {
      id: 1,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 2,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 3,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 4,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 5,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 6,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 7,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 8,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
    {
      id: 9,
      artistpicture: "/image.png",
      artistname: "Shaun P.",
      worth: "3.2 ETH"
    },
  ]
  return (
    <React.Fragment>
      <div className="pb-[100px] hidden md:block px-[24px] md:px-[70px] 2xl:px-[300px] bg-[#121212]">
        <h1 className='text-center font-[500] text-[36px] leading-[80px] orbitron-light pb-[42px]'>
            Popular Creators
        </h1>
        <div className="grid grid-cols-3 grid-row-3">
          {
            artistdetails.map((data, idx) => (
              <div key={idx} className="w-[347px] h-[107px] flex items-center gap-[24px] mb-[42px]">
                <div>
                  <h1 className='orbitron-light font-[700] text-[32px] leading-[37px]'>{ data.id }.</h1>
                </div>
                <div className="flex items-center pl-[31px] creators__card gap-[28px]">
                  <div>
                    <img src="/passport.png" alt="Artist Pic" />
                  </div>
                  <div>
                    <h1 className="orbitron-light font-[700] text-[24px] leading-[28px] pb-[12px]">{ data.artistname }</h1>
                    <p className="orbitron-light text-[18px] leading-[21px]">{ data.worth }</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Artists;
