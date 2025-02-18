import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function MuiAlert() {
  return (
    <div>
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">This is a success Alert.</Alert>
          <Alert severity="info">This is an info Alert.</Alert>
          <Alert severity="warning">This is a warning Alert.</Alert>
          <Alert severity="error">This is an error Alert.</Alert>
        </Stack>
      </div>
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="success">
            This is a filled success Alert.
          </Alert>
          <Alert variant="filled" severity="info">
            This is a filled info Alert.
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a filled warning Alert.
          </Alert>
          <Alert variant="filled" severity="error">
            This is a filled error Alert.
          </Alert>
        </Stack>
      </div>
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="outlined" severity="success">
            This is an outlined success Alert.
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an outlined info Alert.
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an outlined warning Alert.
          </Alert>
          <Alert variant="outlined" severity="error">
            This is an outlined error Alert.
          </Alert>
        </Stack>
      </div>
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="warning" onClose={() => {}}>
            This Alert displays the default close icon.
          </Alert>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This Alert uses a Button component for its action.
          </Alert>
        </Stack>
      </div>
    </div>
  );
}

export default MuiAlert;
