import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Welcome = () => (
  <div>
    <h1>Welcome to Naughty Scrabble!</h1>
    <p>Press the button below to create a new game.</p>
    <Button component={ Link } to="/create" color="primary" variant="contained" size="large">
      New game
    </Button>
    <p>To join an existed game you need a link.</p>
  </div>
);

export default Welcome;
