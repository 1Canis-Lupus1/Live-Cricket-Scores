import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId: "",
      currentMatches: [],
    };
  }

  async componentDidMount() {
    console.log("Initial Render Check...");
    let apikey = "iCLjbEzuHZRLvYhLbxlhW5t76XC2";
    let response = await fetch(
      `https://cricapi.com/api/cricket?apikey=${apikey}`
    );
    let data = await response.json();
    this.setState({ currentMatches: data.data }, () => {
      //   console.log("After Response is received:", this.state.currentMatches);
    });
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
    this.setState({ searchId: "" });
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
        <hr />
        <ul style={{ listStyleType: "none" }}>
          {/* <li>Display the Matches here</li> */}
          {this.state.currentMatches.map((entry) => {
            //   console.log("Entry is :",entry)
            return <li key={entry.unique_id}>{entry.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
