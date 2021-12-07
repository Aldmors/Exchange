// @ts-nocheck
import React from "react";
import TrendingFile from "./TrendingFile";
import parse from "html-react-parser"
export default function Trending(props:any) {

  const randomNum = () => {
    return (Math.random() * (20 - (-20)) + -20)
  }

  // const generateFiles = () => {
  //   let list = props.cryptos.map((item:any) => (
  //     [`<TrendingFile crypto=${item} trend=${rand}></TrendingFile>`,rand]
  //   ))
  //   list.sort().reverse()

  //   return list.map((item:any,index:any) => (
  //     console.log(item[0])
  //   ))
  // }

  const generateFiles = () => {
    return props.cryptos.map((item:any,index:any) => (
      <TrendingFile crypto={item}></TrendingFile>
    ))
  }
  return (
    <div className="main">
      <div className="trending">
      {generateFiles()}
      </div>
    </div>
  );
}
