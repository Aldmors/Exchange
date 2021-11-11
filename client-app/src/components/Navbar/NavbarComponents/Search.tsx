// @ts-nocheck
import React, { Component } from 'react'
import SearchResults from './SearchResults';

class Search extends Component<any, any> {
    constructor(props:any) {
        super(props)
    
        this.state = {
            userInput:"",
            resultShown:false,
            longCrypto:["Bitcoin","Ethereum","Binance Coin","Tether","Solana","Cardano"],
            shortCrypto:["btc","eth","bnb","usdt","sol","ada"],
            data:{
                "btc":"Bitcoin",
                "eth":"Ethereum",
                "bnb":"Binance Coin",
                "usdt":"Tether",
            },
            filteredData:[],

        }
    }
    
    handleUserInput = (e:any) => {
        e.target.value = e.target.value.toUpperCase()
        this.setState({
          userInput: e.target.value,
        },() =>{
            this.handleResultShown()
        });

        let filteredShort = (Object.entries(this.state.data).filter(([k,v]) => k.includes(this.state.userInput.toLowerCase())))
        let filteredLong = (Object.entries(this.state.data).filter(([k,v]) => v.toLowerCase().includes(this.state.userInput.toLowerCase())))
        let concatenetedFiltered = filteredShort.concat(filteredLong);
        let set = new Set(concatenetedFiltered.map(JSON.stringify));
        let uniqueFiltered = Array.from(set).map(JSON.parse);
        this.setState({
            filteredData:uniqueFiltered,
        })
      };

      handleResultShown = () => {
        if(this.state.userInput === "") {
            this.setState({
                resultShown:false,
            })
        } else if(this.state.userInput !== "" ) {
            this.setState({
                resultShown:true,
            })
        }
      }

      handleUserInputEmpty = (e:any) => {
        e.target.value = "";
          this.setState({
              userInput:"",
          },() => {
            this.handleResultShown()
          })
      }



    render() {
        return (
            <div className="navbar-search">
                    <input className="navbar-search-input" style={{borderRadius: this.state.resultShown?"25px 25px 0 0":"25px", border: this.state.resultShown?"2px solid rgb(51, 196, 129)":""}} placeholder="Search for crypto !" onChange={this.handleUserInput} onBlur={this.handleUserInputEmpty}/>

                    <div className="navbar-search-results" style={{display: this.state.resultShown?"block":"none"}}><hr/><div className="flex">{this.state.filteredData.map((item:any,index:any) => <SearchResults key={index} shortCrypto={item[0]} longCrypto={item[1]} />)}</div></div>
            </div>
        )
    }
}

export default Search
