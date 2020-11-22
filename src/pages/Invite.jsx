import { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Context from '../context';
import { useTransport } from '../helpers/transport-provider';

const COPY_STATUS = {
  READY: 'ready',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

const Invite = () => {
  const [ copyStatus, setCopyStatus ] = useState(COPY_STATUS.READY);
  const [ loading, setLoading ] = useState(false);
  const { gameID } = useContext(Context);
  const transport = useTransport();
  const history = useHistory();

  const baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}#`;
  const gameURL = `${baseUrl}/join/${gameID}`;
  const gamePath = `/game/${gameID}`;

  const handleOnClickShare = () => {
    navigator
      .share({
        url: `${gameURL}`,
        title: "Naughty Board",
        text: "Invite your friend to the game!"
      })
      .then(() => console.log("Invite sent!"))
      .catch(err => console.log(`${err}`));
  }

  const handleOnClickCopyToClipboard = () => {
    if (copyStatus === COPY_STATUS.READY) {
      try {
        navigator.clipboard.writeText(gameURL)
          .then(() => setCopyStatus(COPY_STATUS.SUCCESS))
          .catch(() => setCopyStatus(COPY_STATUS.FAILURE));
      } catch (e) {
        console.log('Failed to write to clipboard');
      }
    }
  }
  
  const onJoinClick = () => {
    setLoading(true);
    transport.open(gameID).then(() => {
      history.push(gamePath);
    }).catch(() => {
      setLoading(false);
    });
  }
  
  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={ 12 } md={ 6 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <h1>Share link</h1>
            <p>Share this link with your friend to play together:</p>
            <code>{`${gameURL}`}</code>
          </Grid>
          <Grid item xs={ 12 }>
            <Grid container>
              {
                navigator.clipboard && (
                  <Grid item xs={ 6 }>
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={ handleOnClickCopyToClipboard }
                      size="large"
                      startIcon={copyStatus === COPY_STATUS.READY ? <FileCopyIcon /> : copyStatus === COPY_STATUS.SUCCESS ? <DoneIcon /> : <ClearIcon />}
                    >
                      Copy<Hidden xsDown> to cliboard</Hidden>
                    </Button>
                  </Grid>
                )
              }
              {
                navigator.share && (
                  <Grid item xs={ 6 }>
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={ handleOnClickShare }
                      size="large"
                      startIcon={<ShareIcon />}
                    >
                      Share
                    </Button>
                  </Grid>
                )
              }
            </Grid>
          </Grid>
          <Grid item xs={ 6 }>
            <Button
              color="primary"
              variant="contained"
              onClick={ onJoinClick }
              disabled={ loading }
              size="large"
              startIcon={ loading && <CircularProgress size={ 16 } /> }
            >
              Start<Hidden xsDown> game</Hidden>
            </Button>
          </Grid>
          <Grid item xs={ 6 }>
            <Button component={ Link } to="/create" color="primary" variant="outlined" size="large">
              <Hidden xsDown>Create new game</Hidden>
              <Hidden smUp>Create</Hidden>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Invite;
