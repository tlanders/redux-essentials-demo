import React from "react";

class OldStyleCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Old Style Counter</h1>
                <button onClick={this.increment}>Increment</button>&nbsp;
                <span>{this.state.count}</span>&nbsp;
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default OldStyleCounter;