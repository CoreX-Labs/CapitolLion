import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/create/Create';
import Marketplace from './pages/Marketplace';
import MusicDAO from './pages/MusicDAO';
import Collection from './pages/Collection';
import CreateSingle from './pages/create/CreateSingle';
import CreateMultiple from './pages/create/CreateMultiple';
// import Nftsingles from './pages/components/Nftsingles';

//The Wallet Address insored globally in a Context
export const WalletAddress = React.createContext();

function App() {
  const markets = [
    {
      id       : 1,
      nftimage : '/one.png',
      title    : 'face',
      price    : 'by Angie_00'
    },
    {
      id       : 2,
      nftimage : '/four.png',
      title    : 'sculpt',
      price    : 'by Angie_00'
    },
    {
      id       : 3,
      nftimage : '/three.png',
      title    : 'coloured',
      price    : 'by Angie_00'
    },
    {
      id       : 4,
      nftimage : '/four.png',
      title    : 'no name',
      price    : 'by Angie_00'
    },
    {
      id       : 5,
      nftimage : '/two.png',
      title    : 'galaxy',
      price    : 'by Angie_00'
    },
    {
      id       : 6,
      nftimage : '/six.png',
      title    : 'walled',
      price    : 'by Angie_00'
    },
    {
      id       : 7,
      nftimage : '/five.png',
      title    : 'flagged',
      price    : 'by Angie_00'
    },
    {
      id       : 8,
      nftimage : '/two.png',
      title    : 'galaxy',
      price    : 'by Angie_00'
    },
    {
      id       : 9,
      nftimage : '/one.png',
      title    : 'face',
      price    : 'by Angie_00'
    }
  ];
  return (
    <WalletAddress.Provider value={"TPvu2GA1u2PthLCNgEDUDCygxE4DK9qJwZ"}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />}>
            <Route path="create-single" element={<CreateSingle />} />
            <Route path="create-multiple" element={<CreateMultiple />} />
          </Route>
          <Route path='/marketplace' element={<Marketplace markets={ markets } />} />
          {/* <Route path="/marketplace/:name" element={<Nftsingles market={ markets } />} /> */}
          <Route path='/musicDAO' element={<MusicDAO />} />
          <Route path='/collection' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </WalletAddress.Provider>
  );
}

export default App;
