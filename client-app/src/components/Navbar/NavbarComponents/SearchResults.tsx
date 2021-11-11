import React, { PureComponent } from 'react'

export class SearchResults extends PureComponent<any,any> {
    constructor(props:any) {
        super(props)

        this.state = {
            
        }
    }

    getCryptoImage = (cryptoShort:any) => {
        return `https://cryptoicon-api.vercel.app/api/icon/${cryptoShort}`;
    }
    
    render() {
        return (
                <div className="navbar-search-results-link">
                    <img alt="cryptoImage" src={this.getCryptoImage(this.props.shortCrypto)}></img>
                    <b>{this.props.longCrypto}</b>
                </div>

        )
    }
}

export default SearchResults
