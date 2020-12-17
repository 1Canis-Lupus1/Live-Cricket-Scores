import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      searchId: "",
    };
  }

  async componentDidMount() {
    console.log("In ComponentDidMount of Search", this.state.searchId);
    if (this.state.searchId) {
      let playerStat = await fetch(
        `https://cricapi.com/api/playerStats?apikey=${this.state.apiKey}&pid=${this.state.searchId}`
      );
      let playerData = await playerStat.json();
      this.setState({ searchPlayerStats: playerData }, () =>
        console.log("After Search:", this.state.searchPlayerStats)
      );
      //   console.log("Data is now:", playerData);
    }
  }

  handleSearch = (e) => {
    // console.log("Typed Value is:",e.target.value)
    this.setState(
      {
        searchId: e.target.value,
      },
      () => {
        console.log("After Set State:", this.state.searchId);
      }
    );
  };

  handleSearchAPI = (e) => {
    console.log("Typed value to be searched is:", this.state.searchId);
    //Call The Api here
    this.componentDidMount();
    this.setState({ searchId: "" }, () => {
      //   this.componentDidMount();
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchId}
          placeholder="Enter Player Id here"
          onChange={(e) => this.handleSearch(e)}
        />
        <button
          onClick={(e) => {
            this.handleSearchAPI(e);
          }}
        >
          Search
        </button>
        <p style={{ border: "2px solid black" }}>
          Image:
          <img
            src={
              this.state.searchPlayerStats &&
              this.state.searchPlayerStats.imageURL
            }
          />
          <br />
          Date of Birth:
          {this.state.searchPlayerStats && this.state.searchPlayerStats.born}<br/>
          Show Other Details Here Now
        </p>
        <hr />
      </div>
    );
  }
}

export default Search;
