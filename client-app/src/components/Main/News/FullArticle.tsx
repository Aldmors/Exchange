import React from 'react'
import { useLocation } from 'react-router'

export default function FullArticle() {
    const location = useLocation()
    const {article} = location.state
    return (
        <div className="main news-fullArt">
            <div className="wrapper">
                <div className="news-fullArt-content">
                <div style={{ backgroundImage: `url(${article.urlToImage})` }}>H</div>
                    <div>{article.title}</div>
                    <div>{article.content}</div>
                </div>
                <div className="news-fullArt-data">
                    <div>Site : {article.source.name}</div>
                    <div>Author : {article.author}</div>
                    <div>Title : {article.title}</div>
                    <div>Description : {article.description}</div>
                    <div>Published at : {article.publishedAt}</div>
                    <div><a href={`${article.url}`} target="_blank" rel="noreferrer noopener">Link to article</a></div>
                </div>
            </div>
        </div>
    )
}
