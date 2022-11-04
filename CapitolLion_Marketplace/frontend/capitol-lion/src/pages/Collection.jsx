import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
// import { useForm } from 'react-hook-form';
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

const Collection = () => {
  const [banner, setBanner] = useState("/banner.png");

  function handleChange(e) {
      console.log(e.target.files);
      setBanner(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(banner));
  }, [banner]);

	return (
		<React.Fragment>
			<div className='bg-[#121212] h-[2000px] text-white'>
				<Navbar />
				<div className=''>
					<img className="h-[404px] w-[100vw] object-cover object-top" src={banner} alt='Banner' />
				</div>
        <form>
          <input type="file" name="picture" onChange={handleChange}/>
          <button>set</button>
        </form>
			</div>
		</React.Fragment>
	);
};

export default Collection;
