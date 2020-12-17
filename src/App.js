import "./App.css";
import {Search} from "../src/components/Search"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Live Cricket Scores </p>
      </header><br/>
      <strong>Search Bar Here</strong><br/>
      <Search/>
    </div>
  );
}

export default App;
