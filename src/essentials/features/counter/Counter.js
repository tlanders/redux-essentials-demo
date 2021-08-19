import React from "react";
import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount, incrementAsync, selectCount} from "./counterSlice";

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <span> {count} </span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <hr/>
            <input
                type={"text"}
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
                placeholder={"Set increment amount"}
                size={'15'}
            />&nbsp;
            <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment By Amount</button>
            &nbsp;
            <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Increment Async</button>
        </div>
    )
}

export default Counter;