import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './pages/Welcome';
import Create from './pages/Create';
import Invite from './pages/Invite';
import Join from './pages/Join';
import Game from './pages/Game';
import './App.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
