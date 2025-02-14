import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MuiAccordion() {
  const [expanded, setExpanded] = useState("" | false);
  const handleChange = (panelName) => (event, expanded) => {
    setExpanded(expanded ? panelName : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Bolum 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima,
          id quod corrupti perferendis numquam aspernatur dignissimos porro
          illum explicabo.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Bolum 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima,
          id quod corrupti perferendis numquam aspernatur dignissimos porro
          illum explicabo.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Bolum 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi minima,
          id quod corrupti perferendis numquam aspernatur dignissimos porro
          illum explicabo.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordion;
