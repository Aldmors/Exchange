// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Crypto(props: any) {
  const location = useLocation()
  const { cryptoId } = location.state
  const [crypto,setCrypto] = useState({})


  useEffect(() => {
    axios.get(`https://localhost:5001/api/Asset/${cryptoId}`).then(function(response:any) {
      setCrypto(response.data)
    })
  },[cryptoId])

  const getResultImage = () => {
    let lowerAsset = "" + crypto.asset_id
    lowerAsset = lowerAsset.toLowerCase()
    return `https://cryptoicon-api.vercel.app/api/icon/${lowerAsset}`;
  };

  useEffect(() => {
    console.log(crypto)
  }, [crypto])


  return (
    <>
      <div className="main crypto">
        <div className="crypto-name">
          <img src={getResultImage()} alt={crypto.asset_id}/>
          <div className="crypto-name-name">{crypto.name} ({crypto.asset_id})</div>
        </div>
        <div className="crypto-data">
            <div><span>Name :</span> <span>{crypto.name} ({crypto.asset_id})</span></div>
            <div><span>Price :</span> <span>{crypto.price_usd}$</span></div>
            <div><span>Volume in 1h :</span> <span>{crypto.volume_1hrs_usd}$</span></div>
            <div><span>Volume in 1 day :</span> <span>{crypto.volume_1day_usd}$</span></div>
            <div><span>Volume in 1 mth :</span> <span>{crypto.volume_1mth_usd}$</span></div>
            <div><span>First quote :</span> <span>{crypto.data_quote_start}</span></div>
            <div><span>Last quote :</span> <span>{crypto.data_quote_end}</span></div>
            <div><span>First order book:</span> <span>{crypto.data_orderbook_start}</span></div>
            <div><span>Last order book:</span> <span>{crypto.data_orderbook_end}</span></div>
            <div><span>First trade :</span> <span>{crypto.data_trade_start}</span></div>
            <div><span>Last trade :</span> <span>{crypto.data_trade_end}</span></div>
            <div><span>Quote count :</span> <span>{crypto.data_qoute_count}</span></div>
            <div><span>Trade count :</span> <span>{crypto.data_trade_count}</span></div>
            <div><span>Symbols count :</span> <span>{crypto.data_symbols_count}</span></div>
        </div>
      </div>
    </>
  );
}