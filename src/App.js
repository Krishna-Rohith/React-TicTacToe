import { useState } from 'react'
import Block from './Block';
import Scorecard from './Scorecard';
import Helper from './Helper';

function App() {

  let [player, setPlayer] = useState('X');

  const changePlayer = () => player === 'X' ? setPlayer('O') : setPlayer('X');

  let [Arr, setArrState] = useState(Array(9).fill(''));

  let [scores, setScores] = useState([0, 0, 0]);

  let [curDisplay, setDisplay] = useState("Player 1's turn");

  const arraySetter = (i, val) => {
    let temp = [...Arr];
    temp[i] = val;
    setArrState(temp);
  }

  return (
    <div className="container">
      <header id="titlebar" className="unselectable">TIC-TAC-TOE</header>
      <Block player={player} changePlayer={changePlayer} resetArr={setArrState} setArr={arraySetter} arr={Arr} winner={calculateWinner} curScores={scores} updateScores={setScores} setDisplay={setDisplay} />
      <Scorecard scores={scores} />
      <Helper player={player} onResetGame={setArrState} onResetGamePlayer={setPlayer} onResetScore={setScores} arr={Arr} curDisplay={curDisplay} setDisplay={setDisplay} />
    </div>
  );
}

const calculateWinner = (arr) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let temp = undefined;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if ((arr[a] || arr[a] === '') && arr[b] === arr[c] && arr[b] === arr[a])
      temp = arr[a];
  }
  if (temp === 'X' || temp === 'O')
    return temp;
  else if (temp === '')
    return false;
  else if (temp === undefined && arr.some(item => item === ''))
    return null;
  else
    return 'T';
}

export default App;
