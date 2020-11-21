import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Welcome from './pages/Welcome';
import Create from './pages/Create';
import Invite from './pages/Invite';
import Join from './pages/Join';
import Game from './pages/Game';
import TransportProvider from './helpers/transport-provider';
import './App.css';

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
  const WEB_SOCKET_URL = 'ws://88.99.175.232:8054';

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TransportProvider url={WEB_SOCKET_URL}>
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
        </TransportProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
