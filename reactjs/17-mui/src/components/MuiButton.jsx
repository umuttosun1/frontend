import { Button } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function MuiButton() {
  return (
    <div>
      <div style={{ marginBottom: "50px" }}>
        <Button variant="text">kaydol text</Button>
        <Button variant="outlined">kaydol outlined</Button>
        <Button variant="contained">kaydol contained</Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button color="primary">Giris yap</Button>
        <Button color="error">Giris yap</Button>
        <Button color="info">Giris yap</Button>
        <Button color="secondary">Giris yap</Button>
        <Button color="success" variant="contained">
          Giris yap
        </Button>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Button size="small" variant="contained" color="inherit">
          Geri don
        </Button>
        <Button size="medium" variant="contained" color="inherit">
          Geri don
        </Button>
        <Button size="large" variant="contained" color="inherit">
          Geri don
        </Button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<AddCircleIcon />}
        >
          Ekle
        </Button>
      </div>
    </div>
  );
}

export default MuiButton;
