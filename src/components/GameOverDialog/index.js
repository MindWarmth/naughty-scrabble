import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const GameOverDialog = ({ open, onClose, score: { mine, opponent } }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={ open } onClose={ handleClose }>
      <DialogTitle>
        Game is over
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Your opponent has left a game. Final score is { mine }:{ opponent }.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose } color="default" variant="contained">
          Close
        </Button>
        <Button component={ Link } to="/create" color="primary" variant="contained">
          Create new game
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameOverDialog;