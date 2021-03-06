import { useContext, useState, useEffect, useMemo, useRef } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import flow from 'lodash/fp/flow';
import cloneDeep from 'lodash/cloneDeep';
import difference from 'lodash/fp/difference';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Board from '../components/Board';
import Log from '../components/Log';
import Scoreboard from '../components/Scoreboard';
import GameOverDialog from '../components/GameOverDialog';
import ConfirmationDialog from '../components/ConfirmationDialog';
import Context from '../context';
import { useTransport, TYPE } from '../helpers/transport-provider';

const SIZE = 10;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Game = () => {
  const params = useParams();
  const { gameID, setGameID, dictionary, setDictionary, user, setUser, publicURL, setOpponent, message } = useContext(Context);
  const [ fieldsData, setFieldsData ] = useState(
    new Array(SIZE).fill(
      new Array(SIZE).fill(null)
    )
  );
  const [ chunks, setChunks ] = useState();
  const [ canPlay, setCanPlay ] = useState(true);
  const [ score, setScore ] = useState( { mine: 0, opponent: 0 } );
  const transport = useTransport();
  const chunksWorker = new Worker(`${publicURL}/workers/chunks.js`);
  const history = useHistory();
  const [ gameOver, setGameOver ] = useState(false);
  const [ confirmation, setConfirmation ] = useState(false);

  const foundWords = useMemo(() => {
    if (chunks && chunks.data && chunks.list && dictionary) {
      return chunks.list.reduce((acc, chunk) => {

        if (dictionary.includes(chunk)) {
          return {
            data: {
              ...acc.data,
              [chunk]: chunks.data[chunk],
            },
            list: [...acc.list, chunk]
          }
        }

        return acc;
      }, {
        data: {},
        list: []
      })
    }
    return null;
  }, [ chunks, dictionary ]);

  const prevFoundWords = usePrevious(foundWords);

  useEffect(() => {
    if (foundWords) {
      const list = get('list', foundWords) || [];
      const prevList = get('list', prevFoundWords) || [];
      const diffWords = difference(list)(prevList);
      const scoreValue = diffWords.join('').length * diffWords.length;
      if (canPlay) {
        setScore((prevScore) => set('opponent', prevScore.opponent + scoreValue, prevScore));
      } else {
        setScore((prevScore) => set('mine', prevScore.mine + scoreValue, prevScore));
      }
    }
  }, [ foundWords ])

  useEffect(() => {
    if (dictionary.length > 0) {
      transport.sendMessage({
        type: TYPE.DICTIONARY,
        data: dictionary,
      });
    }

    return () => {
      chunksWorker.terminate();
    }
  }, []);

  useEffect(() => {
    if (message) {
      const { type, data } = message;
      switch (type) {
        case TYPE.DICTIONARY:
          setDictionary(data);
          break;
        case TYPE.PLAY:
          setCanPlay(true);
          setFieldsData(data.fieldsData);
          break;
        case (TYPE.LEAVE):
          setGameOver(true);
          break;
        default:
          break;
      }
    }
  }, [ message ]);

  
  useEffect(() => {
    if (fieldsData) {
      chunksWorker.postMessage({ fieldsData, foundWords });
    }
  }, [ fieldsData ]);

  const fieldsDataEnhanced = useMemo(() => {
    let res = cloneDeep(fieldsData);
    if (foundWords && foundWords.list && foundWords.list.length) {
      Object.values(foundWords.data).forEach((curr) => {
        const { type, start, end } = curr;

        switch (type) {
          case 'horizontal':
            const [ row, startCol ] = start;
            const [ , endCol ] = end;

            for (let col = startCol; col <= endCol; col++) {
              if ( col === startCol ) {
                res = set(`${row}.${col}.startHorizontal`, true, res);
              } else if ( col === endCol ) {
                res = set(`${row}.${col}.endHorizontal`, true, res);
              }
              res = flow(
                set(`${row}.${col}.checked`, true),
                set(`${row}.${col}.horizontal`, true)
              )(res);
            }
            break;

          case 'vertical':
            const [ startRow, col ] = start;
            const [ endRow ] = end;

            for (let row = startRow; row <= endRow; row++) {
              if ( row === startRow ) {
                res = set(`${row}.${col}.startVertical`, true, res);
              } else if ( row === endRow ) {
                res = set(`${row}.${col}.endVertical`, true, res);
              }
              res = flow(
                set(`${row}.${col}.checked`, true),
                set(`${row}.${col}.vertical`, true)
              )(res);;
            }
            break;
        
          default:
            break;
        }
      });
      return res;
    }
    return res;
  
  }, [foundWords]);

  if (!gameID && params.gameID) {
    return <Redirect to={`/join/${params.gameID}`} />
  }

  const handleOnBoardChange = ({ row, col, letter }) => {
    const newFieldsData = set(`${row}.${col}.value`, letter, fieldsDataEnhanced || fieldsData);
    
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

  const handleEndGameClick = () => {
    setConfirmation(true);
  };

  const handleGameOverDialogClose = () => {
    history.push('/');
  };

  const handleConfirmationDialogClose = (isConfirmed) => {
    if (isConfirmed) {
      transport.sendMessage({
        type: TYPE.LEAVE,
      });
      setGameID(null);
      setDictionary([]);
      setUser(null);
      setOpponent(null);
      history.push('/');
    } else {
      setConfirmation(false);
    }
  };

  chunksWorker.onmessage = ({ data }) => setChunks(data);

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={ 3 }>
      <Grid item xs={ 12 } sm={ 6 }>
        <Board
          fieldsData={ fieldsDataEnhanced }
          onChange={ handleOnBoardChange }
          canPlay={canPlay}
        />

        <Log canPlay={ canPlay }/>
        
        <Scoreboard score={score} />

        <Button onClick={ handleEndGameClick } color="primary" variant="outlined" fullWidth>
          End game
        </Button>

        <GameOverDialog open={gameOver} onClose={handleGameOverDialogClose} score={score} />

        <ConfirmationDialog open={confirmation} onClose={handleConfirmationDialogClose} score={score}  />

        {
          dictionary && dictionary.length > 0 && (
            <div className="dictionary">
              <h3 className="dictionary__subtitle">Your dictionary:</h3>
              { dictionary.map((word, index) => 
                <Chip key={`dict-${index}`} label={word} disabled={getOr([], 'list', foundWords).includes(word)} />
              ) }
            </div>
          )
        }

      </Grid>      
    </Grid>
  );
}

export default Game;
