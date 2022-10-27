import React from 'react';
import '../../App.css';

const Partners = () => {
	const partners = [
		{
			id          : 1,
			logo        : '/Purple LionX logo.png',
			companyname : 'lionx'
		},
		{
			id          : 2,
			logo        : '/CFinance.png',
			companyname : 'calamus finance'
		},
		{
			id          : 3,
			logo        : '/NeoTech 1.png',
			companyname : 'neotech'
		},
		{
			id          : 4,
			logo        : '/CML PNG.png',
			companyname : 'coin market league'
		}
	];
	return (
		<React.Fragment>
			<div className='pt-[130px] md:pt-[40px] 2xl:pt-[172px] bg-[#121212] pb-[100px] md:pb-[172px]'>
				<h1 className='text-center font-[500] text-[24px] md:text-[36px] md:leading-[80px] orbitron-light'>
					Strategic Partners
				</h1>
				<div className='flex items-center justify-center pt-[49px]'>
					<div className='md:w-[1221.77px] w-[308px] md:h-[210px] rounded-[20px] partner__div'>
						<div className='md:flex md:items-center md:justify-center pt-[41px] pb-[41px]'>
							{partners.map((item, idx) => (
								<div key={idx} className='md:w-[917.77px] md:h-[128px] md:flex md:gap-[145px] md:justify-center'>
									<div className="text-center pb-[40px]">
										<div className='flex items-center justify-center pb-[16px] md:pb-[16.27px]'>
											<img className='h-[83.73px]' src={item.logo} alt='Partners logo' />
										</div>
										<p className='uppercase orbitron-light font-[400] text-[18px] md:text-[20px] leading-[12px]'>{item.companyname}</p>
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
