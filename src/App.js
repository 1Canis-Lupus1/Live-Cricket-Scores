import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { Search } from "../src/components/Search";
import CurrentMatches from "./components/CurrentMatches";
import UpcomingMatches from "./components/UpcomingMatches";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b style={{ fontSize: "50px" }}>Cricket Info Hub </b>
      </header>
      <br />
      <Search />
      <hr />
      <CurrentMatches />
      <hr />
      <UpcomingMatches />
      <hr />
      <Copyright />
      <hr/>
    </div>
  );
}

export default App;
