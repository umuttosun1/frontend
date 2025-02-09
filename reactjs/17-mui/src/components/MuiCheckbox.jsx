import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function MuiCheckbox() {
  const [isConfirm, setIsConfirm] = useState(false);

  const formConfirm = () => {
    if (isConfirm == true) {
      setIsConfirm(!isConfirm);
    } else alert("formu doldur");
  };
  return (
    // <FormControl component="fieldset">
    //   <FormLabel component="legend">Egitim durumu</FormLabel>
    //   <FormGroup aria-label="position">
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="Ilkokul"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox defaultChecked />}
    //       label="Lise"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="Lisans"
    //       labelPlacement="end"
    //     />
    //     <FormControlLabel
    //       control={<Checkbox />}
    //       label="Onlisans"
    //       labelPlacement="end"
    //     />
    //   </FormGroup>
    // </FormControl>

    <FormControl component="fieldset">
      <FormGroup aria-label="position">
        <FormControlLabel
          control={
            <Checkbox
              checked={isConfirm}
              onChange={(e) => setIsConfirm(e.target.checked)}
            />
          }
          label="Kullanim kosullarini kabul ediyorum"
          labelPlacement="end"
        />
        <Button onClick={formConfirm} variant="contained">
          Formu gonder
        </Button>
      </FormGroup>
    </FormControl>
  );
}

export default MuiCheckbox;
