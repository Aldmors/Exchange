import axios from "axios";
import React, {useState, useEffect} from "react";
import Article from "./Article";

export default function News(props:any) {

  const generateArticles = () => {
    return props.articles.map((article:any,index:any) => (<Article article={article} key={index}></Article>))
  }
  return (
    <>
    <div className="main news">
      {generateArticles()}
    </div>
    </>
  );
}
