import React, { Component } from "react";
import moment from "moment";

export class UpcomingMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      displayMatches: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    let getMatches = await fetch(
      `https://cricapi.com/api/matchCalendar?apikey=${this.state.apiKey}`
    );
    let showMatches = await getMatches.json();
    // console.log("Upcomming Matches are:",showMatches.data)
    this.setState({
      displayMatches: showMatches.data,
      isLoading: false,
    });
  }

  render() {
    return (
      <div>
        <h4 className="alert alert-dark">
          <strong>View Upcoming Matches Here</strong>
        </h4>
        {this.state.isLoading && (
          <div
            class="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        )}
        {this.state.isLoading === false &&
          this.state.displayMatches.map((each) => {
            // console.log("Count is now:",each.indexOf)
            return (
              <ul>
                <>
                  <div class="list-group" style={{ margin: "20px" }}>
                    <a
                      href="#"
                      // target="_blank"
                      class="list-group-item list-group-item-action flex-column align-items-start "
                    >
                      <div class="d-flex w-100 justify-content-between alert alert-info">
                        <h5 class="mb-1">
                          <span
                            class="badge bg-warning"
                            style={{ fontSize: "20px" }}
                          >
                            Scheduled Match Details:
                          </span>
                          &nbsp;<strong>{each.name}</strong>
                        </h5>
                      </div>
                      <hr />
                      <p style={{ margin: "10px" }}>
                        <span style={{ fontSize: "20px" }}>
                          Scheduled Date:
                        </span>
                        &nbsp;
                        <strong>
                          {moment(each.date).format("dddd, MMMM Do YYYY")}
                        </strong>
                      </p>
                    </a>
                  </div>
                </>
              </ul>
            );
          })}
      </div>
    );
  }
}

export default UpcomingMatches;
