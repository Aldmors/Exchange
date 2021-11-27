import React from "react";
import SideButton from "./SideButton";
import news from "./../../img/news.png";
import trending from "./../../img/trending.png";
import market from "./../../img/market.png";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function Side() {
  return (
    <>
      <div className="side">
        <div className="side-top">
          <Link style={{ textDecoration: "none" }} to="/">
            <SideButton name={"News"} logo={news} />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/trending">
            <SideButton name={"Trending"} logo={trending} />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/market">
            <SideButton name={"Market"} logo={market} />
          </Link>
        </div>
        <div className="side-bottom">
          <div>
            <h1 style={{ color: "red" }}>TODO</h1>
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

      <div className="rounded-connection-triangle" />
      <div className="rounded-connection-circle" />
    </>
  );
}
