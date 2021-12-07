// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, XAxis, Line } from "recharts";
import trendingUp from "./../../../img/trendingUp.png";
import trendingDown from "./../../../img/trendingDown.png";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function TrendingFile(props: any) {
  const [trend, setTrend] = useState(0);
  const crypto = props.crypto;

  const getCryptoImage = () => {
    let lowerAsset = "" + crypto.asset_id;
    lowerAsset = lowerAsset.toLowerCase();
    return `https://cryptoicon-api.vercel.app/api/icon/${lowerAsset}`;
  };

  useEffect(() => {
    let rand = Math.random() * (20 - -20) + -20;
    setTrend(rand);
  }, []);

  const generateTrend = (): string => {
    if (trend > 0) {
      return `<div className="trendUp"><img src=${trendingUp} alt="crpytoImg"/> ${trend.toFixed(2)}%</div>`;
    } else if (trend <= 0) {
      return `<div className="trendDown"><img src=${trendingDown} alt="crpytoImg"/> <div>${trend.toFixed(
        2
      )}%</div></div>`;
    }
    return "";
  };

  const generateClassName = () => {
    if (trend > 0) {
      return "trendingFile green";
    } else if (trend < 0) {
      return "trendingFile red";
    }
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Link
      to={`/crypto/${crypto.asset_id.toLowerCase()}`}
      state={{ cryptoId: crypto.id }}
      style={{ textDecoration: "none" }}
      className={generateClassName()}
    >
      <div className="name">
        <img className="cryptoImage" src={getCryptoImage()} alt={crypto.asset_id} />
        <div>
          {crypto.name} ({crypto.asset_id})
        </div>
      </div>

      <div className="trendTrending">{parse(generateTrend())}</div>

      <div className="chart">
        <ResponsiveContainer width="90%" height="90%">
          <LineChart data={data} margin={{ top: 30 }} cursor="pointer">
            <XAxis dataKey="name" />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Link>
  );
}

export default React.memo(TrendingFile);
