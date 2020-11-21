import { nanoid } from 'nanoid';
import { Link } from "react-router-dom";

const Join = () => (
  <div>
    <p>Join to the SRRRABBBLE</p>
    <Link to={ `/game/${nanoid()}` }>Join</Link>
  </div>
);

export default Join;
