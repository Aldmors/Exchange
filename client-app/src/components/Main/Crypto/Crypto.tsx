// @ts-nocheck
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";


export default function Crypto(props: any) {
  const location = useLocation()
  const { cryptoId } = location.state
  const [crypto,setCrypto] = useState()

  useEffect(() => {
    console.log(`https://localhost:5001/api/Asset/${cryptoId}`)
    axios.get(`https://localhost:5001/api/Asset/${cryptoId}`).then(function(response:any) {
      console.log(response.data)
      setCrypto(response.data)
    }).then(function() {

    })
  },[])

  useEffect(() => {
    console.log(crypto)
  }, [crypto])

  return (
    <div className="main">
      <h1></h1>
    </div>
  );
}
