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
  return (
    <Router>
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
    </Router>
  );
}

export default App;
