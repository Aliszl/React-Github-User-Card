import React from "react";
import logo from "./logo.svg";
import "./App.css";

import GithubUserData from "./Components/GithubUserData";

function App() {
  return (
    <div>
      <div className="App">GitHub User Card App</div>
      <GithubUserData />
    </div>
  );
}

export default App;
