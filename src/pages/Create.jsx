import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../context';

const useStyles = makeStyles({
  formEl: {
    marginTop: 16,
  },
});

const Create = () => {
  const classes = useStyles();
  const [ text, setText ] = useState('');
  const [ username, setUsername ] = useState('');
  const { setUser, publicURL, setGameID, setDictionary } = useContext(Context);
  const isWindowWorker = Boolean(window.Worker);
  const dictionary = new Worker(`${publicURL}/workers/dictionary.js`);

  const handleOnChangeTextField = ({ currentTarget: { value } }) => setText(value);

  const handleOnChangeUsernameField = ({ currentTarget: { value } }) => setUsername(value);

  const handleOnClickPasteFromClipBoard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText(text);
    } catch (e) {
      console.log('Failed to read clipboard');
    }
  }

  const handleOnClickProceed = () => { 
    setGameID(nanoid());
    if (username) {
      setUser(username);
    }
    if (isWindowWorker) {
      dictionary.postMessage(text);
      dictionary.onmessage = function({ data }) {
        setDictionary(data);
      }
    }
  }

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={ 12 } md={ 6 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <h1>Create a new game</h1>
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              label="Username"
              placeholder="Put your username here"
              fullWidth
              variant="outlined"
              value={ username }
              required={ false }
              onChange={ handleOnChangeUsernameField }
            />
            <TextField
              label="Insert text which will be used as dictionary"
              placeholder="Put text here"
              className={classes.formEl}
              multiline
              rows={ 4 }
              fullWidth
              variant="outlined"
              value={ text }
              required
              onChange={ handleOnChangeTextField }
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.formEl}
              startIcon={<AssignmentIcon />}
              onClick={ handleOnClickPasteFromClipBoard }
            >
              Paste<Hidden xsDown> from clipboard</Hidden>
            </Button>
          </Grid>
          <Grid item xs={ 12 }>
            <Button component={ Link } disabled={!text} onClick={ handleOnClickProceed } to="/invite" color="primary" variant="contained" size="large">
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Create;
