import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let clicked = false;
        if (e.altKey) {
            clicked = true;
        }
        this.props.updateGame(this.props.tile, clicked);
    }

    render(){
        console.log(this.props)
        const { tile } = this.props;
        // console.log(tile);
        let tileClass = "tile";
        let text = "";
        let count = tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : "";

        if (tile.explored) {
            tileClass += " explored";
            text = tile.bombed ? "B" : count;
        } else if (tile.flagged) {
            tileClass += " flagged";
            text = "F";
        }
        // console.log(tileClass)
    
        return (
            <div className={tileClass} onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}