import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

function Skills(): JSX.Element {
  const logos = [
    "chakra",
    "cpanel",
    "git",
    "github",
    "js",
    "material",
    "mysql",
    "next",
    "nodejs",
    "postgres",
    "react",
    "sequelize",
    "firebase",
    "typescript",
  ];
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
      <Box
        position="relative"
        overflow="hidden"
        letterSpacing="4px"
        sx={{
          ml: { xs: 1, sm: 5, md: 20 },
          mr: { xs: 1, sm: 5, md: 20 },
          transition: "0.5s",
          "& span": { position: "absolute", display: "block" },
          "span:nth-of-type(1)": {
            top: 0,
            left: "-100%",
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #03e9f4)",
            animation: "btn-anim1 1s linear infinite;",
          },
          "@keyframes btn-anim1": {
            "0%": {
              left: "-100%",
            },
            "50%, 100%": {
              left: "100%",
            },
          },
          "span:nth-of-type(2)": {
            top: "-100%",
            right: 0,
            width: "2px",
            height: "100%",
            background: "linear-gradient(180deg, transparent, #03e9f4)",
            animation: "btn-anim2 1s linear infinite",
            animationDelay: "0.25s",
          },
          "@keyframes btn-anim2": {
            "0%": {
              top: "-100%",
            },
            "50%, 100%": {
              top: "100%",
            },
          },
          "span:nth-of-type(3)": {
            bottom: 0,
            right: "-100%",
            width: "100%",
            height: "2px",
            background: "linear-gradient(270deg, transparent, #03e9f4)",
            animation: "btn-anim3 1s linear infinite",
            animationDelay: "0.5s",
          },
          "@keyframes btn-anim3": {
            "0%": {
              right: "-100%",
            },
            "50%, 100%": {
              right: "100%",
            },
          },
          "span:nth-of-type(4)": {
            bottom: "-100%",
            left: 0,
            width: "2px",
            height: "100%",
            background: "linear-gradient(360deg, transparent, #03e9f4)",
            animation: "btn-anim4 1s linear infinite",
            animationDelay: "0.75s",
          },
          "@keyframes btn-anim4": {
            "0%": {
              bottom: "-100%",
            },
            "50%, 100%": {
              bottom: "100%",
            },
          },
        }}
        mt={10}
        pt={5}
        pb={5}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Typography
          align="center"
          fontSize="30px"
          sx={{
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
          }}
        >
          Player Select
        </Typography>
        <Grid container justifyContent="center" pt={5} spacing={10}>
          {logos.map((logo, i) => (
            <Grid item key={i}>
              <Box
                component="img"
                sx={{
                  height: 100,
                  width: 100,
                }}
                alt={logo}
                src={`/img/logos/${logo}.png`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
}

export default Skills;
