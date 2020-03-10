
import React, {Component} from 'react';
import Dice from './Dice';

class RollDice extends Component {
    constructor(props) {
        super();
        this.state = {isRolling: false, diceA: 'one', diceB: 'one'};
        this.rollDice = this.rollDice.bind(this);
    }
    getDiceNumber () {
        const diceNumbers = ['one', 'two', 'three', 'four', 'five', 'six'];
        return diceNumbers[Math.floor(Math.random() * (diceNumbers.length))];
    }
    rollDice () {
        this.setState({isRolling: true});
        setTimeout(() => {
            this.setState({
                diceA: this.getDiceNumber(),
                diceB: this.getDiceNumber()
            });
            this.setState({isRolling: false});
        }, 1000);
    }
    render() {
        const button = (this.state.isRolling)
        ? <button disable="true">Rolling...</button>
        : <button onClick={this.rollDice} >Roll Dice!</button>
        return (
            <div className="RollDice">
                <Dice num={this.state.diceA} isRolling={this.state.isRolling}/>
                <Dice num={this.state.diceB} isRolling={this.state.isRolling}/>
                {button}
            </div>
        );
    }
}

export default RollDice;