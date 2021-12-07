// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import DataFile from "./DataFile";
import {ResponsiveContainer, AreaChart, LineChart,Area ,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts';
import Loading from '../Loading'

export default function Crypto(props: any) {
  const location = useLocation()
  const { cryptoId } = location.state
  const [crypto,setCrypto] = useState({})


  useEffect(() => {
    axios.get(`https://localhost:5001/api/Asset/${cryptoId}`).then(function(response:any) {
      setCrypto(response.data)
    })
  },[cryptoId])

  const getCryptoImage = () => {
    let lowerAsset = "" + crypto.asset_id
    lowerAsset = lowerAsset.toLowerCase()
    return `https://cryptoicon-api.vercel.app/api/icon/${lowerAsset}`;
  };

  useEffect(() => {
    console.log(crypto)
  }, [crypto])

  const generateCryptoData = () => {
    let newCrypto = Object.keys(crypto)
    newCrypto.shift()
    newCrypto.splice(2,1)
    return newCrypto.map((k,index) => (
      <DataFile k={k.replace(/[_]+/g," ")} v={crypto[k]}></DataFile>
    ))
  } 


  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="main crypto">
        <div className="crypto-name">
          <img src={getCryptoImage()} alt={crypto.asset_id}/>
          <div className="crypto-name-name">{crypto.name} ({crypto.asset_id})</div>
        </div>
        <div className="crypto-data">
            {generateCryptoData()}
        </div>
        <div className="crypto-charts">
          <div className="chart-top">
          <ResponsiveContainer width="90%" height="90%">
              <LineChart width={700} height={210} data={data}
                margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="4 4" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-bottom">
          <ResponsiveContainer width="90%" height="90%">
            <AreaChart width={700} height={210} data={data} 
            margin={{top: 30,right: 30,left: 0,bottom: 0,}}>
              {/* <CartesianGrid strokeDasharray="4 4" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}