import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {decrementByAmount, incrementByAmount} from "../redux/hooks-actions";

const HooksCounter = ({count, onIncrement, onDecrement}) => (
    <div className={"App"}>
        <button onClick={onIncrement}>Increment</button>&nbsp;
        <span>{count.value}</span>&nbsp;
        <button onClick={onDecrement}>Increment</button>
    </div>
);

HooksCounter.propTypes = {
    count: PropTypes.object.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incrementByAmount(1)),
    onDecrement: () => dispatch(decrementByAmount(1))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HooksCounter);