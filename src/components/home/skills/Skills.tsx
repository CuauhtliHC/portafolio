import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";

function Skills(): JSX.Element {
  return (
    <Fragment>
      <Box pt={5}>
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontSize: { xs: "25px", md: "40px", lg: "80px" },
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
          }}
        >
          Lenguajes y herramientas que domino
        </Typography>
      </Box>
    </Fragment>
  );
}

export default Skills;
