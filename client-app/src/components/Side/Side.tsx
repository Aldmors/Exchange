import React, { Component } from 'react'
import SideButton from './SideButton'
import news from './../../img/news.png'
import trending from './../../img/trending.png'

export class Side extends Component<any,any> {
    render() {
        return (
            <>
                <div className="side">
                    <SideButton name={"News"} logo={news}></SideButton>
                    <SideButton name={"Trending"} logo={trending}></SideButton>
                </div>
                {/* Rounded connection */}
                <div className="rounded-connection-triangle"></div>
                <div className="rounded-connection-circle"></div>
            </>
        )
    }
}

export default Side
