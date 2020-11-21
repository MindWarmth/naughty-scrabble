import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useTransport } from '../helpers/transport-provider';

const Join = () => {
  const history = useHistory();
  const { gameID } = useParams();
  const transport = useTransport()

  const onJoinClick = () => {
    transport.join(gameID).then(() => {
      history.push(`/game/${gameID}`);
    });
  }

  return (
    <div>
      <h1>Join to the SRRRABBBLE</h1>
      <code>Game ID: {gameID}</code>
      <p>
        <Button variant="contained" color="primary" onClick={onJoinClick}>Join</Button>
      </p>
    </div>
  );
}

export default Join;
