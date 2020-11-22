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
      <h3>There is a real-time peer-to-peer game.</h3>
      <h3>Press the button below to create a new game.</h3>
      <Button style={{maxWidth: 280}} fullWidth component={ Link } to="/create" color="primary" variant="contained" size="large">
        Play
      </Button>
      <p>To join an existing game you need a link.</p>
    </Grid>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={ 12 } >
        <h1 style={{textAlign: 'center'}}>How it works</h1>
        <div className="media">
          <div className="media__inner">
            <iframe title="How it works" width="560" height="315" src="https://www.youtube.com/embed/W0QCAZZyFpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          </div>
        </div>
      </Grid>
    </Grid>
  </Grid>
);

export default Welcome;
