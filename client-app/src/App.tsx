import React, { useEffect } from "react";
import "./styles/css/app.css";
import Navbar from "./components/Navbar/Navbar";
import Side from "./components/Side/Side";
import News from "./components/Main/News/News";
import Trending from "./components/Main/Trending/Trending";
import Market from "./components/Main/Market/Market";
import Crypto from "./components/Main/Crypto/Crypto";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import FullArticle from "./components/Main/News/FullArticle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
  const [cryptoAssetsLoaded, setCryptoAssetsLoaded] = useState(true);
  const [cryptoAssets, setCryptoAssets] = useState();
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/articles").then(function (response) {
      setNews(response.data)
    }).then(() => {setNewsLoaded(true)})
  }, []);

  useEffect(() => {
    console.log(news)
  },[news])


  // useEffect(() => {
  //   axios.get("https://localhost:5001/api/Asset").then(function (response) {
  //     setCryptoAssets(response.data)
  //   }).then(() => {setCryptoAssetsLoaded(true)})
  // }, []);

  const renderSite = () => {
    if(cryptoAssetsLoaded === true && newsLoaded === true){
      return(
        <div>
          <Navbar></Navbar>
          <Side></Side>
          <Routes>
            <Route path="/" element={<Navigate to="/news" />}></Route>
            <Route path="/news" element={<News articles={news}></News>}></Route>
            <Route path="/news/:article" element={<FullArticle></FullArticle>}></Route>
            <Route path="/trending" element={<Trending></Trending>}></Route>
            <Route path="/market" element={<Market></Market>}></Route>
            <Route path="/:crypto" element={<Crypto></Crypto>}></Route>
          </Routes>
        </div>
      )
    } else {
      return(
        <LoadingScreen></LoadingScreen>
      )
    }
  }

  return (
    <>
        <BrowserRouter>
          {renderSite()}
        </BrowserRouter>
    </>
  );
}

export default App;
