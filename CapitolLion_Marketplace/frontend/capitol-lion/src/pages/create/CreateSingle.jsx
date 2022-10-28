import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup" ;

const CreateSingle = () => {
    const schema = yup.object().shape({
        metadata: yup.mixed().required("Please provide a file"),
        price: yup.number().positive().integer().min(1).required("Please Enter a price for your NFT"),
        collection: yup.string().required("Please enter a collection for your NFT"),
        title: yup.string().required("Give your NFT a name"),
        description: yup.string().required("Add a description for your NFT"),
        royalties: yup.number().positive().integer().min(0).max(70).required("Please Enter a price for your NFT"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

	const onFormSubmit = (data) => {
		console.log(data);
	};

	return (
		<React.Fragment>
			<div className='flex items-center justify-center pb-[100px]'>
				<div>
					<div className=''>
						<div className='pb-[32px]'>
							<h1 className='orbitron-light font-[600] text-[24px] leading-[30px]'>Upload file</h1>
						</div>
                        <form>
						<InputSection>
							<div>
								<h1 className='text-center orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px]'>
									PNG, JPG, GIF WEBP or MP4. Max 200MB
								</h1>
								<div className='flex items-center justify-center pt-[24px]'>
									<input type='file' name='picture' {...register("metadata")} />
								</div>
							</div>
						</InputSection>
						<div>
							
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>Price</h1>
								</label>
								<Input
									className='orbitron-light'
									type='number'
									placeholder='enter price for one item (TRX)'
									{...register('price')}
								/>
                                <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.price?.message}</p>
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
										Choose collection
									</h1>
								</label>
								<Input className='orbitron-light' type='text' placeholder='Choose collection' {...register('collection')} />
                                <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.collection?.message}</p>
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>Title</h1>
								</label>
								<Input className='orbitron-light' type='text' placeholder='e.g “Crypto Punk”' {...register('title')} />
                                <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.title?.message}</p>
								{/*  */}
								<label>
									<h1 className='orbitron-light font-[400] text-[22px] leading-[28px] pt-[39px] pb-[18px]'>
										Description
									</h1>
								</label>
								<Input
									className='orbitron-light'
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
									className='orbitron-light'
									type=''
									placeholder='suggested: 0, 10%, 20%, 30%. Maximum is 70%'
									{...register('royalties')}
								/>
                                <p className="text-red-700 orbitron-light text-[17px] pt-[12px]">{errors.royalties?.message}</p>
								<div className='pt-[52px]'>
									<button onClick={handleSubmit(onFormSubmit)} className='w-[177px] h-[40px] bg-[#5B2E9D] rounded-[30px] hover:bg-[#6b37ba] transition-all duration-500 orbitron-light'>
										Create Item
									</button>
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
`;

const Input = styled.input`
	width: 699px;
	height: 40px;
	background: #121212;
	border: 0.5px solid #5b2e9d;
	border-radius: 10px;
	padding: 10px;
`;
