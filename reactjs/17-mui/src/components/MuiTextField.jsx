import TextField from "@mui/material/TextField";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

function MuiTextField() {
  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim Outlined" variant="outlined" />
        <TextField label="isim Filled" variant="filled" />
        <TextField label="isim Standard" variant="standard" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="isim Outlined" variant="outlined" color="warning" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="isim"
          variant="outlined"
          color="warning"
          helperText="Isminizi giriniz"
        />
        <TextField
          label="Sifre"
          variant="outlined"
          color="warning"
          helperText="Sifrenizi kimseye gostermeyin"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          label="kimlik no"
          variant="outlined"
          color="warning"
          //   disabled="true"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <TextField label="kimlik no" variant="outlined" size="small" />
        <TextField label="kimlik no" variant="outlined" size="medium" />
      </div>
    </div>
  );
}

export default MuiTextField;
