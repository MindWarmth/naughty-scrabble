import { useState, useEffect, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Context from '../context';
import { useTransport } from '../helpers/transport-provider';
import { getUsername } from '../helpers/username';

const Join = () => {
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();
  const { gameID } = useParams();
  const { setGameID, setUser } = useContext(Context);
  const gamePath = `/game/${gameID}`;
  const transport = useTransport();
  const [ username, setUsername ] = useState(getUsername());

  const handleOnChangeUsernameField = ({ currentTarget: { value } }) => setUsername(value);

  const onJoinClick = () => {
    setLoading(true);
    transport.open(gameID).then(() => {
      history.push(gamePath);
    }).catch(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    setUser(username);
  }, [ username ]);

  useEffect(() => {
    setGameID(gameID);
  }, [ gameID ]);

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={ 12 } md={ 6 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <h1>Join to the game</h1>
            <code style={{fontSize: '0.8em'}}>Game ID: {gameID}</code>
          </Grid>
          <Grid item xs={ 12 }>
            <p> Please, enter your name.</p>
            <TextField
              label="Username"
              placeholder="Put your username here"
              fullWidth
              variant="outlined"
              value={ username }
              required={ false }
              onChange={ handleOnChangeUsernameField }
            />
          </Grid>
          <Grid item xs={ 6 }>
            <Button fullWidth
              variant="contained"
              color="primary"
              onClick={ onJoinClick }
              size="large"
              disabled={ loading }
              startIcon={ loading && <CircularProgress size={ 16 } /> }
            >
              Join game
            </Button>
          </Grid>
          <Grid item xs={ 6 } >
            <Button fullWidth component={ Link } to="/create" color="primary" variant="outlined" size="large">
              Create<Hidden xsDown> new game</Hidden>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Join;
