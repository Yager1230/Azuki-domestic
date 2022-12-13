import React from "react";

import "./styles/index.scss";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      {/* TODO 判断token */}
      <Router></Router>
    </div>
  );
}

export default App;
