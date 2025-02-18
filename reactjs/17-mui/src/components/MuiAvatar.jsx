import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function MuiAvatar() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="https://randomuser.me/api/portraits/men/60.jpg"
        sx={{ width: "50px", height: "50px" }}
      />
      <Avatar
        alt="Travis Howard"
        src="https://randomuser.me/api/portraits/women/32.jpg"
        sx={{ width: "50px", height: "50px" }}
      />
      <Avatar
        alt="Cindy Baker"
        src="https://randomuser.me/api/portraits/men/74.jpg"
        sx={{ width: "50px", height: "50px" }}
      />
      <Avatar sx={{ bgcolor: "red", width: "50px", height: "50px" }}>U</Avatar>
    </Stack>
  );
}

export default MuiAvatar;
