import './App.css';
import Counter from "./features/counter/Counter";
import store from "./app/store";
import {Provider} from "react-redux";
import React from "react";

function EssentialsApp() {
  return (
    <div className="App">
        <h1>Essentials Style Counter</h1>
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  );
}

export default EssentialsApp;
