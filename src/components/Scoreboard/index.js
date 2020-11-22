import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Context from '../../context';

const useStyles = makeStyles({
  table: {
    marginBottom: 16,
    marginTop: 16,
  },
});

function Scoreboard() {
  const classes = useStyles();
  const { user, opponent } = useContext(Context);

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <strong>{user} (me):</strong>
            </TableCell>
            <TableCell align="right">
              <strong>0</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              {opponent}:
            </TableCell>
            <TableCell align="right">
              0
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Scoreboard;
  