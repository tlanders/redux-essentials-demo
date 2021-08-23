import {DECREMENT_COUNT, INCREMENT_COUNT} from "./actionTypes";

export const countReducer = (state = {value: 0}, action) => {
    // console.log('countReducer: state val: ' + state.value + ', state: ', state);
    // console.log('countReducer: action: ', action);
    switch(action.type) {
        case INCREMENT_COUNT:
            const newState = {
                value: state.value + action.amount
            }
            console.log('new state: ', newState);
            return newState;
        case DECREMENT_COUNT:
            return {
                value: state.value - action.amount
            }
        default:
            return state;
    }
}