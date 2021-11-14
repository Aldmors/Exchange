import React, { Component } from "react";
import Search from "./NavbarComponents/Search/Search";
import Exchange from "./NavbarComponents/Exchange";
import Menu from "./NavbarComponents/Menu";

export class Navbar extends Component<any, any> {
  render() {
    return (
      <nav className="navbar">
        <Exchange /> {/*Logo + title on the left */}
        <Search /> {/*Middle input */}
        <Menu /> {/*Notification bell on the right */}
      </nav>
    );
  }
}

export default Navbar;
