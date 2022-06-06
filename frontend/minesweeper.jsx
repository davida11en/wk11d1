import React from 'react';
import ReactDOM from 'react-dom';
import Tile from '/components/tile';
import Game from '/components/game';
import Board from '/components/board';
// import * as Minesweeper from '../minesweeper';


// const board = Board.new()

function Root() {
    return (
        <div>
            <Game />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById('main')
    ReactDOM.render(<Root />, main)
})