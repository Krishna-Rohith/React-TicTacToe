import React from 'react';
import Button from './Button';
import './block.css';

function Block(props) {

    return (
        <div className="Block">
            <div className="row">
                <Button number={0} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={1} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={2} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
            </div>
            <div className="row">
                <Button number={3} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={4} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={5} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
            </div>
            <div className="row">
                <Button number={6} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={7} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
                <Button number={8} player={props.player} onPlay={props.changePlayer} setArr={props.setArr} resetArr={props.resetArr} arr={props.arr} winner={props.winner} updateScores={props.updateScores} curScores={props.curScores} setDisplay={props.setDisplay} />
            </div>
        </div>
    );
}

export default Block;