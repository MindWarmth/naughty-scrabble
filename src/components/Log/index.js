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
    maxHeight: 120,
    overflow: 'auto',
  },
}));

function Log() {
  const classes = useStyles();
  const { user, setOpponent } = useContext(Context);
  const transport = useTransport();
  const [ logs, setLogs ] = useState([]);

  useEffect(() => {
    transport.onMessage((message) => {
      switch (message.type) {
        case (TYPE.WELCOME): {
          setLogs(prevLogs => [`Opponent ${message.data.user} joined.`, ...prevLogs]);
          setOpponent(message.data.user);
          break;
        }
        case (TYPE.PLAY):
          setLogs(prevLogs => [`Opponent: ${message.data.previousStep.letter}.`, ...prevLogs]);
          break;
        case (TYPE.LEAVE):
          setLogs(prevLogs => ['Opponent left the game.', ...prevLogs]);
          break;
        default:
      }
    });
    setTimeout(() => {
      transport.sendMessage({
        type: TYPE.WELCOME,
        data: { user },
      });
    }, 1000);
  }, []);

  return (
    <List
      className={classes.root}
      component="nav"
    >
      {logs.map((log, index) => (
        <ListItem key={index}>
          <ListItemText primary={log} />
        </ListItem>
      ))}
    </List>
  );
}

export default Log;
  