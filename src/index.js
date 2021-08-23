import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import EssentialsApp from './essentials/EssentialsApp';
// import OldStyleApp from "./oldstyle/OldStyleApp";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
// import HooksApp from "./hooks/HooksApp";
import FeedApp from "./essentials-feed-app/FeedApp";

const DemoHome = () => (
    <div className={"App"}>
        <h1>Redux Demos</h1>
        {/*<p><Link to={"/essentials"}>Redux Essentials Basic Example</Link></p>*/}
        <p><Link to={"/feed-app"}>Redux Essentials Social Media Feed Example</Link></p>
        {/*<p><Link to={"/old-style"}>Old Style Redux Example</Link></p>*/}
        {/*<p><Link to={"/hooks"}>Hooks Redux Example</Link></p>*/}
    </div>
)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              {/*<Route path={"/essentials"} exact>*/}
              {/*    <EssentialsApp />*/}
              {/*</Route>*/}
              {/*<Route path={"/old-style"} exact>*/}
              {/*    <OldStyleApp/>*/}
              {/*</Route>*/}
              {/*<Route path={"/hooks"} exact>*/}
              {/*    <HooksApp/>*/}
              {/*</Route>*/}
              <Route path={"/feed-app"} exact>
                  <FeedApp/>
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
