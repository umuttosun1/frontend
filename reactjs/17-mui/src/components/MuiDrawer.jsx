import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";

function MuiDrawer() {
  const [isopen, setIsopen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsopen(true)}>Open</Button>
      <Drawer open={isopen} onClose={() => setIsopen(false)} anchor="right">
        <Box sx={{ width: "300px", textAlign: "center" }}>
          <h1>baslik</h1>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem, ipsum dolor.</p>
        </Box>
      </Drawer>
    </div>
  );
}

export default MuiDrawer;
