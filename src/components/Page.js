import React, {Component} from 'react'
import GameBox from './gameBox';

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <GameBox onHit={this.props.onHit} data={this.props.data}/>
        </div>);
    }
}