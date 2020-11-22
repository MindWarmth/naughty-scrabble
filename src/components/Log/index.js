import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Context from '../../context';
import { useTransport, TYPE } from '../../helpers/transport-provider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxHeight: 124,
    overflow: 'auto',
  },
}));

const Log = ({ canPlay }) => {
  const classes = useStyles();
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
          setLog(`${opponent} enters ${data.previousStep.letter}. Your turn!`);
          break;
        case (TYPE.LEAVE):
          setLog(`${opponent} left the game`);
          break;
        default:
      }
    }
  }, [ message ]);

  return <div>{ canPlay ? log : 'Waiting for opponent.....'}</div>;
}

export default Log;
  