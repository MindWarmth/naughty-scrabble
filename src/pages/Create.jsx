import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../context';
import { getUsername } from '../helpers/username';

const useStyles = makeStyles({
  formEl: {
    marginTop: 16,
  },
});
const LOCALSTORAGE_DICTIONARY_KEY = 'dictionary';
const DEFAULT_TEXT = 'THE INTERNET GLOBAL SYSTEM COMPUTER NETWORKS THAT USES PROTOCOL SUITE TCP BETWEEN AND DEVICES NETWORK CONSISTS PRIVATE PUBLIC ACADEMIC BUSINESS GOVERNMENT LOCAL SCOPE LINKED BROAD ARRAY ELECTRONIC WIRELESS OPTICAL NETWORKING CARRIES VAST RANGE RESOURCES SERVICES SUCH INTER HYPERTEXT DOCUMENTS WORLD WIDE WEB WWW MAIL TELEPHONY FILE SHARING ORIGINS DATE BACK PACKET SWITCHING RESEARCH UNITED STATES DEPARTMENT DEFENSE ENABLE TIME COMPUTERS PRIMARY PRECURSOR ARPANET INITIALLY SERVED BACKBONE FOR REGIONAL MILITARY FUNDING NATIONAL SCIENCE FOUNDATION NEW WELL OTHER COMMERCIAL EXTENSIONS LED WORLDWIDE MERGER MANY LINKING EARLY MARKED BEGINNING TRANSITION MODERN GENERATED SUSTAINED GROWTH PERSONAL MOBILE WERE CONNECTED ALTHOUGH WAS WIDELY USED ACADEMIA ITS INTO VIRTUALLY EVERY ASPECT LIFE MOST MEDIA INCLUDING RADIO TELEVISION PAPER NEWSPAPERS ARE RESHAPED REDEFINED EVEN BYPASSED GIVING BIRTH EMAIL ONLINE MUSIC DIGITAL VIDEO STREAMING WEBSITES NEWSPAPER BOOK PRINT PUBLISHING ADAPTING WEBSITE TECHNOLOGY BLOGGING FEEDS NEWS HAS ENABLED FORMS THROUGH INSTANT MESSAGING FORUMS SOCIAL SHOPPING GROWN MAJOR RETAILERS SMALL BUSINESSES ENABLES FIRMS EXTEND THEIR BRICK MORTAR PRESENCE SERVE LARGER MARKET SELL GOODS ENTIRELY FINANCIAL AFFECT SUPPLY CHAINS ACROSS ENTIRE INDUSTRIES SINGLE GOVERNANCE EITHER POLICIES ACCESS USAGE EACH SETS OWN TWO PRINCIPAL NAME SPACES ADDRESS SPACE DOMAIN DNS DIRECTED MAINTAINER ASSIGNED NAMES NUMBERS ICANN TECHNICAL CORE PROTOCOLS ACTIVITY TASK FORCE IETF NON PROFIT LOOSELY AFFILIATED ANYONE MAY ASSOCIATE WITH EXPERTISE NOVEMBER INCLUDED USA TODAY LIST SEVEN WONDERS';


const Create = () => {
  const classes = useStyles();
  const [ text, setText ] = useState(localStorage.getItem(LOCALSTORAGE_DICTIONARY_KEY) || '');
  const [ username, setUsername ] = useState(getUsername());
  const {
    publicURL,
    gameID, setGameID,
    dictionary, setDictionary,
    user, setUser,
    opponent, setOpponent,
    message, setMessage,
  } = useContext(Context);
  const isWindowWorker = Boolean(window.Worker);
  const dictionaryWorker = new Worker(`${publicURL}/workers/dictionary.js`);

  const handleOnChangeTextField = ({ currentTarget: { value } }) => setText(value);

  const handleOnChangeUsernameField = ({ currentTarget: { value } }) => setUsername(value);

  const handleOnClickPasteFromClipBoard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText(text);
    } catch (e) {
      console.log('Failed to read clipboard');
    }
  }

  const handleOnClickProceed = () => { 
    setGameID(nanoid());
    if (username) {
      setUser(username);
    }
    if (isWindowWorker) {
      dictionaryWorker.postMessage(text);
      dictionaryWorker.onmessage = ({ data }) => {
        setDictionary(data);
        localStorage.setItem(LOCALSTORAGE_DICTIONARY_KEY, data);
      }
    }
  }

  const handleOnClickSetDefaultText = () => setText(DEFAULT_TEXT);

  useEffect(() => {
    if (gameID) { setGameID(null); }
    if (dictionary.length > 0) { setDictionary([]); }
    if (user) { setUser(null); }
    if (opponent) { setOpponent(null); }
    if (message) { setMessage(null); }
  }, []);

  return (
    <Grid container direction="row" justify="center">
      <Grid item xs={ 12 } md={ 6 }>
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
            <h1>Create a new game</h1>
          </Grid>
          <Grid item xs={ 12 }>
            <p> Please, enter your name.</p>
            <TextField
              label="Username"
              placeholder="Put your username here"
              fullWidth
              variant="outlined"
              value={ username }
              required={ false }
              onChange={ handleOnChangeUsernameField }
            />
            <p style={{marginTop: 40}}>Insert any english text here which will be used as dictionary for the game.</p>
            <TextField
              label="Dictionary"
              placeholder="Put text here"
              className={classes.formEl}
              multiline
              rows={ 4 }
              fullWidth
              variant="outlined"
              value={ text }
              required
              onChange={ handleOnChangeTextField }
            />
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.formEl}
              startIcon={<AssignmentIcon />}
              onClick={ handleOnClickPasteFromClipBoard }
            >
              Paste from Clipboard
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.formEl}
              onClick={ handleOnClickSetDefaultText }
            >
              Use default text
            </Button>
          </Grid>
          <Grid item xs={ 12 }>
            <Button 
              fullWidth
              component={ Link } 
              disabled={!text} 
              onClick={ handleOnClickProceed } 
              to="/invite"
              color="primary"
              variant="contained"
              size="large"
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Create;
