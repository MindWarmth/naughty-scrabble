import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const COPY_STATUS = {
  READY: 'ready',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

const gameID = nanoid();

const Invite = () => {
  const [ copyStatus, setCopyStatus ] = useState(COPY_STATUS.READY);
  const host = 'http://localhost:3000';
  const gamePath = `/game/${gameID}`;
  const gameURL = `${host}${gamePath}`;

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
  
  return (
    <div>
      <p>Share this link with your friend to play the SRRRABBBLE</p>
      <code>{`${gameURL}`}</code>
      {
        navigator.share &&
        <p><IconButton onClick={ handleOnClickShare }><ShareIcon /></IconButton></p>
      }
      {
        navigator.clipboard && 
        <p><IconButton onClick={ handleOnClickCopyToClipboard }>
          {
            copyStatus === COPY_STATUS.READY ? <FileCopyIcon /> :
            copyStatus === COPY_STATUS.SUCCESS ? <DoneIcon /> : <ClearIcon />
          }
        </IconButton></p>
      }
      <p><Link to={ gamePath }>Go to the game</Link></p>
    </div>
  );
};

export default Invite;
