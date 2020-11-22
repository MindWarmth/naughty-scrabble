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

function Log() {
  const classes = useStyles();
  const { user, opponent, setOpponent, message } = useContext(Context);
  const transport = useTransport();
  const [ logs, setLogs ] = useState([]);

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
          setLogs(prevLogs => [`${data.user} joined to the game`, ...prevLogs]);
          setOpponent(data.user);
          break;
        }
        case (TYPE.PLAY):
          setLogs(prevLogs => [`${opponent}: ${data.previousStep.letter}`, ...prevLogs]);
          break;
        case (TYPE.LEAVE):
          setLogs(prevLogs => [`${opponent} left the game`, ...prevLogs]);
          break;
        default:
      }
    }
  }, [ message ]);

  return (
    <List className={classes.root} component="nav" dense>
      {logs.map((log, index) => (
        <ListItem key={index}>
          <ListItemText primary={log} />
        </ListItem>
      ))}
    </List>
  );
}

export default Log;
  