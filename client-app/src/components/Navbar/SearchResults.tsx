// @ts-nocheck
import React from 'react'

export default function SearchResults(props:any) {

  const GetResultImage = (shortData: any) => {
    return `https://cryptoicon-api.vercel.app/api/icon/${shortData}`;
  };


  return (
    <div className={props.oneOrMany}>
        <img alt="resultImage" src={GetResultImage(props.shortData)}></img>
        <b>{props.longData}</b>
    </div>
  )
}

