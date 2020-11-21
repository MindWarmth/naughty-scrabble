import { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Context from '../context';
import { useTransport } from '../helpers/transport-provider';

const Join = () => {
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();
  const { gameID } = useParams();
  const { setGameID } = useContext(Context);
  const gamePath = `/game/${gameID}`;
  const transport = useTransport();

  const onJoinClick = () => {
    setLoading(true);
    transport.open(gameID).then(() => {
      history.push(gamePath);
    }).catch(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    setGameID(gameID);
  }, [ gameID ]);

  return (
    <div>
      <h1>Join to the SRRRABBBLE</h1>
      <code>Game ID: {gameID}</code>
      <p>
        <Button variant="contained" color="primary" onClick={onJoinClick} size="large" disabled={loading}>
          Join
        </Button>
      </p>
      {loading && <>Joining: <CircularProgress size={24} /></>}
    </div>
  );
}

export default Join;
