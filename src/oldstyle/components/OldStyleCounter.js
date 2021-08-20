import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {decrementCount, incrementCount} from "../redux/actionTypes";

class OldStyleCounter extends React.Component {
    static propTypes = {
        count: PropTypes.object.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            incrementBy: '2'
        };
    }

    incrementByAmount = () => (
        this.props.onIncrement(Number(this.state.incrementBy) || 0)
    );

    incrementAsync = (incBy) => (
        setTimeout(
            () => this.props.onIncrement(Number(incBy) || 0),
            3000)
    );

    render() {
        const {count, onIncrement, onDecrement} = this.props
        return (
            <div>
                <button onClick={() => onIncrement(1)}>Increment</button>&nbsp;
                <span>{count.value}</span>&nbsp;
                <button onClick={() => onDecrement(1)}>Decrement</button>
                <hr/>
                <input
                    type={"text"}
                    placeholder={"Increment amount"}
                    name={"amount"}
                    size={12}
                    value={this.state.incrementBy}
                    onChange={(e) => this.setState({incrementBy: e.target.value})}
                />&nbsp;
                <button onClick={this.incrementByAmount}>Increment By Amount</button>&nbsp;
                <button onClick={() => this.incrementAsync(this.state.incrementBy)}>Increment Async</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (amount) => dispatch(incrementCount(amount)),
    onDecrement: (amount) => dispatch(decrementCount(amount)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OldStyleCounter);