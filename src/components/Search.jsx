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
        if (this.state.searchPlayerStats.error === "error") {
          this.setState({ isError: "1" });
        } else {
          this.setState({ isError: "2" });
        }
      });
    }
  }

  handleSearch = (e) => {
    this.setState(
      {
        searchId: e.target.value,
        isError:""
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
        {this.state.isError === "2" && (
          <>
            <hr />
            <div className="text-center">
              <img
                src={
                  this.state.searchPlayerStats &&
                  this.state.searchPlayerStats.imageURL
                }
                style={{ margin: "5px" }}
                className="rounded"
                alt={this.state.searchPlayerStats.name}
              />
            </div>
            <table class="table table-dark table-striped">
              Name:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.name}
              </tr>
              <hr />
              Country of Origin:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.country}
              </tr>
              <hr />
              Born:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.born}
              </tr>
              <hr />
              Current Age:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.currentAge}
              </tr>
              <hr />
              Playing Role:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.playingRole}
              </tr>
              <hr />
              Batting Style:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.battingStyle}
              </tr>
              <hr />
              Bowling Style:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.bowlingStyle}
              </tr>
              <hr />
              Batting Strike Rate:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.data.batting.firstClass.SR}
              </tr>
              <hr />
              Bowling Economy:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.data.bowling.firstClass.Econ}
              </tr>
              <hr />
              Major Teams played with:{" "}
              <tr style={{ margin: "10px 0px",fontSize:"20px" }}>
                {this.state.searchPlayerStats.majorTeams}
              </tr>
              <hr />
            </table>
          </>
        )}
      </div>
    );
  }
}

export default Search;
