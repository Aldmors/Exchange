import React from "react";
import Article from "./Article";

export default function News(props: any) {
  const generateArticles = () => {
    return props.articles.map((article: any, index: number) => <Article article={article} key={index}></Article>);
  };
  return (
    <>
      <div className="main news">{generateArticles()}</div>
    </>
  );
}
