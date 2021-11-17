import React, { Component } from 'react'
import SideButton from './SideButton'
import news from './../../img/news.png'
import trending from './../../img/trending.png'
import market from './../../img/market.png'
import swal from 'sweetalert';

export class Side extends Component<any,any> {
    render() {
        return (
            <>
                <div className="side">
                    <div className="side-top">
                        <SideButton name={"News"} logo={news}></SideButton>
                        <SideButton name={"Trending"} logo={trending}></SideButton>
                        <SideButton name={"Market"} logo={market}></SideButton>
                    </div>
                    <div className="side-bottom">
                        <div>
                            <h1 style={{color:"red"}}>TODO</h1>
                        </div>
                        <div>
                            <i onClick={()=>{swal("Authors",
                            `Jakub Biernat - https://github.com/Aldmors \n
                            Kacper Satora - https://github.com/KacperSatora \n
                            Arkadiusz Ogryzek - https://github.com/ArziPL`)}}>Authors</i>&nbsp;
                            <i onClick={()=>{swal("Credits",`
                            ICONS 8 - Money icon by https://icons8.com\n`)}}>Credits</i>
                        </div>
                    </div>
                </div>
                {/* Rounded connection */}
                <div className="rounded-connection-triangle"></div>
                <div className="rounded-connection-circle"></div>
            </>
        )
    }
}

export default Side
