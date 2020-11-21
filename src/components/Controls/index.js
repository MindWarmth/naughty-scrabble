import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Context from '../../context';
import { useTransport, TYPE } from '../../helpers/transport-provider';

function Controls() {
  const history = useHistory();
  const { setGameID, setDictionary, setUser } = useContext(Context);
  const transport = useTransport();

  const handleLeaveClick = () => {
    transport.sendMessage({
      type: TYPE.LEAVE,
    });
    setGameID(null);
    setDictionary([]);
    setUser(null);
    history.push('/');
  };

  useEffect(() => {
    transport.onMessage((message) => {
      if (message.type === TYPE.LEAVE) {
        setGameID(null);
        setDictionary([]);
        setUser(null);
        history.push('/');
      }
    });
  }, []);

  return (
    <div>
      <IconButton aria-label="Leave" component="span" size="small" onClick={handleLeaveClick}>
        <MeetingRoomIcon />
      </IconButton>
    </div>
  );
}
export default Controls;
  