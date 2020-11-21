import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Join = () => {
  const { gameID } = useParams();

  return (
    <div>
      <h1>Join to the SRRRABBBLE</h1>
      <code>{gameID}</code>
      <p>
        <Button component={ Link } to={ `/game/${gameID}` } color="primary" variant="contained">Join</Button>
      </p>
    </div>
  );
}
export default Join;
