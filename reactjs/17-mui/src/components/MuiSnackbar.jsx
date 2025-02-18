import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function MuiSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="info" size="small" onClick={handleClose}>
        Kapat
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <div>
      <Button onClick={handleClick}>Open Snacksbar</Button>
      <Snackbar
        open={open}
        message="merhaba"
        action={action}
        autoHideDuration={3000}
        onClose={handleClose}
      ></Snackbar>
    </div>
  );
}

export default MuiSnackbar;
