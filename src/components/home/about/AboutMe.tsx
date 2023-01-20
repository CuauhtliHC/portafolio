import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";

function AboutMe(): JSX.Element {
  return (
    <Fragment>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        sx={{ pt: { xs: 40 } }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "25px", md: "40px", lg: "80px" },
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
          }}
        >
          Sobre mi
        </Typography>
      </Box>
      <Box alignItems="center" justifyContent="center" display="flex">
        <Box
          pt={5}
          pb={5}
          pl={5}
          pr={5}
          boxShadow="0 -1em 0.75em #ba816c7f inset"
          flexDirection="column"
          borderRadius="0.75em 0.75em 0.75em 0.75em / 3em 3em 0.75em 0.75em"
          sx={{
            background: "#8c5b3d",
            backgroundImage:
              "radial-gradient(10em 0.4em at 8em 0.8em,#fff,#fff0), radial-gradient(10em 0.4em at 20em 0.8em,#fff,#fff0),radial-gradient(10em 0.4em at 36em 0.8em,#fff,#fff0), radial-gradient(14em 0.8em at 6em 2em,#fff 50%,#fff0), radial-gradient(55em 0.4em at 50% 2em,#fff3,#fff0), linear-gradient(#0000,#0004), radial-gradient(12em 0.4em at 32em 2em,#fff,#fff0), url(https://i.ibb.co/rwcYp69/vintage-tv-texture.jpg)",
          }}
        >
          <Box
            sx={{ backgroundColor: "#bcb" }}
            margin="3em 0 0 0"
            overflow="hidden"
          >
            <Box
              boxShadow="0px 0px 122px 25px black inset"
              sx={{
                backgroundImage: "url('https://i.imgur.com/eg7VIun.jpg')",
                backgroundRepeat: "repeat",
                animation: "noise 230ms steps(6) infinite",
                "@keyframes noise": {
                  "0%": { backgroundPositionY: "0px" },
                  "100%": { backgroundPositionY: "-420px" },
                },
                height: { xs: "1000px", sm: "600px", md: "500px" },
                width: { xs: "290px", sm: "500px", md: "800px" },
              }}
            >
              <Box
                boxShadow="0 0.1em 0.2em 0.2em #0007 inset"
                top="50%"
                left="50%"
                width="calc(100% )"
                height="calc(100%)"
                sx={{
                  transform: "translate(-50%, -50%,)",
                  borderTop: {
                    xs: "1em solid #7b807d",
                    sm: "2em solid #7b807d",
                    md: "3em solid #7b807d",
                  },
                  borderRight: {
                    xs: "1em solid #9da28f",
                    sm: "2em solid #9da28f",
                    md: "3em solid #9da28f",
                  },
                  borderBottom: {
                    xs: "1em solid #b0b5a0",
                    sm: "2em solid #b0b5a0",
                    md: "3em solid #b0b5a0",
                  },
                  borderLeft: {
                    xs: "1em solid #8c917e",
                    sm: "2em solid #8c917e",
                    md: "3em solid #8c917e",
                  },
                }}
              >
                <Typography
                  fontSize="19px"
                  pt={5}
                  sx={{
                    textShadow:
                      "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
                    pl: { xs: 1, md: 5 },
                    pr: { xs: 1, md: 5 },
                  }}
                >
                  Mi transcurso dentro del mundo IT comenzo desde la
                  preparatoria donde estudie una carrera tecnica en informatica,
                  en donde tuve clases clases de C, HTML5, CSS, PHP, redes y
                  hardware, cuando estaba terminando de cursar tuve que hacer
                  mis practicas en la empresa HostDime Mexico, un Centro de
                  Datos, en la cual termine trabajado y pude tener un
                  crecimiento tanto profesional como de conocimiento, en linux,
                  ciberseguridad, hardware enfocado a servidores y redes, por
                  ultimo ingrese al bootcamp de plataforma 5 donde incremente mi
                  conocimiento de programacion
                </Typography>
              </Box>
              <Box
                top={0}
                left={0}
                width="100%"
                height="100%"
                boxShadow="0 -0.1em 0.1em 0.6em #3a1415 inset"
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default AboutMe;
