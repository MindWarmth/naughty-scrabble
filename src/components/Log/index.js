import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import './Log.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function Log() {
  const classes = useStyles();

  return (
    <div className="log">
      <List
        className={classes.root}
        component="nav"
        aria-label="main mailbox folders"
        subheader={
          <ListSubheader component="div">
            Latest words
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="tree" />
        </ListItem>
        <ListItem>
          <ListItemText primary="awesome" />
        </ListItem>
        <ListItem>
          <ListItemText primary="yes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="space" />
        </ListItem>
        <ListItem>
          <ListItemText primary="naughty" />
        </ListItem>
        <ListItem>
          <ListItemText primary="scramble" />
        </ListItem>
      </List>
    </div>
  );
}

export default Log;
  