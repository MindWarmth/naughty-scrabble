import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../context';
import './Controls.css';

const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: '11px',
    margin: '0 1px',
  },
}));

function Controls() {
  const classes = useStyles();
  const history = useHistory();
  const { setGameID, setDictionary, setUser } = useContext(Context);

  const handleLeaveClick = () => {
    setGameID(null);
    setDictionary([]);
    setUser(null);
    history.push('/');
  };

  return (
    <div className="controls">
      <Button variant="contained" size="small" color="primary" className={classes.btn}>
        Submit
      </Button>
      <Button variant="contained" size="small" color="secondary" className={classes.btn}>
        Pass
      </Button>
      <Button variant="contained" size="small" className={classes.btn}>
        Reset
      </Button>
      <Button variant="contained" size="small" className={classes.btn}>
        Swap
      </Button>
      <IconButton aria-label="Leave" component="span" size="small" onClick={handleLeaveClick}>
        <MeetingRoomIcon />
      </IconButton>
    </div>
  );
}
export default Controls;
  