import React from "react";
import logo from "./roll.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>There you go - Suspense with react lazy</p>
      </header>
    </div>
  );
}

export default App;
