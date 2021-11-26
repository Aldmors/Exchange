import React from 'react';
import "./styles/css/app.css";
import Navbar from './components/Navbar/Navbar';
import Side from './components/Side/Side'
import News from './components/Main/News/News';
import Trending from './components/Main/Trending/Trending';
import Market from './components/Main/Market/Market';
import Crypto from './components/Main/Crypto/Crypto';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar></Navbar>
          <Side></Side>
          <Routes>
            <Route path="/" element={<Navigate to="/news" />}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/trending" element={<Trending></Trending>}></Route>
            <Route path="/market" element={<Market></Market>}></Route>
            <Route path="/:crypto" element={<Crypto></Crypto>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
