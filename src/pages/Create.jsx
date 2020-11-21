import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Context from '../context';

const Create = () => {
  const [ text, setText ] = useState('');
  const { setGameID } = useContext(Context);

  const handleOnChangeTextField = (ev) => {
    console.log(ev);
  }

  const handleOnClickPasteFromClipBoard = () => {
    navigator.clipboard.readText().then((text) => {
      setText(text);
    }).catch((err) => console.log(err));
  }

  const handleOnClickProceed = () => setGameID(nanoid());

  return (
    <div>
      <div>
        <TextField
          label="Text"
          placeholder="Put you text here"
          multiline
          rows={ 4 }
          variant="outlined"
          value={ text }
          onChange={ handleOnChangeTextField }
        />
        <IconButton
          onClick={ handleOnClickPasteFromClipBoard }
          aria-label="paste from clipboard"
          component="span"
          color="primary"
        >
          <AssignmentIcon />
        </IconButton>
      </div>
      <Button component={ Link } onClick={ handleOnClickProceed } to="/invite" color="primary" variant="contained">Proceed</Button>
    </div>
  );
}

export default Create;
