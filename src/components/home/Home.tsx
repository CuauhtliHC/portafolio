import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import AboutMe from "./about/AboutMe";
import Skills from "./skills/Skills";

function Home(): JSX.Element {
  return (
    <Fragment>
      <Typography
        alignItems="center"
        justifyContent="center"
        display="flex"
        variant="h2"
        sx={{
          fontSize: { xs: "20px", md: "33px", lg: "66px" },
          pt: { xs: 30 },
          textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
        }}
      >
        Hola, me llamo
      </Typography>
      <Typography
        alignItems="center"
        justifyContent="center"
        display="flex"
        variant="h1"
        sx={{
          fontSize: { xs: "30px", md: "50px", lg: "100px" },
          textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
        }}
      >
        Cuauhtli Herrera
      </Typography>
      <Typography
        fontSize="20px"
        alignItems="center"
        justifyContent="center"
        display="flex"
        variant="h2"
        sx={{
          fontSize: { xs: "20px", md: "33px", lg: "66px" },
          textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
        }}
      >
        Full Stack Developer
      </Typography>
      <AboutMe />
      <Skills />
    </Fragment>
  );
}

export default Home;
