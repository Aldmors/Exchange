// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom';


export default function SearchResults(props:any) {

  const GetResultImage = (shortData: any) => {
    return `https://cryptoicon-api.vercel.app/api/icon/${shortData}`;
  };


  return (
    <Link style={{textDecoration:"none"}} className={props.oneOrMany} to={`/${props.shortData}`}>
          <img alt="resultImage" src={GetResultImage(props.shortData)}></img>
          <b>{props.longData}</b>
    </Link>
  )
}

