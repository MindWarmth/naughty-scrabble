import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const ConfirmationDialog = ({ open, onClose, score: { mine, opponent } }) => {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onClose(true);
  };

  return (
    <Dialog open={ open } onClose={ handleClose }>
      <DialogTitle>
        End game
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to end the game? Current score is { mine }:{ opponent }.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleClose } color="default" variant="contained">
          Cancel
        </Button>
        <Button onClick={ handleConfirm } color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;