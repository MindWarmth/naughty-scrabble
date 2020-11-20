import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Controls.css';

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: '0 2px',
  },
}));

function Controls() {
  const classes = useStyles();

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
    </div>
  );
}
export default Controls;
  