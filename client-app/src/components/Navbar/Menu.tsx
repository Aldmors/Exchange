import React, { Component } from "react";
import Notification from "../../img/notification.png";
import Settings from "../../img/settings.png";

export class Menu extends Component<any, any> {
  render() {
    return (
      <div className="navbar-menu">
        <img className="navbar-menu-notification" alt="notification" src={Notification} />
        <img className="navbar-menu-settings" alt="settings" src={Settings}/>
      </div>
    );
  }
}

export default Menu;
