import React from 'react'
import loading from "../../img/loadingGif.gif"

export default function Loading() {
    return (
        <div className="main loading">
            <img src={loading} alt="loading"/>
        </div>
    )
}
