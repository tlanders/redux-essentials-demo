import OldStyleCounter from "./components/OldStyleCounter";
import './OldStyleApp.css';
import {Provider} from "react-redux";
import {store} from './redux/store';
import React from "react";

function OldStyleApp() {
  return (
    <div className="App">
        <h1>Old Style Counter</h1>
        <Provider store={store}>
            <OldStyleCounter/>
        </Provider>
    </div>
  );
}

export default OldStyleApp;
