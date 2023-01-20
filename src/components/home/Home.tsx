import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import AboutMe from "./about/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

function Home(): JSX.Element {
  return (
    <Fragment>
      <Typography
        alignItems="center"
        justifyContent="center"
        display="flex"
        variant="h2"
        pb={5}
        sx={{
          fontSize: { xs: "20px", md: "33px", lg: "66px" },
          pt: { xs: 30 },
          textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
        }}
      >
        Hola, me llamo
      </Typography>
      <Box
        maxWidth="1800px"
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Typography
          alignItems="center"
          justifyContent="center"
          position="absolute"
          display="flex"
          variant="h1"
          overflow="hidden"
          sx={{
            maxHeight: { xs: "35px", md: "60px", lg: "200px" },
            fontSize: { xs: "30px", md: "50px", lg: "100px" },
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
            animation: "glitch-animation 2s infinite linear alternate",
            "&::after": {
              content: "attr(data-text)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              color: "#03e9f4",
              animation: "glitch-animation-child 2s infinite linear alternate",
            },
            "@keyframes glitch-animation": {
              "3%": { textShadow: "7px 7px 0px red" },
              "6%": {
                textShadow: "-9px 4px 0px blue",
                transform: "translate(4px,-10px) skewX(3240deg)",
              },
              "7%": { textShadow: "3px -4px 0px green" },
              "9%": {
                textShadow: "0px 0px 3px white",
                transform: "translate(0px,0px) skewX(0deg)",
              },
              "2% , 54%": { transform: "translateX(0px) skew(0deg)" },
              "55%": { transform: "translate(-2px,6px) skew(-5530deg)" },
              "56%": {
                textShadow: "0px 0px 3px white",
                transform: "translate(0px,0px) skew(0deg)",
              },
              "57%": {
                textShadow: "7px 7px 0px red",
                transform: "translate(4px,-10px) skew(-70deg)",
              },
              "58%": {
                textShadow: "0px 0px 3px white",
                transform: "translate(0px,0px) skew(0deg)",
              },
              "62%": {
                textShadow: "3px -4px 0px green",
                transform: "translate(0px,20px) skew(0deg)",
              },
              "63%": {
                textShadow: "0px 0px 3px white",
                transform: "translate(4px,-2px) skew(0deg)",
              },
              "64%": { transform: "translate(1px,3px); skew(-230deg)" },
              "65%": { transform: "translate(-7px,2px); skew(120deg)" },
              "66%": { transform: "translate(0px,0px) skew(0deg)" },
            },
          }}
        >
          Cuauhtli Herrera
        </Typography>
      </Box>
      <Typography
        fontSize="20px"
        alignItems="center"
        justifyContent="center"
        display="flex"
        variant="h2"
        pt={5}
        sx={{
          fontSize: { xs: "20px", md: "33px", lg: "66px" },
          textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
        }}
      >
        Full Stack Developer
      </Typography>
      <AboutMe />
      <Skills />
      <Projects />
    </Fragment>
  );
}

export default Home;
