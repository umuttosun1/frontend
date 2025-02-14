import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import sac from "../image/sac.png";

function MuiCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia sx={{ height: 260 }} image={sac}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sacramento Kings
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem labore iure accusamus ipsum nostrum iste!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MuiCard;
