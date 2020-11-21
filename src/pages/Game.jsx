import { useParams } from 'react-router-dom';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';

const Game = () => {
  const { gameID } = useParams();

  return (
    <div>
      <h1>Game ID: {gameID}</h1>
      <div className="main">
        <Board />
      </div>
      <div className="sidebar">
        <Log />
        <Scoreboard />
        <Controls />
      </div>
    </div>
  );
}

export default Game;
