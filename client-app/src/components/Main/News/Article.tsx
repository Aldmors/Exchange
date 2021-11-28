import React from "react";

export default function Article(props: any) {
  return (
    <div className="news-article">
      <div style={{ backgroundImage: `url(${props.article.urlToImage})` }} className="news-article-image"></div>

      <div className="news-article-content">
        <div className="a-author">{props.article.author}</div>
        <div className="a-descritpion">{props.article.description}</div>
        <a className="a-url" href={props.article.url} target="_blank" rel="noopener noreferrer">
          Link to article
        </a>
        <div className="a-date">{props.article.publishedAt}</div>
      </div>
    </div>
  );
}
