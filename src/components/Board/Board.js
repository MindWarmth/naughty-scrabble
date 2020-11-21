import get from 'lodash/fp/get';
import './Board.scss';

const SIZE = 10;
const rows = new Array(SIZE).fill({});
const cols = new Array(SIZE).fill({});

function Board({ fieldsData, onChange, canPlay }) {

  const handleOnFieldChange = (row, col) => ({ currentTarget: { value } }) => {
    const matchValue = String(value).toUpperCase().match(/([A-Z])/);

    if (matchValue && matchValue.length) {
      onChange({
        row,
        col,
        letter: matchValue[0]
      });
    }
  }

  return (
    <div className="board">
        { rows.map(( rval, rowIndex) => (
          <div className='board__row' key={`row-${rowIndex}`}>
            { cols.map(( cval, colIndex) => {
              const value = get(`${rowIndex}.${colIndex}`, fieldsData);
              return (
                <div className="board__col" key={`col-${colIndex}`}>
                  { canPlay && !value ? 
                    <input className="board__cell" value='' onChange={handleOnFieldChange(rowIndex, colIndex)} /> :
                    <div className="board__cell">{ value }</div>
                  }
                </div>
              )
            } ) }
          </div>
        )) }
    </div>
  );
}

export default Board;
