import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from '../logo.gif';

const Welcome = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
      <img src={logo} className="logo" alt="Naughty Board" />
    </Grid>
    <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
      <h1>Welcome<br/>to the Naughty Board!</h1>
      <h2>Press the button below to create a new game.</h2>
      <Button style={{maxWidth: 280}} fullWidth component={ Link } to="/create" color="primary" variant="contained" size="large">
        Play
      </Button>
      <p>To join an existed game you need a link.</p>
    </Grid>
  </Grid>
);

export default Welcome;
