import React, {Component, PropTypes} from 'react';
import Mouse from "./mouse";

class GameBox extends Component {
    constructor(props) {
        super(props);
    }

    render ()  {
        console.log(this.props);

        let tpl = (<table>
            <tr>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[0]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[1]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[2]}/></td>
            </tr>
            <tr>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[3]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[4]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[5]}/></td>
            </tr>
            <tr>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[6]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[7]}/></td>
                <td><Mouse onHit={this.props.onHit} item={this.props.data[8]}/></td>
            </tr>
        </table>);



        return (<div className="game">
            {tpl}
        </div>);
    }
}

export default GameBox;