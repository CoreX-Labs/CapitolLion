import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Marketplace from './pages/Marketplace';
import Launchpad from './pages/Launchpad';
import MusicDAO from './pages/MusicDAO';
import Collection from './pages/Collection';
import Navbar from './navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/create'
            element={<Create />}
          />
          <Route
            path='/marketplace'
            element={<Marketplace />}
          />
          <Route
            path='/launchpad'
            element={<Launchpad />}
          />
          <Route
            path='/musicDAO'
            element={<MusicDAO />}
          />
          <Route
            path='/collection'
            element={<Collection />}
          />
        </Routes>
		</BrowserRouter>
	);
}

export default App;
