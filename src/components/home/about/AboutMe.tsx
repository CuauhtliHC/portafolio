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
      <Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          pt={5}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Box
            display="flex"
            sx={{
              backgroundImage: 'url("/img/tv-cel.png")',
              backgroundSize: "cover",
            }}
          >
            <Box pt={10} pl={1} pb={20}>
              <Typography
                sx={{
                  fontSize: { sm: "19px" },
                  textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
                }}
              >
                Mi transcurso dentro del mundo IT comenzo desde la preparatoria
                donde estudie una carrera tecnica en informatica, en donde tuve
                clases clases de C, HTML5, CSS, PHP, redes y hardware, cuando
                estaba terminando de cursar tuve que hacer mis practicas en la
                empresa HostDime Mexico, un Centro de Datos, en la cual termine
                trabajado y pude tener un crecimiento tanto profesional como de
                conocimiento, en linux, ciberseguridad, hardware enfocado a
                servidores y redes, por ultimo ingrese al bootcamp de plataforma
                5 donde incremente mi conocimiento de programacion
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          pt={5}
          sx={{ display: { xs: "none", sm: "flex", md: "none" } }}
        >
          <Box
            display="flex"
            sx={{
              backgroundImage: 'url("/img/tv.png")',
              backgroundSize: "cover",
            }}
          >
            <Box pt={7} pl={9} pb={7} pr={7}>
              <Typography
                sx={{
                  fontSize: { sm: "15px" },
                  textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
                }}
              >
                Mi transcurso dentro del mundo IT comenzo desde la preparatoria
                donde estudie una carrera tecnica en informatica, en donde tuve
                clases clases de C, HTML5, CSS, PHP, redes y hardware, cuando
                estaba terminando de cursar tuve que hacer mis practicas en la
                empresa HostDime Mexico, un Centro de Datos, en la cual termine
                trabajado y pude tener un crecimiento tanto profesional como de
                conocimiento, en linux, ciberseguridad, hardware enfocado a
                servidores y redes, por ultimo ingrese al bootcamp de plataforma
                5 donde incremente mi conocimiento de programacion
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  */}
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        pt={5}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Box
          display="flex"
          sx={{
            backgroundImage: 'url("/img/tv.png")',
            backgroundSize: "cover",
            height: "500px",
            width: "920px",
          }}
        >
          <Box pt={10} pl={10} pr={26}>
            <Typography
              fontSize="19px"
              sx={{
                textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
              }}
            >
              Mi transcurso dentro del mundo IT comenzo desde la preparatoria
              donde estudie una carrera tecnica en informatica, en donde tuve
              clases clases de C, HTML5, CSS, PHP, redes y hardware, cuando
              estaba terminando de cursar tuve que hacer mis practicas en la
              empresa HostDime Mexico, un Centro de Datos, en la cual termine
              trabajado y pude tener un crecimiento tanto profesional como de
              conocimiento, en linux, ciberseguridad, hardware enfocado a
              servidores y redes, por ultimo ingrese al bootcamp de plataforma 5
              donde incremente mi conocimiento de programacion
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default AboutMe;
