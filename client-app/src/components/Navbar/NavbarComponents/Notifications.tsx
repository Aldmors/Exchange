import React, { Component } from "react";
import Notification from "../../../img/notification.png";

export class Notifications extends Component<any, any> {
  render() {
    return (
      <div className="navbar-menu">
        <img alt="notification" src={Notification} />
      </div>
    );
  }
}

export default Notifications;
