import React, { Component } from 'react';

export class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.addCount = this.addCount.bind(this);
    }
    addCount() {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        return (
            <>
                <h1>Counter Class</h1>
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.addCount}>Add 1</button>
            </>
        )
    }
}

export default CounterClass;
