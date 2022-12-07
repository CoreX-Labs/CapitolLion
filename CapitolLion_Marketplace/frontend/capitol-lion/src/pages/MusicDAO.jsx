import React, { } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import axios from "axios";
import LogoMusicDAO from '../Assets/Logo.png'
import './musicDAO.css'
import LandImg from '../pages/MusicDaoAssets/Landimage.png'
import LogoImagery from '../Assets/imagery.png'
// import 'bootstrap/dist/css/bootstrap.min.css';


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

			<div className='allBackground bg-black'>
				<div class="flex mb-4">
					<div class="w-full bg-black h-12">
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

				<div className='md:container md:mx-auto md:px-20 mt-20'>
					<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-2 '>
						<div className='col-md-6 '>
							<img className='' src={LogoImagery} alt="music dao img" />
							<p className='tx1 mb-13'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse

							</p>
							<button className='bottonGradient'>Mint Now 1000 TRX</button>
							<p className='tokentxt'>My Token IDs <br /> .................</p>

						</div>
						<div className='col-md-6'>
							<img className='pictures' src={LandImg} alt="music dao img" />
						</div>

					</div>
				</div>

				<div className='md:container md:mx-auto md:px-20 mt-20'>
					<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-2 '>
						<div>
							<div className='text-7xl henesis text-center'>Genesis NFT <br />
								<div className='flex items-center justify-center gap-6'><small className='o tx1 text-center font-bold'>0</small> <small className='tx1 text-center'>of 1111 Minted</small></div>
							</div>

						</div>
						<div className='p-8 mt-9 gap-20 md:grid md:grid-cols-3 text-center txs'>
							<div className='mb-7'><h2 className='text-6xl mb-4'>1,111</h2><small className='purple'>Total NFTs</small></div>
							<div><h2 className='text-6xl mb-4'>80</h2> <small className='purple'>Total Owners</small></div>
							<div><h2 className='text-6xl mb-4'>0</h2><small className='purple mt-9'>Floor Price [TRX]</small></div>
						</div>
					</div>
				</div>

				

			</div>


		</React.Fragment>
	);
};

export default MusicDAO;