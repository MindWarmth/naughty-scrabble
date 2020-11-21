import { useContext, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import set from 'lodash/fp/set';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const Game = () => {
  const params = useParams();
  const { gameID, dictionary, setDictionary, user } = useContext(Context);
  const [ fieldsData, setFieldsData ] = useState({});
  const [ canPlay, setCanPlay ] = useState(true)
  const transport = useTransport();

  useEffect(() => {
    transport.onMessage((message) => {
      if (message.type === TYPE.DICTIONARY) {
        setDictionary(message.data);
      }
    });
    if (dictionary) {
      transport.sendMessage({
        type: TYPE.DICTIONARY,
        data: dictionary,
      });
    }
  }, []);

  if (!gameID && params.gameID) {
    return <Redirect to={`/join/${params.gameID}`} />
  }

  const handleOnBoardChange = ({ row, col, letter }) => {
    setCanPlay(false);
    setFieldsData(set(`${row}.${col}`, letter, fieldsData));
  }

  return (
    <div>
      <h1 className="title">Game ID: <code>{gameID}</code>, user: <code>{user}</code></h1>
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
