import React, { Component } from "react";

export class CurrentMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: "iCLjbEzuHZRLvYhLbxlhW5t76XC2",
      currentMatches: [],
    };
  }

  async componentDidMount() {
    // console.log("Initial Render Check...");
    let response = await fetch(
      `https://cricapi.com/api/cricket?apikey=${this.state.apiKey}`
    );
    let data = await response.json();
    this.setState({ currentMatches: data.data }, () => {
      //   console.log("After Response is received:", this.state.currentMatches);
    });
  }

  render() {
    return (
      <div>
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

export default CurrentMatches;
