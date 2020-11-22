import React, { useEffect, useState, useContext } from 'react';
import Context from '../../context';
import { useTransport, TYPE } from '../../helpers/transport-provider';
import './Log.scss'

const Log = ({ canPlay }) => {
  const { user, opponent, setOpponent, message } = useContext(Context);
  const transport = useTransport();
  const [ log, setLog ] = useState('');

  useEffect(() => {
    if (user) {
      transport.sendMessage({
        type: TYPE.WELCOME,
        data: { user },
      });
    }
  }, []);

  useEffect(() => {
    if (message) {
      const { type, data } = message;
      switch (type) {
        case (TYPE.WELCOME): {
          setLog(`${data.user} joined to the game`);
          setOpponent(data.user);
          break;
        }
        case (TYPE.PLAY):
          setLog(`${opponent} puts [${data.previousStep.letter}]. Your turn!`);
          break;
        case (TYPE.LEAVE):
          setLog(`${opponent} left the game`);
          break;
        default:
      }
    }
  }, [ message ]);

  return <div className="log">{ canPlay ? log : `Waiting for ${opponent}.....`}</div>;
}

export default Log;
  