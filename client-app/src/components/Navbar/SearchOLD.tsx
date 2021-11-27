// @ts-nocheck
// Never wrote TypeScript in my life before, TypeScript throws
// a lot of errors that i can't understand, and i can't fix them so
// i just turned TypeScript off for this file
// This file is such a mess
// Whole file comes to understanding handleUserInput() function

import React, { Component } from "react";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

class Search extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      userInput: "",
      resultShown: false,
      resultBoxHeight: "900px",
      currentResultCount: 0,
      filteredData: [],
      data: {
        btc: "Bitcoin",
        eth: "Ethereum",
        bnb: "Binance Coin",
        usdt: "Tether",
        sol: "Solana",
        ada: "Cardano",
        xrp: "XRP",
        dot: "Polkadot",
        doge: "Dogecoin",
        usdc: "USD Coin",
      },
    };
  }

  // Get user input, set it to state, make user input allways uppercase on the screen
  handleUserInput = (e: any) => {
    e.target.value = e.target.value.toUpperCase();
    this.setState(
      {
        userInput: e.target.value,
      },
      () => {
        // Handle showin result box when input not empty
        this.handleResultShown();
        // Handle result box height based on how much results are shown
        this.handleResultBoxHeight();
      }
    );
    // Get searched items/results
    this.getSearchedData();
  };

  // Handle showing result box based on input
  handleResultShown = () => {
    if (this.state.userInput === "" || Math.ceil(this.state.filteredData.length / 4) === 0) {
      this.setState({
        resultShown: false,
      });
    } else if (this.state.userInput !== "") {
      this.setState({
        resultShown: true,
      });
    }
  };

  // Handle result box when input gets empty (hide it)
  handleUserInputEmpty = (e: any) => {
    e.target.value = "";
    this.setState(
      {
        userInput: "",
      },
      () => {
        this.handleResultShown();
      }
    );
  };

  getSearchedData = () => {
    // Filter shortcutName(key) AND fullName(value) based on input and return arrays in array [[key:value][key:value][key:value]]
    // Connect those arrays into one (possible repetitions, input ETH gave [[ETH:ethereum][eth:ETHereum][usdt:tETHer])
    // Change concateneted array into JSON (look next point)
    // Change JSON into set (get unique values)(changing array before JSON into set didn't gavee me unique maybe because array of arrays)
    // Change set into object and then into array
    // Set state - filtered array BY KEYS AND VALUES WITH UNIQUES ONLY
    // Probably need rewrite but i don't know how to do it other way :\

    // Filter by shortNames(keys)
    let filteredShort = Object.entries(this.state.data).filter(([k, v]) => k.includes(this.state.userInput.toLowerCase()));
    // Filter by fullNames(values)
    let filteredLong = Object.entries(this.state.data).filter(([k, v]) => v.toLowerCase().includes(this.state.userInput.toLowerCase()));
    // Connect them into one
    let concatenetedFiltered = filteredShort.concat(filteredLong);
    // Change : array => JSON => set(get uniques)
    let set = new Set(concatenetedFiltered.map(JSON.stringify));
    // Change : set => object => array
    let uniqueFiltered = Array.from(set).map(JSON.parse);
    this.setState({
      filteredData: uniqueFiltered,
    });
  };

  handleResultBoxHeight = () => {
    // Calculate result box height based on item count
    let tempResultBoxHeight = 110 * Math.ceil(this.state.filteredData.length / 4);
    // Limit at 725, otherwise it's to big for screen
    if (tempResultBoxHeight > 725) {
      tempResultBoxHeight = 725;
    }
    this.setState({
      // Handle current result items shown
      currentResultCount: this.state.filteredData.length,
      resultBoxHeight: `${tempResultBoxHeight}px`,
    });
  };

  render() {
    return (
      <div className="navbar-search">
        <input
          className="navbar-search-input"
          style={{
            borderRadius: this.state.resultShown ? "25px 25px 0 0" : "25px",
            border: this.state.resultShown ? "2px solid rgb(51, 196, 129)" : "",
          }}
          placeholder="Search !"
          onChange={this.handleUserInput}
          onBlur={this.handleUserInputEmpty}
        />

        <div
          className="navbar-search-results"
          style={{ display: this.state.resultShown ? "block" : "none", height: this.state.resultBoxHeight }}
        >
          <hr />
          <div className="nav-search-flex" style={{ height: this.state.currentResultCount === 1 ? "55%" : "default" }}>
            {this.state.filteredData.map((item: any, index: any) => (
                <SearchResults
                  key={index}
                  shortData={item[0]}
                  longData={item[1]}
                  resultCount={this.state.currentResultCount}
                  oneOrMany={
                    this.state.currentResultCount === 1 ? "navbar-search-results-oneLink" : "navbar-search-results-link"
                  }
                />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
