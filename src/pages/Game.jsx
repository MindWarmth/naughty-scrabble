import { useContext, useState, useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import set from 'lodash/fp/set';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const SIZE = 10;

const Game = () => {
  const params = useParams();
  const { gameID, setGameID, dictionary, setDictionary, user, setUser, publicURL, setOpponent } = useContext(Context);
  const [ fieldsData, setFieldsData ] = useState(
    new Array(SIZE).fill(
      new Array(SIZE).fill(null)
    )
  );
  const [ canPlay, setCanPlay ] = useState(true)
  const transport = useTransport();
  const chunksWorker = new Worker(`${publicURL}/workers/chunks.js`);
  const history = useHistory();

  useEffect(() => {
    transport.onMessage(({ type, data }) => {
      switch (type) {
        case TYPE.DICTIONARY:
          setDictionary(data);
          break;
        case TYPE.PLAY:
          setCanPlay(true);
          setFieldsData(data.fieldsData);
          break;      
        default:
          break;
      }
    });

    if (dictionary) {
      transport.sendMessage({
        type: TYPE.DICTIONARY,
        data: dictionary,
      });
    };
  }, []);

  useEffect(() => {
    if (fieldsData) {
      chunksWorker.postMessage({ fieldsData });
    }
  }, [ fieldsData ]);

  if (!gameID && params.gameID) {
    return <Redirect to={`/join/${params.gameID}`} />
  }

  const handleOnBoardChange = ({ row, col, letter }) => {
    const newFieldsData = set(`${row}.${col}`, letter, fieldsData);
    
    setCanPlay(false);
    setFieldsData(newFieldsData);

    transport.sendMessage({
      type: TYPE.PLAY,
      data: {
        previousStep: { row, col, letter },
        fieldsData: newFieldsData
      }
    });
  }

  const handleLeaveClick = () => {
    transport.sendMessage({
      type: TYPE.LEAVE,
    });
    setGameID(null);
    setDictionary([]);
    setUser(null);
    setOpponent(null);
    history.push('/');
  };

  chunksWorker.onmessage = ({ data }) => {
    console.log('Chunks recived', data);
  }

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={ 3 }>
      <Grid item xs={ 12 } md={ 10 }>
        <h1>Game ID: <code>{gameID}</code></h1>
        <p>user: <code>{user}</code></p>
      </Grid>
      <Grid item xs={ 12 } sm={ 6 }>
        <Board fieldsData={fieldsData} onChange={ handleOnBoardChange } canPlay={canPlay}/>
      </Grid>
      <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
        <Grid container direction="column" alignItems="stretch">
          <Grid item xs={ 12 }>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                { canPlay ? 'You turn!' : <small>Wait for the opponent...</small> }
              </Grid>
              <Grid item>
              <IconButton aria-label="Leave" component="span" size="small" onClick={ handleLeaveClick }>
                <ExitToAppIcon />
              </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={ 12 }>
              <Log />
            </Grid>
          </Hidden>
          <Grid item xs={ 12 }>
            <Scoreboard />
          </Grid>
        </Grid>
      </Grid>
      {
        dictionary && dictionary.length > 0 && (
          <Grid item xs={ 12 } md={ 10 }>
            <code>{ dictionary.map((word) => `${word}, `) }</code>
          </Grid>
        )
      }
    </Grid>
  );
}

export default Game;
