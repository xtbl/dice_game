import React, {Component} from 'react';

class Dice extends Component {
    constructor(props) {
        super();
        this.state = {num: 1, isRolling: false};
    }
    render() {
        return (
            <div className={`Dice  ${(this.props.isRolling) ? 'shake' : '' }`}>
                <i className={`fas fa-dice-${this.props.num} fa-3x`}></i>
            </div>
        );
    }
}

export default Dice;