import { useHistory, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Button from '@material-ui/core/Button';
import { useTransport } from '../helpers/transport-provider';

const Join = () => {
  const history = useHistory();
  const { gameID } = useParams();
  const transport = useTransport()

  function onJoinClick() {
    transport.open(gameID).then(() => {
      history.push(`/game/${nanoid()}`);
    });
  }

  return (
    <div>
      <h1>Join to the SRRRABBBLE</h1>
      <code>Game ID: {gameID}</code>
      <p>
        <Button variant="contained" color="primary" onClick={onJoinClick}>
          Join
        </Button>
      </p>
    </div>
  );
}
export default Join;
