import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import RecoilNexus from "recoil-nexus";
import App from './App';
import('preline');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <RecoilNexus/>
    <App />
  </RecoilRoot>
);
