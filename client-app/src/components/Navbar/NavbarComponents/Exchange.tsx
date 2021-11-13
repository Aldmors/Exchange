import React, { Component } from "react";
import ExchangeLogo from "../../../img/exchangeLogo.png";

export class Exchange extends Component<any, any> {
  render() {
    return (
      <div className="navbar-exchange">
        <span>
          <img className="navbar-exchange-logo" alt="logo" src={ExchangeLogo} />
        </span>
        <span className="navbar-exchange-name">Exchange</span>
      </div>
    );
  }
}

export default Exchange;
