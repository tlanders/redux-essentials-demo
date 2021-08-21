import {useState} from "react";

const HooksCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className={"App"}>
            <button onClick={increment}>Increment</button>&nbsp;
            <span>{count}</span>&nbsp;
            <button onClick={decrement}>Increment</button>
        </div>
    )
}

export default HooksCounter;