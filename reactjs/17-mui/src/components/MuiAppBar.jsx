import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Stack } from "@mui/material";

function MuiAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const openControl = anchorEl ? true : false;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon sx={{ color: "white" }}></MenuIcon>
        </IconButton>
        <Typography variant="h5">umut</Typography>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }} onClick={openMenu}>
            Urunler
          </Button>
          <Button sx={{ color: "white" }}>Iletisim</Button>
          <Button sx={{ color: "white" }}>Hakkimizda</Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
          <MenuItem>Tshirt</MenuItem>
          <MenuItem>Sleeve</MenuItem>
          <MenuItem>Ball</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiAppBar;
