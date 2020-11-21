import { useContext, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import set from 'lodash/fp/set';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';

const Game = () => {
  const params = useParams();
  const { gameID, dictionary } = useContext(Context);
  const [ fieldsData, setFieldsData ] = useState({});
  const [ canPlay, setCanPlay ] = useState(true)

  if (!gameID && params.gameID) {
    return <Redirect to={`/join/${params.gameID}`} />
  }

  const handleOnBoardChange = ({ row, col, letter }) => {
    setCanPlay(false);
    setFieldsData(set(`${row}.${col}`, letter, fieldsData));
  }

  return (
    <div>
      <h1 className="title">Game ID: {gameID}</h1>
      <div className="game">
        <div className="main">
          <Board fieldsData={fieldsData} onChange={ handleOnBoardChange } canPlay={canPlay}/>
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
