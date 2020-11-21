import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";

const Invite = () => {
  const gameID = nanoid();
  
  return (
    <div>
      <p>Share this link with your friend to play the SRRRABBBLE</p>
      <code>http://localhost/game/{gameID}</code>
      <p><Link to={ `/game/${gameID}` }>Go to the game</Link></p>
    </div>
  );
};

export default Invite;
