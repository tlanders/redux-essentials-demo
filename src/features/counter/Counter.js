import React from "react";
import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>The count is {count}</p>
            <button onClick={increment}>Increment</button> <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;