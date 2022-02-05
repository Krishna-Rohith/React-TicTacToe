function Button(props) {
    return (
        <div className="Button">
            <button className="btnTTT" id={`btn${props.number}`} onClick={(e) => valueSetter(e, props, props.arr[parseInt(props.number)])}>{props.arr[parseInt(props.number)]}</button>
        </div>
    );
}

const valueSetter = (e, props, value) => {
    let possibleEndings = ['O', 'X', 'T'];
    let tempArr = [...props.arr];
    let winner_game = props.winner(tempArr);
    if (possibleEndings.includes(winner_game)) {
        return;
    }
    if (value === '') {
        props.setArr(parseInt(props.number), props.player);
        props.onPlay();
        props.player === 'O' ? props.setDisplay("Player 1's turn") : props.setDisplay("Player 2's turn");
        tempArr[parseInt(props.number)] = props.player;
        let winner_game = props.winner(tempArr);
        if (possibleEndings.includes(winner_game)) {
            let scoresArr = [...props.curScores];
            winner_game === 'X' ? alert('Player 1 has won') : (winner_game === 'O' ? alert('Player 2 has won') : alert('The game is tied.'));
            winner_game === 'X' ? scoresArr[0] += 1 : (winner_game === 'O' ? scoresArr[2] += 1 : scoresArr[1] += 1);
            winner_game === 'X' ? props.setDisplay('Player 1 wins') : (winner_game === 'O' ? props.setDisplay('Player 2 wins') : props.setDisplay("It's a tie"));
            props.updateScores(scoresArr);
        }
    }
}

export default Button;