import React from 'react';
import './block.css';
import { Person } from '@material-ui/icons'

function Scorecard(props) {
    return (
        <div id="div-scores">
            <ul>
                <li id="liPlayer1">
                    <Person />
                    <div className="scoreName" id="Player1">Player 1</div>
                    <div>{props.scores[0]}</div>
                </li>
                <li id="liTie">
                    <div>X-O</div>
                    <div className="scoreName" id="Tie">Tied</div>
                    <div>{props.scores[1]}</div>
                </li>
                <li id="liPlayer2">
                    <Person />
                    <div className="scoreName" id="Player2">Player 2</div>
                    <div>{props.scores[2]}</div>
                </li>
            </ul>
        </div >
    );
}

export default Scorecard;