import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

function MuiTooltip() {
  return (
    <div style={{ margin: "200px" }}>
      <Tooltip title="silmek icin tiklayiniz" placement="top">
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default MuiTooltip;
