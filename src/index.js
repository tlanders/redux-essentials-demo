import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EssentialsApp from './essentials/EssentialsApp';
import OldStyleApp from "./oldstyle/OldStyleApp";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

const DemoHome = () => (
    <div className={"App"}>
        <h1>Redux Demos</h1>
        <p><Link to={"/essentials"}>Redux Essentials Basic Example</Link></p>
        <p><Link to={"/old-style"}>Old Style ReduxExample</Link></p>
    </div>
)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path={"/essentials"} exact>
                  <EssentialsApp />
              </Route>
              <Route path={"/old-style"} exact>
                  <OldStyleApp/>
              </Route>
              <Route path={"/"} exact>
                  <DemoHome/>
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
