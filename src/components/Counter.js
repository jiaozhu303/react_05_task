import React, {Component, PropTypes} from 'react';



export default class Counter extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (<div>
            <h1>计数器总数：{this.props.value}</h1>
            <button className="btn btn-success" onClick={this.props.onIncrement}>加法</button>
            <button className="btn btn-danger" onClick={this.props.onDecrement}>减法</button>

        </div>);
    }
}
