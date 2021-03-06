import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Context from './context';
import Welcome from './pages/Welcome';
import Create from './pages/Create';
import Invite from './pages/Invite';
import Join from './pages/Join';
import Game from './pages/Game';
import TransportProvider from './helpers/transport-provider';
import './App.scss';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    }
  });
  const [ gameID, setGameID ] = useState();
  const [ dictionary, setDictionary ] = useState([]);
  const [ user, setUser ] = useState();
  const [ opponent, setOpponent ] = useState();
  const [ message, setMessage ] = useState();
  const WEB_SOCKET_URL = 'wss://ice-server.app.html.wtf';

  return (
    <Router>
      <Context.Provider value={{ 
        publicURL: window.publicURL || '', 
        gameID, setGameID, 
        dictionary, setDictionary, 
        user, setUser,
        opponent, setOpponent,
        message, setMessage,
      }}>
        <TransportProvider url={WEB_SOCKET_URL}>
          <ThemeProvider theme={theme}>
            <div className="app">
              <Switch>

                <Route path="/create">
                  <Create />
                </Route>

                <Route path="/invite">
                  <Invite />
                </Route>

                <Route path="/join/:gameID">
                  <Join />
                </Route>

                <Route path="/game/:gameID">
                  <Game />
                </Route>
              
                <Route path="/">
                  <Welcome />
                </Route>

              </Switch>        
            </div>
          </ThemeProvider>
        </TransportProvider>
      </Context.Provider>
    </Router>
  );
}

export default App;
