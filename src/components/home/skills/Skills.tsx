import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

function Skills(): JSX.Element {
  const skillsAndTools = [
    { logo: "chakra", name: "Chakra-UI" },
    { logo: "cpanel", name: "WHM/Cpanel" },
    { logo: "git", name: "Git" },
    { logo: "github", name: "GitHub" },
    { logo: "js", name: "JS" },
    { logo: "material", name: "Material-UI" },
    { logo: "mysql", name: "MySQL" },
    { logo: "next", name: "Nextjs" },
    { logo: "nodejs", name: "Nodejs" },
    { logo: "postgres", name: "Postgresql" },
    { logo: "react", name: "React" },
    { logo: "sequelize", name: "Sequelize" },
    { logo: "firebase", name: "Firebase" },
    { logo: "typescript", name: "Typescript" },
  ];
  return (
    <Fragment>
      <Box pt={5} component="section" id="skills">
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
        mt={10}
        pt={5}
        pb={5}
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
            animation: "btn-anim1 2s linear infinite;",
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
            animation: "btn-anim2 2s linear infinite",
            animationDelay: "0.5s",
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
            animation: "btn-anim3 2s linear infinite",
            animationDelay: "1s",
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
            animation: "btn-anim4 2s linear infinite",
            animationDelay: "1.5s",
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
            animation: "blink-start 1.5s infinite step-end",
            "@keyframes blink-start": {
              "0%": {
                opacity: "0",
              },
              "50%": {
                opacity: 1,
              },
            },
          }}
        >
          Player Select
        </Typography>
        <Grid container justifyContent="center" pt={5} spacing={10}>
          {skillsAndTools.map(
            (skill, i): JSX.Element => (
              <Grid item key={i}>
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 100,
                    animation: "jump 2s ease-in-out infinite alternate",
                    "@keyframes jump": {
                      "0%": {
                        transform: "translateY(0)",
                      },
                      "100%": {
                        transform: "translateY(-30%)",
                      },
                    },
                  }}
                  alt={skill.logo}
                  src={`/img/logos/${skill.logo}.png`}
                />
                <Typography
                  align="center"
                  sx={{
                    textShadow:
                      ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
                  }}
                >
                  {skill.name}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Fragment>
  );
}

export default Skills;
