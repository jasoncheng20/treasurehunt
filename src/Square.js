import React from 'react';
import './App.css';
import tree from './palmtree.png'
import bomb from './bomb.png'
import treasure from './treasure.png'

//handle display of individual squares
//handles ifClicked and value, but not entire array
//handle determining win/lose state and eject to App.js if either is encountered

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'a',
        }
    }
    reveal = (a='') => {
        if (a === 'clear'){
            let { show } = this.state
            show = ''
            this.setState({ show })
            this.props.endReset()
        } else if (this.props.hiddenCounter > 0) {
            let display = this.state.show
            //  if the value is -1, display a lose state (bomb)
            if (this.props.value === -1){
                display = <img className = "bomb" src = {bomb} alt="bomb goes boom"/>
                alert('You lose. Reset to play again.')
                this.props.countdown('lose')
                // if the value is 1, display a win state (treasure)
            } else if (this.props.value === 1){
                display = <img className = "treasure" src = {treasure} alt="treasure chest. u rich now"/>
                alert('You win! Reset to play again.')
                this.props.countdown('win')
                // else, display tree
            } else {
                display = <img className = "tree" src = {tree} alt="tree. deez coconuts"/>
                this.props.countdown()
            }
            this.setState({show: display})
        }
    }

    render(){
        if (this.props.reset){
            this.reveal('clear')
        }
        return (
            <div className="square" onClick={this.reveal}>
                {this.state.show ? this.state.show : '?'}
            </div>
        );
    }
}
export default Square;
