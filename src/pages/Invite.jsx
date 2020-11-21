import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const Invite = () => {
  const gameID = nanoid();
  const gamePath = `/game/${gameID}`;
  const host = 'http://localhost:3000';

  const handleOnClickShare = () => {
    navigator
      .share({
        url: `${host}${gamePath}`,
        title: "SCRABBLE",
        text: "Invite your friend to the game!"
      })
      .then(() => console.log("Invite sent!"))
      .catch(err => console.log(`${err}`));
  }
  
  return (
    <div>
      <p>Share this link with your friend to play the SRRRABBBLE</p>
      <code>{`${host}${gamePath}`}</code>
      {
        navigator.share &&
        <p><IconButton onClick={ handleOnClickShare }><ShareIcon /></IconButton></p>
      }
      <p><Link to={ gamePath }>Go to the game</Link></p>
    </div>
  );
};

export default Invite;
