import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './essentials/App';
// import {Provider} from "react-redux";
// import store from './essentials/app/store';
import OldStyleApp from "./oldstyle/OldStyleApp";

ReactDOM.render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
      {/*    <App />*/}
      {/*</Provider>*/}
    <OldStyleApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
