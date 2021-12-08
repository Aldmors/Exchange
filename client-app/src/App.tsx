import React, { useEffect, useState } from "react";
import "./styles/css/app.css";
import Navbar from "./components/Navbar/Navbar";
import Side from "./components/Side/Side";
import News from "./components/Main/News/News";
import Trending from "./components/Main/Trending/Trending";
import Market from "./components/Main/Market/Market";
import Crypto from "./components/Main/Crypto/Crypto";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import FullArticle from "./components/Main/News/FullArticle";
import Favorites from "./components/Main/Favorites/Favorites";
import Settings from "./components/Main/Settings/Settings";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [cryptoAssetsLoaded, setCryptoAssetsLoaded] = useState(false);
  const [newsLoaded, setNewsLoaded] = useState(false);
  const [cryptoAssets, setCryptoAssets] = useState();
  const [cryptoAssetsLight, setCryptoAssetsLight] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    let cryptoAssetsLightTemp: any = {};
    axios
      .get("https://localhost:5001/api/Asset")
      .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          cryptoAssetsLightTemp[response.data[i].asset_id] = [response.data[i].id, response.data[i].name];
        }
        setCryptoAssets(response.data);
        setCryptoAssetsLight(cryptoAssetsLightTemp);
      })
      .then(() => {
        setCryptoAssetsLoaded(true);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/articles")
      .then(function (response) {
        setNews(response.data);
      })
      .then(() => {
        setNewsLoaded(true);
      });
  }, []);

  const renderSite = () => {
    if (cryptoAssetsLoaded === true && newsLoaded === true) {
      return (
        <div>
          <Navbar lightCryptos={cryptoAssetsLight}></Navbar>
          <Side></Side>
          <Routes>
            <Route path="/" element={<Navigate to="/market" />}></Route>
            <Route path="/market" element={<Market cryptos={cryptoAssets}></Market>}></Route>
            <Route path="/trending" element={<Trending cryptos={cryptoAssets}></Trending>}></Route>
            <Route path="/crypto/:crypto" element={<Crypto></Crypto>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
            <Route path="/settings" element={<Settings></Settings>}></Route>
            <Route path="/news" element={<News articles={news}></News>}></Route>
            <Route path="/news/:article" element={<FullArticle></FullArticle>}></Route>
          </Routes>
        </div>
      );
    } else {
      return <LoadingScreen></LoadingScreen>;
    }
  };

  return (
    <>
      <BrowserRouter>{renderSite()}</BrowserRouter>
    </>
  );
}

export default App;
