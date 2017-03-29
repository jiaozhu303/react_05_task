import React, {Component, PropTypes} from 'react';

import './mouse.css';

class Mouse extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps:',nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate:',nextProps);
        return true;
    }

    render() {

        const styles = this.props.item.show ? {
            backgroundImage: `url(../../static/img/${this.props.item.img}.png)`,
            backgroundRepeat: 'no'
        } : {};

        return (<div
            ref="mouse"
            className={this.props.item.img === 'init' ? 'box' : 'boxNull'}
            style={styles}
            onClick={this.props.item.img === 'init' ? () => {
                this.props.onHit(this.props.item.id)
            } : ''}
        >
        </div>);
    }
}

export default Mouse;