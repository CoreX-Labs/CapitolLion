import React, { useState } from 'react';
import '../App.css';
// import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
// import styled from "styled-components"
// import { useForm } from 'react-hook-form';
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

const Navbar = () => {
	const [ showNav, setShowNav ] = useState(false);

// 	const schema = yup.object().shape({ 
// 		username: yup.string().required("Enter a username"),
// 		legalname: yup.string().required("Enter your Legal name"),
// 		email: yup.string().email().required("Enter a valid Email address"),
// 		tronwalletaddress: yup.string().required("Input your Tron wallet address"),
// });

// const { register, handleSubmit, formState: {errors} } = useForm({
// 		resolver: yupResolver(schema)
// });

// const onFormSubmit = async (data) => {
// 		console.log(data);
// };
	return (
		<React.Fragment>
			<div className='w-screen h-[64px] p-[55px] text-white flex justify-between items-center px-[24px] md:px-[70px] 2xl:px-[300px]'>
				<Link to='/'>
					<div className='cursor-pointer'>
						<img src='/CapitolLion Website Logo.png' alt='Capitol Lion Website Logo' />
					</div>
				</Link>
				{/* mobile */}
				<div onClick={() => setShowNav(!showNav)} className='block transition-all duration-500 lg:hidden'>
					{showNav ? (
						<img className='pr-[10px]' src='/close-icon.png' alt='close-icon' />
					) : (
						<img src='/menu.png' alt='Hamburger-menu' />
					)}
				</div>
				{/* dropdown */}
				<div
					className={
						(showNav ? 'top-[90px] left-0 right-0' : '-top-[500px] left-0 right-0') +
						' absolute w-full h-[300px] bg-[#121212] dropdown transition-top duration-500 z-50'
					}>
					<ul className='mr-40px'>
						<NavLink to='/create'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Marketplace</li>
						</NavLink>
						<NavLink to='musicDAO'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>
								<a href='https://lionxeco.net/capitol-lion-genesis.html' target='_blank' rel='noreferrer'>
									<p className='text-[14px]'>LionX</p>
								</a>
							</li>
						</NavLink>
						<NavLink to='/collection'>
							<li className='h-[56px] pl-[24px] orbitron-light border-b pt-[18px]'>Collection</li>
						</NavLink>
						<li className='h-[56px] px-[12px] orbitron-light pt-[18px]'>
							{/* <motion.button
								whileTap={{ scale: -0.5 }}
								className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
								Connect Wallet
							</motion.button> */}
						</li>
					</ul>
				</div>
				<div className='hidden lg:block'>
					<ul className='flex gap-[24px] items-center'>
						<NavLink className='' to='/create'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Create</li>
						</NavLink>
						<NavLink to='/marketplace'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Marketplace</li>
						</NavLink>
						<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>
							<a href='https://lionxeco.net/capitol-lion-genesis.html' target='_blank' rel='noreferrer'>
								<p className='text-[14px]'>MusicDAO</p>
							</a>
						</li>
						<NavLink to='/collection'>
							<li className='cursor-pointer orbitron-light font-[500] text-[14px] leading-[18px]'>Collection</li>
						</NavLink>
							<li className='cursor-pointer orbitron-light'>
								{/* <motion.button
									whileTap={{ scale: -1.0 }}
									className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500'>
									Connect Wallet
								</motion.button> */}
								<button type="button" className="w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 py-3 px-4 inline-flex justify-center items-center gap-2 text-sm" data-hs-overlay="#hs-focus-management-modal">
										Connect Wallet
								</button>

								{/* <div id="hs-focus-management-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
										<div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
												<div class="flex flex-col bg-[#121212] border border-[#5b2e9d] shadow-sm rounded-xl">
														<div class="flex justify-between items-center py-3 px-4 border-b border-b-[#5b2e9d]">
																<h3 class="font-bold text-white">
																		Create Profile
																</h3>
																<button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-focus-management-modal">
																		<span class="sr-only">Close</span>
																		<svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																				<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
																		</svg>
																</button>
														</div>
														<form onSubmit={handleSubmit(onFormSubmit)}>
														<div class="px-4 py-[14px] overflow-y-auto">
																<label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Enter desired Username</label>
																<Input {...register('username')} type="text" id="input-label" class="text-black py-3 px-4 block w-full text-sm focus:ring-[#5B2E9D] focus:border-[#5B2E9D]" placeholder="e.g 'johnny'" autofocus />
																<p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.username?.message}</p>
														</div>
														{/*  */}
														{/* <div class="px-4 py-[14px] overflow-y-auto">
																<label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Enter Legal name</label>
																<Input {...register('legalname')} type="text" id="input-label" class="text-black py-3 px-4 block w-full text-sm focus:ring-[#5B2E9D] focus:border-[#5B2E9D]" placeholder="e.g John Doe" autofocus />
																<p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.legalname?.message}</p>
														</div> */}
														{/*  */}
														{/* <div class="px-4 py-[14px] overflow-y-auto">
																<label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email Address(Optional)</label>
																<Input {...register('email')} type="text" id="input-label" class="text-black py-3 px-4 block w-full text-sm focus:ring-[#5B2E9D] focus:border-[#5B2E9D]" placeholder="you@gmail.com" autofocus />
																<p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.email?.message}</p>
														</div>
														 */}
														{/* <div class="relative flex items-start px-[22px] pb-[40px]">
															<div class="flex items-center h-5 mt-1">
																	<input {...register('agree', { required: 'Agreement is reqired'})} id="hs-checkbox-delete" name="hs-checkbox-delete" type="checkbox" value="yes" class="border-[#5B2E9D] rounded text-[#5B2E9D] dark:border-[#5B2E9D] dark:checked:bg-[#5B2E9D] checked:focus:border-[#5B2E9D]" aria-describedby="hs-checkbox-delete-description" />
																	<p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.agree && <span>{errors.agree?.message}</span>}</p>
															</div>
															<label for="hs-checkbox-delete" class="ml-3 pt-1">
																	<span class="block text-sm font-semibold text-white orbitron-light">I have read and agree to the Terms of Service</span>
															</label>
													</div>
														<div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-t-[#5b2e9d]">
																<motion.button whileTap={{ scale: -0.8 }}  className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 orbitron-light'>
                 Connect
               </motion.button>
														</div>
													</form>
												</div> */}
										{/* </div>
								</div> */}
							</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;



// const Input = styled.input`
//   background: #121212;
//   border: 0.5px solid #5b2e9d;
//   border-radius: 10px;
//   padding: 10px;
// 		width: 100%;
// `;