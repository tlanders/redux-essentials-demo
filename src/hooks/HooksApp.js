import './HooksApp.css';
import React from "react";
import HooksCounter from "./components/HooksCounter";
import {Provider} from "react-redux";
import {hooksStore} from "./redux/hooks-store";

const HooksApp = () => {
  return (
    <div className="App">
        <h1>Hooks Redux Counter</h1>
        <Provider store={hooksStore}>
            <HooksCounter/>
        </Provider>
    </div>
  );
}

export default HooksApp;
