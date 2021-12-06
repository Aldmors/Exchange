import React from 'react'
import {ResponsiveContainer,LineChart,XAxis,YAxis,Tooltip,Legend,Line} from "recharts"
import { Link } from 'react-router-dom';

export default function MarketFile(props:any) {
    const crypto = props.crypto

    const getCryptoImage = () => {
        let lowerAsset = "" + crypto.asset_id
        lowerAsset = lowerAsset.toLowerCase()
        return `https://cryptoicon-api.vercel.app/api/icon/${lowerAsset}`;
      };

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
        <Link to={`/crypto/${crypto.asset_id.toLowerCase()}`} 
        state={{cryptoId:crypto.id}} style={{textDecoration:"none"}} className="marketFile">
            <div className="index">{props.index+1}</div>
            <div className="name"><img className="logo" src={getCryptoImage()} alt={crypto.asset_id}/> {crypto.name} ({crypto.asset_id})</div>

            <div className="price">{crypto.price_usd}$</div>

            <div className="volume1hrs">{crypto.volume_1hrs_usd}$</div>

            <div className="volume1day">{crypto.volume_1day_usd}$</div>

            <div className="volume1mth">{crypto.volume_1mth_usd}$</div>

            <div className="chart">
                <ResponsiveContainer width="90%" height="90%">
                    <LineChart data={data}
                        margin={{top:20}}>
                        {/* <CartesianGrid strokeDasharray="4 4" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        {/* <Tooltip /> */}
                        {/* <Legend /> */}
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false}/>
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Link>
    )
}
