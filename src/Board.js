import React from 'react';
import './App.css';
import Square from './Square.js'

//handles displaying board, 3x3 to start
//displays ? in each square unless clicked, display tree
//upon clicking win state, display treasure box in square and alert with "you win"
//display counter for remaining guesses allowed, eject if === 0

class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            arr: [],
        }
    }
    randomize = () => {
        let arr = [0,0,0,0,0,0,0,0,0]
        let x = Math.floor(Math.random() * 9) //pull one num
        let y = Math.floor(Math.random() * 9) //pull one num
        while (y === x){ y = Math.floor(Math.random() * 9) }
        arr[x] = 1
        arr[y] = -1
        return arr
    }

    countdown = (input='') => {
        let { hiddenCounter } = this.state
        hiddenCounter--
        this.setState({hiddenCounter, trueCounter: hiddenCounter})
        if (input === 'You win!' || input === 'You lose!'){
            input = input + " Reset to play again."
            this.setState({ hiddenCounter: 0,trueCounter: hiddenCounter, endGame: input})
        } else if ( hiddenCounter === 0){
            var message = 'You lose! Out of time. Reset to play again.'
            this.setState({ hiddenCounter, trueCounter: hiddenCounter, endGame: message })
        }
    }

    resetState = () => {
        this.setState({arr: this.randomize(), playState: true, hiddenCounter: 5, reset: 1, trueCounter: 5, endGame: ''})
    }

    endReset = () => {
        let { reset } = this.state
        reset--
        this.setState({ reset })
    }

    render(){
        return (
            <div>
                <h2 className = "Title"> 💰Treasure Hunt💰</h2>
                <div className='backdrop'>
                    <div className='board' >
                        {this.state.arr.map((value, index) => {
                            return <Square
                            value={value}
                            key={index}
                            hiddenCounter = {this.state.hiddenCounter}
                            countdown = {this.countdown}
                            reset = {this.state.reset}
                            endReset = {this.endReset}/>
                            }
                        )}
                    </div>
                </div>
                <br/>
                <div className = 'message'> {this.state.endGame} </div>
                <br/>
                <div> Number of tries left: {this.state.trueCounter} </div>
                <br/>
                <button className = "button" onClick={this.resetState} >
                {this.state.playState ? 'Reset':'Start'}
                </button>
            </div>
        );
    }
}
export default Board;
