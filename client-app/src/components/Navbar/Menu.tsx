import React, { Component } from "react";
import Notification from "../../img/notification.png";
import Settings from "../../img/settings.png";
import { Link } from "react-router-dom";

export class Menu extends Component<any, any> {
  render() {
    return (
      <div className="navbar-menu">
        <Link to ="/">
          <img className="navbar-menu-notification" alt="notification" src={Notification} />
        </Link>
        <img className="navbar-menu-settings" alt="settings" src={Settings}/>
      </div>
    );
  }
}

export default Menu;
