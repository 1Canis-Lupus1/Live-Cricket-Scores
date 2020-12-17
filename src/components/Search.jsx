import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchId: "",
    };
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
        <button onClick={(e) => {
            this.handleSearchAPI(e)
            }}>Search</button>
      </div>
    );
  }
}

export default Search;
