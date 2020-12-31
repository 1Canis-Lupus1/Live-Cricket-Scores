import React, { Component } from "react";

export class CurrentMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      currentMatches: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    let response = await fetch(
      `https://cricapi.com/api/cricket?apikey=${this.state.apiKey}`
    );
    let data = await response.json();
    this.setState({ currentMatches: data.data, isLoading: false });
  }

  handleCurrentMatches = () => {
    return this.state.currentMatches.map((entry, index) => {
      return (
        <div class="container">
          <div class="row">
            <div class="col-2" style={{ border: "1px solid black",padding:"5px" }}>
              {index + 1}
            </div>
            <div class="col-10" style={{ border: "1px solid black",padding:"5px" }}>
              <b>{entry.title}</b>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="card text-center"
        style={{ margin: "40px 130px", padding: "20px 20px" }}
      >
        <div className="card-header">
          <h4>On-Going Matches</h4>
        </div>
        <div className="card-body">
          {this.state.currentMatches.length === 0 ? (
            <>
              <div className="alert alert-error">
                <div
                  className="bg-danger"
                  style={{ color: "white", padding: "20px 20px" }}
                >
                  <h4>Failed To Load Current Data</h4>
                  <small>Check Your Internet Connection And Try Again</small>
                </div>
                <hr />
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  class="btn btn-outline-primary"
                >
                  Reload Page
                </button>
              </div>
            </>
          ) : (
            <div className="row">
              <div className="col-2 alert alert-success" style={{ fontSize:"20px",border: "2px dotted black" }}>
                Index
              </div>
              <div className="col-10 alert alert-info" style={{ fontSize:"20px",border: "2px dotted black" }}>
                Match Details With Live Scores ( * If Applicable)
              </div>

              {this.handleCurrentMatches()}
              <div className="card-footer text-muted" style={{fontSize:"10px"}}>
                Last Updated: {Math.floor(Math.random() * 5) + 1} mins ago
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CurrentMatches;
