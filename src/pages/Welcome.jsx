import { Link } from "react-router-dom";

const Welcome = () => (
  <div>
    <h1>Welcome!</h1>
    <Link to="/create">Create game</Link>
  </div>
);

export default Welcome;
