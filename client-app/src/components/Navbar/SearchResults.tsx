import React, { PureComponent } from "react";

// Pure component to avoid making hundreds of requests to get icons
export class SearchResults extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  // Returning icon based on shortcut
  getResultImage = (shortData: any) => {
    return `https://cryptoicon-api.vercel.app/api/icon/${shortData}`;
  };

  render() {
    return (
      <div className={this.props.oneOrMany}>
        <img alt="resultImage" src={this.getResultImage(this.props.shortData)}></img>
        <b>{this.props.longData}</b>
      </div>
    );
  }
}

export default SearchResults;
