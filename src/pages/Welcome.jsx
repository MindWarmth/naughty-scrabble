import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AdultsIcon from '../icons/AdultsIcon';

const Welcome = () => (
  <div>
    <h1>Welcome to Naughty Scrabble!</h1>
    <p>Press the button below to create a new game.</p>
    <Button component={ Link } to="/create" color="primary" variant="contained" size="large">
      Create new game
    </Button>
    <p>To join an existed game you need a link.</p>
    <AdultsIcon fill="#E74C3C" width={48} height={48} />
  </div>
);

export default Welcome;
