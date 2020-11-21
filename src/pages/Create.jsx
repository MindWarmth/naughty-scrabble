import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FileCopy from '@material-ui/icons/FileCopy';

const Create = () => (
  <div>
    <div>
      <TextField
        label="Text"
        placeholder="Put you text here"
        multiline
        rows={4}
        variant="outlined"
      />
      <IconButton aria-label="copy to clipboard" component="span" color="primary">
        <FileCopy />
      </IconButton>
    </div>
    <Link to="/invite">Proceed</Link>
  </div>
);

export default Create;
