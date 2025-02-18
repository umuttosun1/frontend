import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function MuiDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Soru</DialogTitle>
        <DialogContent>
          <DialogContentText>Umut tosun seviyor musunuz?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hayir</Button>
          <Button onClick={handleClose}>Hayir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MuiDialog;
