import React from 'react';
import '../../App.css';

const Partners = () => {
	const partners = [
		{
			id: 1,
			logo: '/CFinance.png',
			companyname: 'calamus finance',
		},
		{
			id: 2,
			logo: '/NeoTech 1.png',
			companyname: 'neotech',
		},
		{
			id: 3,
			logo: '/CML PNG.png',
			companyname: 'coin market league',
		},
	];
	return (
		<React.Fragment>
			<div className='pt-[40px] 2xl:pt-[172px] bg-[#121212] pb-[172px]'>
				<h1 className='text-center font-[500] text-[36px] leading-[80px] orbitron-light'>
					Strategic Partners
				</h1>
				<div className='flex items-center justify-center pt-[49px]'>
					<div className='w-[1021.77px] h-[210px] rounded-[20px] partner__div'>
						<div className='flex items-center justify-center pt-[41px]'>
							{partners.map((item, idx) => (
								<div
									key={idx}
									className='w-[917.77px] h-[128px] flex gap-[145px] justify-center'>
									<div>
										<div className='flex items-center justify-center pb-[16.27px]'>
											<img
												className='w-[83.73px] h-[83.73px]'
												src={item.logo}
												alt='Partners logo'
											/>
										</div>
										<p className='uppercase orbitron-light font-[400] text-[24px] leading-[12px]'>{item.companyname}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Partners;
