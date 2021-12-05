import React from "react";
import Search from "./Search";
import Exchange from "./Exchange";
import Menu from "./Menu";

export default function Navbar(props:any) {
  return (
    <nav className="navbar">
      <Exchange /> {/*Logo + title on the left */}
      <Search lightAssets={props.lightAssets}></Search> {/*Middle input */}
      <Menu /> {/*Notification bell on the right */}
    </nav>
  );
}
