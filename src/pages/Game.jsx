import { useContext, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const Game = () => {
  const params = useParams();
  const { gameID, dictionary, setDictionary, user } = useContext(Context);
  const transport = useTransport();

  if (!gameID && params.gameID) {
    return <Redirect to={`/join/${params.gameID}`} />
  }

  const handleMessage = (message) => {
    if (message.type === TYPE.VOCABULARY) {
      setDictionary(message.data);
    }
  }

  useEffect(() => {
    transport.onMessage((handleMessage));
    if (dictionary) {
      transport.sendMessage({
        type: TYPE.VOCABULARY,
        data: dictionary,
      });
    }
  }, []);

  return (
    <div>
      <h1 className="title">Game ID: <code>{gameID}</code>, user: <code>{user}</code></h1>
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
