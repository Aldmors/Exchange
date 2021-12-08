import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function Article(props: any) {
  const generateContent = () => {
    let indexToCut = props.article.content.search("View the full list");
    return props.article.content.substring(indexToCut + 22);
  };

  const generatePath = () => {
    let generatedPath = props.article.title
      .replace(/[^A-Za-z0-9\s]+/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    return generatedPath;
  };

  return (
    <div className="article">
      <div style={{ backgroundImage: `url(${props.article.imgUrl})` }} className="article-top"></div>
      <div className="article-bottom"></div>
      <div className="article-content">
        <div className="title">{props.article.title}</div>
        <hr />
        <div className="description">
          {props.article.description.slice(0, -1)} <span>by {props.article.author}</span>
        </div>
        <hr />
        <div className="content">{parse(generateContent())}</div>
        <Link className="read-more" to={`/news/${generatePath()}`} state={{ article: props.article }}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
