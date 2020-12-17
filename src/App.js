import "./App.css";
import { Search } from "../src/components/Search";
import CurrentMatches from "./components/CurrentMatches";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Live Cricket Scores </p>
      </header>
      <br />
      <strong>Ongoing Matches</strong>
      <CurrentMatches />
      <hr />
      <Search />
    </div>
  );
}

export default App;
