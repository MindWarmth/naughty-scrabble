import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgress from '@material-ui/core/CircularProgress';
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
  const host = 'http://localhost:3000';
  const gamePath = `/game/${gameID}`;
  const gameURL = `${host}/join/${gameID}`;
  const transport = useTransport();
  const history = useHistory();

  const handleOnClickShare = () => {
    navigator
      .share({
        url: `${gameURL}`,
        title: "SCRABBLE",
        text: "Invite your friend to the game!"
      })
      .then(() => console.log("Invite sent!"))
      .catch(err => console.log(`${err}`));
  }

  const handleOnClickCopyToClipboard = () =>
    copyStatus === COPY_STATUS.READY && navigator.clipboard.writeText(gameURL)
      .then(() => setCopyStatus(COPY_STATUS.SUCCESS))
      .catch(() => setCopyStatus(COPY_STATUS.FAILURE));
  
  const onGoClick = () => {
    setLoading(true);
    transport.open(gameID).then(() => {
      history.push(gamePath);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }
  
  return (
    <div>
      <p>Share this link with your friend to play the SRRRABBBLE:</p>
      <code>{`${gameURL}`}</code>
      {
        navigator.share &&
        <p><IconButton onClick={ handleOnClickShare }><ShareIcon /></IconButton></p>
      }
      {
        navigator.clipboard && 
        <p><IconButton onClick={ handleOnClickCopyToClipboard } aria-label="paste from clipboard" component="span" >
          {
            copyStatus === COPY_STATUS.READY ? <FileCopyIcon /> :
            copyStatus === COPY_STATUS.SUCCESS ? <DoneIcon /> : <ClearIcon />
          }
        </IconButton></p>
      }
      <p>
        <Button color="primary" variant="contained" onClick={onGoClick} disabled={loading}>Proceed to game</Button>
      </p>
      {loading && <>Waiting for peer: <CircularProgress size={24} /></>}
    </div>
  );
};

export default Invite;
