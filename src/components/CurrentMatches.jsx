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
    // console.log("Initial Render Check...");
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
            <div class="col">1 of 2</div>
            <div class="col">2 of 2</div>
          </div>
        </div>
        // <table>
        //   <tbody>
        //     <tr>
        //       <th
        //         style={{
        //           padding: "10px 65px",
        //           margin: "10px 40px",
        //           border: "1px solid black",
        //         }}
        //         scope="row"
        //         key={entry.unique_id}
        //       >
        //         {index + 1}
        //       </th>
        //       <th
        //         style={{
        //           padding: "20px 50px",
        //           margin: "10px 10px",
        //           border: "2px dotted black",
        //           width: "100%",
        //         }}
        //         key={entry.unique_id + 1}
        //       >
        //         {entry.title}
        //       </th>
        //     </tr>
        //   </tbody>
        // </table>
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
            <div style={{ border: "2px solid black" }}>
              <thead>
                <tr style={{ boder: "1px solid black" }}>
                  <th
                    className="table-primary"
                    style={{
                      padding: "10px 50px",
                      margin: "10px 10px",
                    }}
                    scope="col"
                  >
                    Index
                  </th>
                  <th
                    className="table-warning"
                    style={{
                      padding: "10px 50px",
                      margin: "10px 10px",
                      width: "100%",
                    }}
                    scope="col"
                  >
                    Match Details with Live Scores
                  </th>
                </tr>
              </thead>
              {this.handleCurrentMatches()}
              <div className="card-footer text-muted">
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
