import React from "react";
import { useLocation } from "react-router";

export default function Crypto(props: any) {
  let currentCrypto = useLocation();
  return (
    <div className="main">
      <h1>{currentCrypto.pathname}</h1>
    </div>
  );
}
