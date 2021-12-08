import React from "react";
import Notification from "../../img/notification.png";
import Settings from "../../img/settings.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="navbar-menu">
      <Link to="/news">
        <img className="navbar-menu-notification" alt="notification" src={Notification} />
      </Link>
      <Link to="/settings">
        <img className="navbar-menu-settings" alt="settings" src={Settings} />
      </Link>
    </div>
  );
}
