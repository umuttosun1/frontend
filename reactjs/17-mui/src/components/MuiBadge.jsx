import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function MuiBadge() {
  return (
    <div style={{ marginTop: "50px", marginLeft: "50px" }}>
      <Badge
        badgeContent={17}
        color="success"
        max={9}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon color="action" />
      </Badge>
    </div>
  );
}

export default MuiBadge;
