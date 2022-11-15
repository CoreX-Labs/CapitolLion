import React from 'react'

const Nftsingles = ({ market }) => {
  return (
    <React.Fragment>
      <div className="bg-[#121212] h-screen">
      <h1 className="text-white">This is the page for the listing</h1>
      <h1 className='text-white orbitron-light'>{market.title}</h1>
      <h1 className='text-white orbitron-light'>{market.price}</h1>
      <img src="/one.png" alt="" />
      </div>
    </React.Fragment>
  )
}

export default Nftsingles;