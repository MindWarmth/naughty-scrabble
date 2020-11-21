import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";

const Join = () => {
  const { gameID } = useParams();

  return (
    <div>
      <h1>Join to the SRRRABBBLE</h1>
      <code>{gameID}</code>
      <p><Link to={ `/game/${nanoid()}` }>Join</Link></p>
    </div>
  );
}
export default Join;
