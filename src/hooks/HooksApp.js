import './HooksApp.css';
import React from "react";
import HooksCounter from "./components/HooksCounter";

const HooksApp = () => {
  return (
    <div className="App">
        <h1>Hooks Redux Counter</h1>
        <HooksCounter/>
    </div>
  );
}

export default HooksApp;
