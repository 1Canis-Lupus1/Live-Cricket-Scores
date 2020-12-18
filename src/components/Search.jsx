import React, { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      searchId: "",
      isError: "",
    };
  }

  async componentDidMount() {
    if (this.state.searchId) {
      let playerStat = await fetch(
        `https://cricapi.com/api/playerStats?apikey=${this.state.apiKey}&pid=${this.state.searchId}`
      );
      let playerData = await playerStat.json();
      this.setState({ searchPlayerStats: playerData }, () => {
        console.log("After Search:", this.state.searchPlayerStats);
        if (this.state.searchPlayerStats.error === "error") {
          this.setState({ isError: "1" }, () => {
            console.log("Is Error", this.state.isError);
          });
        } else {
          this.setState({ isError: "2" }, () => {
            console.log("Is Error", this.state.isError);
          });
        }
      });
    }
  }

  handleSearch = (e) => {
    this.setState(
      {
        searchId: e.target.value,
      },
      () => {
        // console.log("After Set State:", this.state.searchId);
      }
    );
  };

  handleSearchAPI = (e) => {
    this.componentDidMount();
    this.setState({ searchId: "" });
  };

  render() {
    return (
      <div
        className="jumbotron"
        style={{ margin: "0px 50px", padding: "10px 10px" }}
      >
        <label
          for="exampleFormControlInput1"
          style={{ margin: "10px" }}
          class="form-label alert alert-primary"
        >
          Get Player Stats By ID
        </label>
        <input
          type="text"
          value={this.state.searchId}
          class="form-control"
          id="inputPassword2"
          placeholder="Enter Player Id here"
          onChange={(e) => this.handleSearch(e)}
        />
        <div class="d-grid gap-2 col-6 mx-auto">
          {this.state.searchId.length === 0 ? (
            <button
              class="btn btn-dark"
              type="button"
              style={{ margin: "10px 30px" }}
              disabled
            >
              Get Player Info
            </button>
          ) : (
            <button
              class="btn btn-outline-success"
              type="button"
              style={{ margin: "10px 30px" }}
              onClick={(e) => {
                this.handleSearchAPI(e);
              }}
            >
              Get Player Info
            </button>
          )}
        </div>
        {console.log("Is Error in Render:", this.state.isError)}
        {this.state.isError === "1" && (
          <>
            <div className="alert alert-danger">
              <h4 class="alert-heading" style={{ margin: "5px 40px" }}>
                Invalid Player Id
              </h4>
              <hr />
              <small className="badge badge-info">
                Need Help With Player id?{" "}
              </small>
              &nbsp;
              <a
                href="https://www.cricapi.com/players/"
                style={{ fontSize: "15px" }}
                target="_blank"
              >
                See List
              </a>
            </div>
          </>
        )}
        {this.state.isError === "2" && <p>No Error</p>}
        {/* <p style={{ border: "2px solid black" }}>
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
        <hr /> */}
      </div>
    );
  }
}

export default Search;
