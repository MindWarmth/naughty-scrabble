import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
  const { user } = useContext(Context);
  const transport = useTransport();
  const [ logs, setLogs ] = useState([]);

  useEffect(() => {
    transport.onMessage((message) => {
      switch (message.type) {
        case (TYPE.MESSAGE): {
          setLogs(prevLogs => [message.data, ...prevLogs]);
          break;
        }
        case (TYPE.PLAY):
          setLogs(prevLogs => [`Oponent: ${message.data.previousStep.letter}`, ...prevLogs]);
          break;
        default:
      }
      if (message.type === TYPE.MESSAGE) {
        
      }
    });
    setTimeout(() => {
      transport.sendMessage({
        type: TYPE.MESSAGE,
        data: `${user} joined`,
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
  