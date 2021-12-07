import React from "react";
import { Link } from "react-router-dom";
import icons from "./../../icon.json";

export default function SearchResults(props: any) {
  const getCryptoImage = () => {
    let indx = icons.findIndex((x) => x.asset_id === props.shortData.toUpperCase());
    if (indx === -1) {
      return "";
    } else {
      return icons[indx].url;
    }
  };

  getCryptoImage();

  return (
    <Link
      style={{ textDecoration: "none" }}
      className={props.oneOrMany}
      to={`/crypto/${props.shortData.toLowerCase()}`}
      state={{ cryptoId: props.cryptoId }}
    >
      <img alt="resultImage" src={getCryptoImage()}></img>
      <b>{props.longData}</b>
    </Link>
  );
}
