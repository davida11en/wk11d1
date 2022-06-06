import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            board: new Minesweeper.Board(9, 9)
        }
        
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board})
    }
    
    render() {
        const { board } = this.state;

        return (
            <div>
                <Board board={board} updateGame={this.updateGame}/>
            </div>
        )
    }
}