import React from "react";
import TrendingFile from "./TrendingFile";
export default function Trending(props: any) {
  const generateFiles = () => {
    return props.cryptos.map((item: any, index: number) => <TrendingFile key={index} crypto={item}></TrendingFile>);
  };

  return (
    <div className="main">
      <div className="trending">{generateFiles()}</div>
    </div>
  );
}
