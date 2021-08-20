import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementAsync, incrementByAmount, selectCount} from "./counterSlice";

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
                placeholder={"Increment amount"}
                size={'12'}
            />&nbsp;
            <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Increment By Amount</button>
            &nbsp;
            <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Increment Async</button>
        </div>
    )
}

export default Counter;