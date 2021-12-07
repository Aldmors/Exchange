import React from "react";
import Search from "./Search";
import Exchange from "./Exchange";
import Menu from "./Menu";

export default function Navbar(props: any) {
  return (
    <nav className="navbar">
      <Exchange />
      <Search lightCryptos={props.lightCryptos}></Search>
      <Menu />
    </nav>
  );
}
