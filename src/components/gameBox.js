import React, {Component} from 'react';
import Mouse from "./mouse";
import './gameBox.css';

class GameBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {

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
            </table>
        );


        return (<div className="game">
            <h1 className="title">打地鼠小游戏</h1>
            {tpl}
            <button className="btn btn-info col-sm-4" onClick={this.props.beginGame}>开始</button>
            {/*<button className="btn btn-danger col-sm-4" onClick={this.props.stopGame}>暂停</button>*/}

        </div>);
    }
}

export default GameBox;