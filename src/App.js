import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "../src/components/Search";
import CurrentMatches from "./components/CurrentMatches";
import UpcomingMatches from "./components/UpcomingMatches";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Live Cricket Scores </p>
      </header>
      <br />
      {/* <Search /> */}
      <hr />
      <CurrentMatches />
      <hr />
      {/* <UpcomingMatches /> */}
      <hr />
    </div>
  );
}

export default App;
