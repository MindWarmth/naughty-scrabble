import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AdultsIcon from '../icons/AdultsIcon';
import logo from '../logo.gif';

const Welcome = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
      <img src={logo} className="logo" alt="Naughty Board" />
    </Grid>
    <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
      <h1>Welcome to Naughty Board!</h1>
      <p>Press the button below to create a new game.</p>
      <Button component={ Link } to="/create" color="primary" variant="contained" size="large">
        Create new game
      </Button>
      <p>To join an existed game you need a link.</p>
      <AdultsIcon fill="#E74C3C" width={48} height={48} />
    </Grid>
  </Grid>
);

export default Welcome;
