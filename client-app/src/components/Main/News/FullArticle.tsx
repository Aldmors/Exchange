import React from "react";
import { useLocation } from "react-router";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export default function FullArticle() {
  const location = useLocation();
  const { article } = location.state;

  const generateContent = () => {
    let indexToCut = article.content.search("View the full list");
    return article.content.substring(indexToCut + 22);
  };
  return (
    <>
      <div className="main fullArticle">
        <div className="fullArticle-content">
          <div className="img" style={{ backgroundImage: `url(${article.imgUrl})` }}></div>
          <div className="title">{article.title}</div>
          <hr />
          <div className="content">{parse(generateContent())}</div>
          <div className="data"></div>
          <div className="bottom-bar">By {article.author}</div>
          <div className="bottom-bar">Published at {article.date}</div>
          <a className="bottom-bar clickable" href={article.articleUrl} target="_blank" rel="noreferrer noopener">
            <div>LINK TO ORIGINAL</div>
          </a>
          <Link className="bottom-bar clickable" to="/news">
            BACK TO NEWS
          </Link>
        </div>
      </div>
    </>
  );
}
