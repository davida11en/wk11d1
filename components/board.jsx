import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="board">
                {this.props.board.grid.map((row, rowIdx) => (
                    <div key={rowIdx} className="boardRow">
                        {row.map((tile, colIdx) => (
                            <div key={colIdx}>
                                <Tile key={colIdx} tile={tile} updateGame={this.props.updateGame}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}