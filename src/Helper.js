import React from 'react';

function Helper(props) {
    return (
        <div id="resetBtns">
            <h2 id="statusDisplay">{props.curDisplay}</h2>
            <button id="btnResetGame" onClick={() => resetGame(props)}>Reset Game</button>
            <button id="btnResetScores" onClick={() => props.onResetScore([0, 0, 0])}>Reset Scores</button>
        </div>
    );
}

const resetGame = (props) => {
    if (props.arr.some(item => item !== '')) {
        let response = window.confirm('Are you sure to reset the board?');
        if (response) {
            props.onResetGame(Array(9).fill(''));
            props.onResetGamePlayer('X');
            props.setDisplay("Player 1's turn");
        }
        else
            alert('Operation cancelled.');
    }
}

export default Helper;