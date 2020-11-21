import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Context from '../../context';
import { useTransport, TYPE } from '../../helpers/transport-provider';
import './Log.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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
    <div className="log">
      <List
        className={classes.root}
        component="nav"
        aria-label="main mailbox folders"
        subheader={
          <ListSubheader component="div">
            Logs:
          </ListSubheader>
        }
      >
        {logs.map((log, index) => (
          <ListItem key={index}>
            <ListItemText primary={log} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Log;
  