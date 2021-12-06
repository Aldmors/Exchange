import React from "react";
import SideButton from "./SideButton";
import news from "./../../img/news.png";
import trending from "./../../img/trending.png";
import market from "./../../img/market.png";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import jsonFacts from "./facts.json"

export default function Side() {
  const generateFact = () => {
    let randomNum = Math.floor(Math.random() * (16 - 1 + 1) + 1)
    return jsonFacts[randomNum]
   }

  return (
    <>
      <div className="side">
        <div className="side-top">
          <Link style={{ textDecoration: "none" }} to="/">
            <SideButton name={"Market"} logo={market} />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/news">
            <SideButton name={"News"} logo={news} />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/trending">
            <SideButton name={"Trending"} logo={trending} />
          </Link>
        </div>
        <div className="side-bottom">
          <div>
            <div className="side-bottom-fact">
              <div className="side-bottom-fact-did">Did you know ...</div>
              <div className="side-bottom-fact-content">{generateFact()}</div>
            </div>
          </div>
          <div>
            <i
              onClick={() => {swal("Authors",
                  `Jakub Biernat - https://github.com/Aldmors \n
                    Kacper Satora - https://github.com/KacperSatora \n
                    Arkadiusz Ogryzek - https://github.com/ArziPL`
                );
              }}
            >
              Authors
            </i>
            &nbsp;
            <i onClick={() => {swal("Credits",`ICONS 8 - Money icon by https://icons8.com\n`);}}>
              Credits
            </i>
          </div>
        </div>
      </div>

      {/* <div className="rounded-connection-triangle" />
      <div className="rounded-connection-circle" /> */}
    </>
  );
}
