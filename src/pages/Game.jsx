import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const Game = () => {
  const { gameID } = useParams();
  const { vocabulary, setVocabulary, user } = useContext(Context);
  const transport = useTransport();

  const handleMessage = (message) => {
    if (message.type === TYPE.VOCABULARY) {
      setVocabulary(message.data);
    }
  }

  useEffect(() => {
    transport.onMessage(handleMessage);
    if (vocabulary) {
      transport.sendMessage({
        type: TYPE.VOCABULARY,
        data: vocabulary,
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
    </div>
  );
}

export default Game;
