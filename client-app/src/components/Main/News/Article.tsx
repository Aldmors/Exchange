import React from "react";
import { Link } from "react-router-dom";

export default function Article(props: any) {

  return (
    <Link style={{textDecoration:"none"}}className="news-article" to={`/news/${props.article.title.replace(/\s+/g, '-').replace(/\-+/g,'-').replace(/[.]/g,'').toLowerCase()}`} state={{article: props.article}}>
        <div style={{ backgroundImage: `url(${props.article.urlToImage})` }} className="news-article-image"></div>
        <div className="news-article-content">
          <div className="news-article-content-desc">{props.article.description}</div>
          <div className="news-article-content-author">{props.article.source.name}</div>
        </div>
        <div className="news-article-content-read">READ MORE</div>
    </Link>
  );
}
