import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Welcome = () => (
  <div>
    <h1>Welcome!</h1>
    <Button component={ Link } to="/create" color="primary" variant="contained">Start game</Button>
  </div>
);

export default Welcome;
