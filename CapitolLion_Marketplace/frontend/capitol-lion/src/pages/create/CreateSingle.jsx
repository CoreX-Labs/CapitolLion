import React, { useState, useEffect } from 'react';
import { getRecoil } from 'recoil-nexus'
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { addressAtom } from '../../atoms';
window.Buffer = window.Buffer || require("buffer").Buffer;

const TronWeb = require('tronweb')

//this should be stored in .env file if 
const tronWeb = new TronWeb({
    fullHost: 'https://nile.trongrid.io',
    headers: { "TRON-PRO-API-KEY": "ed608383-db9a-45df-9ec3-f29039761861"},
    privateKey: 'c0dbe88da9ae08a7aafcb3ed2fb5e47c6c98ab2494490ab370c13b33218be12f'
})

const notify = () => toast('Successfully created NFT.', {
  duration: 5000,
  position: 'top-center',

  // Styling
  style: {
    border: '1px solid #5b2e9d',
    borderRadius: '20px',
    padding: '16px',
    color: '#ffffff',
    background: '#121212',
    boxShadow: '1px 1px 29px 3px rgba(91, 46, 157, 0.3), inset 0px 4px 50px rgba(0, 0, 0, 0.8)',
    fontSize: '18px',
    fontFamily: 'orbitron-light',
    marginTop: '20px'
  },
  className: '',

  // Custom Icon
  icon: '👏',

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});

const CreateSingle = () => {


  const [details, setDetails] = useState(null);
  const address = getRecoil(addressAtom)


console.log(window.tronlink);
console.log("..........");
console.log(TronWeb);
console.log(".......");
console.log(tronWeb);
console.log("......");
console.log(window.tronWeb);
  
  const navigate = useNavigate();
  
//    const f=async()=>{
// var instance = await tronWeb.contract().at("TGFT2a97b1MKahZQDkRBVr1EzRB5DDdnat")
//    let res = await instance.serialMint(address).send({
//     feeLimit:100_000_000,
//     shouldPollResponse:true
//    })
//    return res
// }
// f().then(res => console.log(res));

  const schema = yup.object().shape({
    metadata: yup.mixed().required("Please provide a file"),
    title: yup.string().required("Give your NFT a name"),
    description: yup.string().required("Add a description for your NFT"),
    royalties: yup.number().positive().integer().min(0).max(7).required("Please Enter a price for your NFT"),
    hashtag: yup.string().required("Enter a Hashtag for your item"),
    age: yup.number().positive().integer().min(18).max(100).required("You must be 18+"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const f = async () => {
    try {
      const instance = await  tronWeb.contract().at("TGFT2a97b1MKahZQDkRBVr1EzRB5DDdnat")
        await  instance.serialMint(address.address).send({
       feeLimit:100_000_000,
      shouldPollResponse:true
   })

    } catch (error) {
      console.log(error)
    }
}
  const onFormSubmit = async (data) => {
    console.log(data);
    const details = setDetails(data);
    console.log(details)
    await notify();
    await setTimeout(() => {
      navigate("/", window.scrollTo(0, 0));
    }, 1500);
  };

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(details));
  }, [details]);

  return (
    <React.Fragment>
      <div className='flex items-center justify-center pb-[100px]'>
        <div>
        <Toaster />
          <div className=''>
            <div className='pb-[32px]'>
              <h1 className='orbitron-light font-[600] text-[24px] leading-[30px]'>Upload file</h1>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <InputSection>
                <div>
                  <h1 className='text-center orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px]'>
                    MP3 or MP4. Max 200MB
                  </h1>
                  <div className='flex items-center justify-center pt-[24px]'>
                    <input accept=".mp4,.mp3" className="file:mr-4 file:py-2 file:px-4
                      file:rounded-[30px] file:border-0
                      file:text-sm file:font-semibold
                    file:bg-[#5B2E9D] file:text-white orbitron-light
                    hover:file:bg-[#6736b1] transition-all" type='file' name='picture' {...register("metadata")} />
                    <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.metadata?.message}</p>
                  </div>
                </div>
              </InputSection>
              <div>
                  <label>
                    <h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>Title</h1>
                  </label>
                  <Input className='orbitron-light focus:ring-[#5B2E9D] focus:border-[#5B2E9D]' type='text' placeholder='e.g “Crypto Punk”' {...register('title')} />
                  <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.title?.message}</p>
                  {/*  */}
                  <label>
                    <h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
                      Description
                    </h1>
                  </label>
                  <Input
                    className='orbitron-light focus:ring-[#5B2E9D] focus:border-[#5B2E9D]'
                    type='text'
                    placeholder='e.g “this is a very limited item”'
                    {...register('description')}
                  />
                  <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.description?.message}</p>
                  {/*  */}
                  <label>
                    <h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
                      Royalties
                    </h1>
                  </label>
                  <Input
                    className='orbitron-light focus:ring-[#5B2E9D] focus:border-[#5B2E9D]'
                    type=''
                    placeholder='suggested: 1%, 4%. Max is 7%'
                    {...register('royalties')}
                  />
                  <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.royalties?.message}</p>
                  {/*  */}
                  <label>
                    <h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
                      Hashtag
                    </h1>
                  </label>
                  <Input
                    className='orbitron-light focus:ring-[#5B2E9D] focus:border-[#5B2E9D]'
                    type=''
                    placeholder='e.g #crypto item'
                    {...register('hashtag')}
                  />
                  <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.hashtag?.message}</p>
                  {/*  */}
                  <label>
                    <h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
                      Age
                    </h1>
                  </label>
                  <Input
                    className='orbitron-light focus:ring-[#5B2E9D] focus:border-[#5B2E9D]'
                    type=''
                    placeholder='must be greater than 18'
                    {...register('age')}
                  />
                  <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.age?.message}</p>
                  <div className='pt-[52px]'>
                    <motion.button
                    onClick={() => f()}
                     whileTap={{ scale: -0.8 }}  className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 orbitron-light'>
                      Create Item
                    </motion.button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateSingle;

const InputSection = styled.div`
  width: 700px;
  height: 170px;
  border: 2.5px dashed #5b2e9d;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 340px;
  }
`;

const Input = styled.input`
  width: 43.6875rem;
  height: 40px;
  background: #121212;
  border: 0.5px solid #5b2e9d;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 600px) {
    width: 340px;
  }
`;
