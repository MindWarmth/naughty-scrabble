import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useTransport } from '../../helpers/transport-provider';
import './Log.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function Log() {
  const classes = useStyles();
  const transport = useTransport();
  const [ logs, setLogs ] = useState([]);

  const handleMessage = (message) => {
    setLogs([message].concat(logs.map((x) => x)));
  }

  useEffect(() => {
    transport.onMessage(handleMessage);
    setTimeout(() => {
      transport.sendMessage(`${transport.user} joined`);
    }, 1000)
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
  