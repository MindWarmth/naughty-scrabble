import { useState } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Create = () => {
  const [ text, setText ] = useState('');

  const handleOnChangeTextField = (ev) => {
    console.log(ev);
  }

  const handleOnClickPasteFromClipBoard = () => {
    navigator.clipboard.readText().then((text) => {
      setText(text);
    }).catch((err) => console.log(err));
  }

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
      <Button component={ Link } to="/invite" color="primary" variant="contained">Proceed</Button>
    </div>
  );
}

export default Create;
