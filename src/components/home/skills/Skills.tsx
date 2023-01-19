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
        sx={{
          boxShadow: "1px 1px 30px blue",
          ml: { xs: 1, sm: 5, md: 20 },
          mr: { xs: 1, sm: 5, md: 20 },
        }}
        mt={10}
        pt={5}
        pb={5}
      >
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
