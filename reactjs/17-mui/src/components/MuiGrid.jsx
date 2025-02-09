import Grid from "@mui/material/Grid2";
import React from "react";

function MuiGrid() {
  //grid 12 parca olur
  return (
    <div>
      <Grid>
        <Grid xs={12} sm={6} md={8} lg={10}>
          item 1
        </Grid>
        <Grid xs={6} sm={3} md={4} lg={5}>
          item 2
        </Grid>
      </Grid>
    </div>
  );
}

export default MuiGrid;
