import React from 'react';
import "./styles/css/app.css";
import Navbar from './components/Navbar/Navbar';
import Side from './components/Side/Side'
import News from './components/Main/News';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";


function App() {
  return (
    <>
        <Navbar></Navbar>
        <Side></Side>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/news" />}></Route>
            <Route path="/news" element={<News></News>}></Route>
            {/* <Route path="/trending" element={<Trending></Trending>}></Route>
            <Route path="/market" element={<Market></Market>}></Route>
            <Route path="/:crypto" element={<Crypto></Crypto>}></Route> */}
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
