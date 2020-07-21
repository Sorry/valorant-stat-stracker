import React, { useState } from "react";
import "./App.css";
import github from "./assets/github.png";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Valorant Stat Tracker</h1>
      </header>
      <main>
        <form>
          <label htmlfor="username">Enter your VALORANT username:</label>
          <input
            disabled
            placeholder="Coming soon..."
            onChange={(e) => setUsername(setUsername(e.target.value))}
            name="username"
            value={username}
            className="username"
          />
          <button type="submit">Track Stats</button>
        </form>
      </main>
      <footer>
        <a href="">
          <img src={github} />
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
