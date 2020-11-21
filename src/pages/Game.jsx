import { useContext, useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import set from 'lodash/fp/set';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import Controls from '../components/Controls';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const SIZE = 10;

const Game = () => {
  const params = useParams();
  const { gameID, dictionary, setDictionary, user, publicURL } = useContext(Context);
  const [ fieldsData, setFieldsData ] = useState(
    new Array(SIZE).fill(
      new Array(SIZE).fill(null)
    )
  );
  const [ canPlay, setCanPlay ] = useState(true)
  const transport = useTransport();
  const chunksWorker = new Worker(`${publicURL}/workers/chunks.js`);

  useEffect(() => {
    transport.onMessage(({ type, data }) => {
      switch (type) {
        case TYPE.DICTIONARY:
          setDictionary(data)
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

  chunksWorker.onmessage = ({ data }) => {
    console.log('Chunks recived', data);
  }

  return (
    <div>
      <h1>Game ID: <code>{gameID}</code></h1>
      <p>user: <code>{user}</code></p>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 12 } sm={ 8 }>
          <Board fieldsData={fieldsData} onChange={ handleOnBoardChange } canPlay={canPlay}/>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Grid container direction="column" alignItems="stretch">
            <Grid item xs={ 12 }>
              <p>{ canPlay ? 'You turn!' : <small>Wait for the opponent...</small> }</p>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={ 12 }>
                <Log />
              </Grid>
            </Hidden>
            <Grid item xs={ 12 }>
              <Scoreboard />
            </Grid>
            <Grid item xs={ 12 }>
              <Controls />
            </Grid>
          </Grid>
        </Grid>
        {
          dictionary && dictionary.length && (
            <Grid item xs={ 12 }>
              <code>{ dictionary.map((word) => `${word}, `) }</code>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
}

export default Game;
