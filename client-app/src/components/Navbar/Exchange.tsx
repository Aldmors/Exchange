import React from "react";
import ExchangeLogo from "../../img/exchange.png";

export default function Exchange() {
  return (
    <div className="navbar-exchange">
      <span>
        <img className="navbar-exchange-logo" alt="logo" src={ExchangeLogo} />
      </span>
      <span className="navbar-exchange-name">Exchange</span>
    </div>
  );
}
