import React from "react";
import loading from "../../img/loadingGif.gif";
import ExchangeLogo from "../../img/exchange.png";

export default function LoadingScreen() {
  return (
    <>
      <div className="loadingScreen">
        <div className="loading-wrapper">
          <div className="loading-title">
            <span className="loading-title-imgWrap">
              <img className="loading-title-img" src={ExchangeLogo} alt="exchange logo"></img>
            </span>
            <span className="loading-title-title">Exchange</span>
          </div>
          <img src={loading} alt="loading animation" />
        </div>
      </div>
    </>
  );
}
