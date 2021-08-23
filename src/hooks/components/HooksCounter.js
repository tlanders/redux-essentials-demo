import {decrementByAmount, incrementByAmount} from "../redux/hooks-actions";
import {useDispatch, useSelector} from "react-redux";
import {getCount} from "../redux/hooks-selectors";

const HooksCounter = () => {
    const count = useSelector(getCount);
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