import Board from './components/Board';
import Scoreboard from './components/Scoreboard';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Board />
      </div>
      <div className="sidebar">
        <Scoreboard />
        <Controls />
      </div>
    </div>
  );
}

export default App;
