// @ts-nocheck
// Never wrote TypeScript in my life before, TypeScript throws
// a lot of errors that i can't understand, and i can't fix them so
// i just turned TypeScript off for this file
// This file is such a mess

import React, { useState, useRef, useEffect } from "react";
import SearchResults from "./SearchResults";
import cross from "../../img/cross.png";

function Search(props: any) {
  const [userInput, setUserInput] = useState("");
  const userInputRef = useRef(null);
  const [resultShown, setResultShown] = useState(false);
  const [resultBoxHeight, setResultBoxHeight] = useState("900px");
  const [currentResultCount, setCurrentResultCount] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [data] = useState(props.lightCryptos);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (userInput === "" || Math.ceil(filteredData.length / 4) === 0) {
      setResultShown(false);
    } else if (userInput !== "") {
      setResultShown(true);
    }

    let tempResultBoxHeight = 110 * Math.ceil(filteredData.length / 4);
    if (tempResultBoxHeight > 725) {
      tempResultBoxHeight = 725;
    }
    setCurrentResultCount(filteredData.length);
    setResultBoxHeight(`${tempResultBoxHeight}px`);
  }, [userInput, filteredData.length]);

  const handleUserInput = (e: any) => {
    e.target.value = e.target.value.toUpperCase();
    setUserInput(e.target.value);
    getSearchedData();
  };

  const handleUserInputEmpty = () => {
    userInputRef.current.value = "";
    setUserInput("");
  };

  const getSearchedData = () => {
    // Filter by shortNames(keys)
    let filteredShort = Object.entries(data).filter(([k, v]) => k.toLowerCase().includes(userInput.toLowerCase()));
    // Filter by fullNames(values)
    let filteredLong = Object.entries(data).filter(([k, v]) => v[1].toLowerCase().includes(userInput.toLowerCase()));
    // Connect them into one
    let concatenetedFiltered = filteredShort.concat(filteredLong);
    // Change : array => JSON => set(get uniques)
    let set = new Set(concatenetedFiltered.map(JSON.stringify));
    // Change : set => object => array
    let uniqueFiltered = Array.from(set).map(JSON.parse);
    setFilteredData(uniqueFiltered);
  };

  return (
    <div className="navbar-search">
      <input
        className="navbar-search-input"
        style={{
          borderRadius: resultShown ? "25px 25px 0 0" : "25px",
          border: resultShown ? "2px solid rgb(51, 196, 129)" : "",
        }}
        placeholder="Search !"
        onChange={handleUserInput}
        ref={userInputRef}
      />
      <img
        style={{ visibility: resultShown ? "visible" : "hidden" }}
        onClick={handleUserInputEmpty}
        className="navbar-search-input-cross"
        src={cross}
        alt="cross"
      />

      <div
        className="navbar-search-results"
        style={{ display: resultShown ? "block" : "none", height: resultBoxHeight }}
        onClick={handleUserInputEmpty}
      >
        <hr />
        <div className="nav-search-flex" style={{ height: currentResultCount === 1 ? "55%" : "default" }}>
          {filteredData.map((item, index) => (
            <SearchResults
              key={index}
              shortData={item[0]}
              longData={item[1][1]}
              cryptoId={item[1][0]}
              resultCount={currentResultCount}
              oneOrMany={currentResultCount === 1 ? "navbar-search-results-oneLink" : "navbar-search-results-link"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Search);
