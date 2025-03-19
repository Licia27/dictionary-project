import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
        <Dictionary defaultKeyword="nostalgia" />
        </main>
        <footer className="App-footer">
          <small>Coded by Andy and it is <a href="https://github.com/Licia27/dictionary-project" target="_blank" rel="noopener noreferrer"> Open Sourced</a></small>
        </footer>
      </div>
    </div>
  );
}