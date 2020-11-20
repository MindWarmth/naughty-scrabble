import './Board.css';

const cells = new Array(225).fill({});

function Board() {
  return (
    <div className="board">
        {cells.map((val, index) => (
          <div className="cell" key={index} />
        ))}
    </div>
  );
}

export default Board;
