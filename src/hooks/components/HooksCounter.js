import {decrementByAmount, incrementByAmount} from "../redux/hooks-actions";
import {useDispatch, useSelector} from "react-redux";

const HooksCounter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className={"App"}>
            <button onClick={() => dispatch(incrementByAmount(1))}>Increment</button>&nbsp;
            <span>{count.value}</span>&nbsp;
            <button onClick={() => dispatch(decrementByAmount(1))}>Decrement</button>
        </div>
    );
};

export default HooksCounter;