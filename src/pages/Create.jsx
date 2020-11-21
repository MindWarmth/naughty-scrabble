import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Context from '../context';

const Create = () => {
  const [ text, setText ] = useState('');
  const { publicURL, setGameID, setDictionary } = useContext(Context);
  const isWindowWorker = Boolean(window.Worker);
  const dictionaryWorker = new Worker(`${publicURL}/workers/dictionary.js`);

  const handleOnChangeTextField = ({currentTarget: {value}}) => setText(value)

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
    if (isWindowWorker) {
      dictionaryWorker.postMessage(text);
      dictionaryWorker.onmessage = ({ data }) => {
        setDictionary(data);
      }
    }
  }

  return (
    <div>
      <h1>Create a new game</h1>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 6 }>
          <TextField
            label="Insert text which will be used as dictionary"
            placeholder="Put you text here"
            multiline
            rows={ 4 }
            fullWidth
            variant="outlined"
            value={ text }
            onChange={ handleOnChangeTextField }
          />
        </Grid>
        <Grid item xs={ 6 }>
          <Button
            variant="contained"
            color="secondary"
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
    </div>
  );
}

export default Create;
