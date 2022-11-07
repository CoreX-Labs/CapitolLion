import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/create/Create';
import Marketplace from './pages/Marketplace';
import MusicDAO from './pages/MusicDAO';
import Collection from './pages/Collection';
import CreateSingle from './pages/create/CreateSingle';
import CreateMultiple from './pages/create/CreateMultiple';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Goerli;

function App() {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />}>
            <Route path="create-single" element={<CreateSingle />} />
            <Route path="create-multiple" element={<CreateMultiple />} />
          </Route>
          <Route path='/marketplace' element={<Marketplace />} />
          <Route path='/musicDAO' element={<MusicDAO />} />
          <Route path='/collection' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  );
}

export default App;
