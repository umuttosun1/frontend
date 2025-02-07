import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  //   const [country, setCountry] = useState("");
  const [country, setCountry] = useState([]);

  return (
    <div>
      {/* <FormControl sx={{ width: "200px" }}>
        <InputLabel>Ulke</InputLabel>
        <Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <MenuItem value="TR">Turkiye</MenuItem>
          <MenuItem value="SPN">Spain</MenuItem>
          <MenuItem value="USA">U.S.A</MenuItem>
          <MenuItem value="ENG">England</MenuItem>
          <MenuItem value="GE">German</MenuItem>
        </Select>
      </FormControl> */}

      <TextField
        SelectProps={{ multiple: true }}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        sx={{ width: "200px" }}
        label="Ulke"
        select
      >
        <MenuItem value="TR">Turkiye</MenuItem>
        <MenuItem value="SPN">Spain</MenuItem>
        <MenuItem value="USA">U.S.A</MenuItem>
        <MenuItem value="ENG">England</MenuItem>
        <MenuItem value="GE">German</MenuItem>
      </TextField>
    </div>
  );
}

export default MuiSelect;
