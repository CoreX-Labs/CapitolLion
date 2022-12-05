import React, { } from 'react';
// import axios from "axios";
import LogoMusicDAO from '../Assets/Logo.png'
import './musicDAO.css'
import LandImg from '../pages/MusicDaoAssets/Landimage.png'
import LogoImagery from '../Assets/imagery.png'


const MusicDAO = () => {

	// const [fileImg, setFileImg] = useState(null);

	// const sendFileToIPFS = async (e) => {

	// 	if (fileImg) {
	// 		try {

	// 			const formData = new FormData();
	// 			formData.append("file", fileImg);

	// 			const resFile = await axios({
	// 				method: "post",
	// 				url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
	// 				data: formData,
	// 				headers: {
	// 					'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
	// 					'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
	// 					"Content-Type": "multipart/form-data"
	// 				},
	// 			});

	// 			const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
	// 			console.log(ImgHash);

	// 		} catch (error) {
	// 			console.log("Error sending File to IPFS: ")
	// 			console.log(error)
	// 		}
	// 	}
	// }


	return (
		<React.Fragment>

			<div className='allBackground bg-gray-900'>
				<div class="flex mb-4">
					<div class="w-full bg-gray-900 h-12">
						<div class="flex mt-6">
							<div class="w-1/2 h-12">
								<img width="90px" src={LogoMusicDAO} />
							</div>
							<div class="w-1/2 h-12">
								<button className='supportBtn'>Support Capitol Lion</button>
							</div>
						</div>
					</div>
				</div>

				<div className='md:container md:mx-auto max-width:768px columns-2 p-9 mt-9'>
					<div>
						<img className='sm:block imgs' src={LandImg} alt="music dao img" />
					</div>
					<div>
						<img className='sm:block' src={LogoImagery} alt="music dao img" />
						<p className='tx12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							
							<button className='bottonGradient'>Mint Now 1000 Trx</button>
							<p className='tokentxt mt-8'>My Token IDs <br />
							.........................</p>
					</div>
				</div>

			</div>

		</React.Fragment>
	);
};

export default MusicDAO;