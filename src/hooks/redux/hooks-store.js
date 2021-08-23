import {createStore} from "redux";
import {rootReducer} from "./hooks-reducers";
import {composeWithDevTools} from "redux-devtools-extension";

export const hooksStore = createStore(
    rootReducer,
    composeWithDevTools()
);