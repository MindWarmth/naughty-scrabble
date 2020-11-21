import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';

const Game = () => {
  const params = useParams();
  const { gameID, dictionary } = useContext(Context);

  if (!gameID) {
    console.warn('Implement autojoin from url', params)
  }

  return (
    <div>
      <h1 className="title">Game ID: {gameID}</h1>
      <div className="game">
        <div className="main">
          <Board />
        </div>
        <div className="sidebar">
          <Log />
          <Scoreboard />
          <Controls />
        </div>
      </div>
      {
        dictionary && dictionary.length &&
        <code>{ dictionary.map((word) => `${word}, `) }</code>
      }
    </div>
  );
}

export default Game;
