import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";

function Projects(): JSX.Element {
  return (
    <Fragment>
      <Box pt={5}>
        <Typography
          align="center"
          variant="h2"
          sx={{
            fontSize: { xs: "25px", md: "40px", lg: "80px" },
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
          }}
        >
          Proyectos
        </Typography>
        <Carousel />
      </Box>
    </Fragment>
  );
}

export default Projects;
