import React from "react";
import MarketFile from "./MarketFile";

export default function Market(props:any) {
  
  const generateFiles = () => {
    return props.cryptos.map((item:any,index:any) => (<MarketFile crypto={item} index={index}></MarketFile>))
  }

  return (
    <div className="main">
      <div className="marketLegend">
        <div className="index">#</div>
        <div>ICON/NAME</div>
        <div>%</div>
        <div>PRICE</div>
        <div>VOLUME IN 1 HOUR</div>
        <div>VOLUME IN 1 DAY</div>
        <div>LAST DAYS</div>
      </div>
      {generateFiles()}
    </div>
  );
}
