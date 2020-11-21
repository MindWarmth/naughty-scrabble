import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Scoreboard() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #1 last score:
            </TableCell>
            <TableCell align="right">
              5
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #1 total score:
            </TableCell>
            <TableCell align="right">
              47
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #2 last score:
            </TableCell>
            <TableCell align="right">
              2
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #2 total score:
            </TableCell>
            <TableCell align="right">
              54
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Scoreboard;
  