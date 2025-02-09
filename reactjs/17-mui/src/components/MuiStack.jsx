import { Divider, Stack } from "@mui/material";
import React from "react";

function MuiStack() {
  return (
    // stack : displayi flex ve flex directionu column olur
    <div>
      <div>
        {/* <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
        </Stack> */}
      </div>
      <div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Stack>
      </div>
    </div>
  );
}

export default MuiStack;
