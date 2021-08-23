import {combineReducers} from "redux";
import {DECREMENT_BY_AMOUNT, INCREMENT_BY_AMOUNT} from "./hooks-actions";

const intialCountState = {
    value: 0
};

const countReducer = (state = intialCountState, action) => {
    // console.log('countReducer - state:', state);
    // console.log('countReducer - action:', action);
    switch (action.type) {
        case(INCREMENT_BY_AMOUNT):
            return {
                value: state.value + action.amount
            };
        case(DECREMENT_BY_AMOUNT):
            return {
                value: state.value - action.amount
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    count: countReducer
});

