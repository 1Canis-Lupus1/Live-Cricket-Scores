import React, { Component } from "react";
import moment from "moment";

export class UpcomingMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      displayMatches: [],
    };
  }

  async componentDidMount() {
    console.log("Inside Upcoming matches");
    let getMatches = await fetch(
      `https://cricapi.com/api/matchCalendar?apikey=${this.state.apiKey}`
    );
    let showMatches = await getMatches.json();
    // console.log("Upcomming Matches are:",showMatches.data)
    this.setState(
      {
        displayMatches: showMatches.data,
      },
      () => {
        console.log("After Set State:", this.state.displayMatches);
      }
    );
  }

  render() {
    return (
      <div>
        <h4>Upcoming Matches List Here</h4>
        {this.state.displayMatches.map((each) => {
          return (
            <ul>
              <>
                <div class="list-group" style={{ margin: "20px" }}>
                  <a
                    href="#"
                    // target="_blank"
                    class="list-group-item list-group-item-action flex-column align-items-start "
                  >
                    <div class="d-flex w-100 justify-content-between">
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
                    {/* <hr />
                    <p class="mb-1">
                      <span class="alert alert-dark">
                        <span>Language:</span>
                        <strong>&nbsp; Some thing else</strong>
                      </span>
                      <br />
                    </p> */}
                    <hr />
                    <small style={{ margin: "10px" }}>
                      Scheduled Date:&nbsp;
                      <strong>{moment(each.date).format(
                        "dddd, MMMM Do YYYY"
                      )}</strong>
                    </small>
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
