import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get(
      "http://api.weatherapi.com/v1/current.json?key=7f666624432f40f3a0c73908221904 &q=London&aqi=yes"
    );
  });
  return (
    <div className="App">
      <h1>Hello Axios</h1>
    </div>
  );
}

export default App;
