import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    marginBottom: 16,
    marginTop: 16,
  },
});

function Scoreboard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #1 score:
            </TableCell>
            <TableCell align="right">
              47
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Player #2 score:
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
  