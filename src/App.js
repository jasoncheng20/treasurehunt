import React from 'react';
import './App.css';
import Board from './Board.js'

//handles main state
//state: array of objects containing values
//stretch goal: including bombs (lose state) as well as null state (tree) and win state (tresure box)
//function to randomize available states each game
//handles win or lose message
//play button if first time, play again if already played
//values: -1 = loss state, 0 = tree(hidden), 1 = win state, 2 = tree(revealed)

class App extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {arr: []}
    // }

// when you click "start", randomizes and changes playState to true
// Function should reset the game
    // randomize = () => {
    //     let arr = [0,0,0,0,0,0,0,0,0]
    //     let x = Math.floor(Math.random() * 9) //pull one num
    //     let y = Math.floor(Math.random() * 9) //pull one num
    //     while (y === x){ y = Math.floor(Math.random() * 9) }
    //     arr[x] = 1
    //     arr[y] = -1
    //     return arr
    // }

    // resetState = () => {
    //     this.setState({arr: this.randomize(), playState: true, counter: 5, reset: true})
    // }

    // countdown = () => {
    //     let { counter } = this.state
    //     counter--
    //     if ( counter === 0){
    //         alert('You lose! Out of time')
    //     }
    //     this.setState({ counter })
    // }

    // endReset = () => {
    //     this.setState({reset: false})
    // }
    // winLose = () => {
        //if, if else, else
    // }

    render(){
        // const board = <Board arr={this.state.arr}/>
        return (
            <div className="App">
                <header className="App-header">
                    <Board /> 
                </header>
            </div>
        );
    }
}
export default App;
