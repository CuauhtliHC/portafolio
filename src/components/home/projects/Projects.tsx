import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const steps = [
  {
    label: "E-Commerce Pineapple",
    description: `E-commerce de celulares que permite ver y listar los celulares disponibles, buscar productos, dejar reviews, agregar al carrito y realizar el checkout. Tambien cuenta con panel de administrador donde se puede administrar productos, administrar usuarios y ordenes de compra.`,
    image: "/img/projects/e-commerce.png",
    tecnologies: [
      {
        name: "ReactJS",
        icon: "react/react-original.svg",
      },
      { name: "Redux", icon: "redux/redux-original.svg" },
      { name: "NodeJS", icon: "nodejs/nodejs-original.svg" },
      { name: "ExpressJS", icon: "express/express-original.svg" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
      { name: "Sequelize", icon: "sequelize/sequelize-original.svg" },
      { name: "MaterialUI", icon: "materialui/materialui-original.svg" },
    ],
  },
  {
    label: "Portafolio",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
    image: "/img/projects/portfolio.png",
    tecnologies: [],
  },
  {
    label: "Tmdb movies",
    description: `Es una aplicacion web que permite buscar peliculas y series, ver sus detalles y también agregarla a favoritos si tienes la sesion iniciada.`,
    image: "/img/projects/tmdb.png",
    tecnologies: [],
  },
];

function Projects(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Fragment>
      <Box pt={5} alignItems="center" justifyContent="center" display="flex">
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "25px", md: "40px", lg: "80px" },
            textShadow: ".1px .5px 1px red, 0 0 .2em blue, 0 0 0.1em blue;",
          }}
        >
          Proyectos
        </Typography>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        display="flex"
        pb={10}
        pt={3}
      >
        <Box
          pt="18px"
          height="360px"
          borderRadius="4px 4px 30px 4px"
          boxShadow="5px 5px 3px #BFAB52"
          left="calc(50% - 100px)"
          sx={{
            backgroundColor: "#79c753",
            width: { xs: "360px", xl: "200px" },
          }}
        >
          <Box
            position="relative"
            ml="auto"
            mr="auto"
            borderRadius="4px 20px 4px"
            sx={{
              backgroundColor: "#4A4A4A",
              width: { xs: "340px", xl: "180px" },
              height: { xs: "200px", xl: "160px" },
            }}
          >
            <Box
              position="relative"
              top="16px"
              margin="auto"
              sx={{
                width: { xs: "280px", xl: "126px" },
                height: { xs: "160px", xl: "126px" },
                backgroundColor: "#B5B28F",
              }}
            >
              <Box
                pb={0.3}
                pr={0.3}
                pt={0.3}
                pl={0.3}
                position="relative"
                component="img"
                margin="auto"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
                alt={steps[activeStep].label}
                src={steps[activeStep].image}
              />
            </Box>
            <Typography
              position="relative"
              fontFamily="helvetica"
              fontSize="4px"
              color="white"
              top="-99px"
              left="6.6px"
            >
              Power
            </Typography>
            <PowerMoon />
            <PowerMoon />
            <PowerMoon />
          </Box>
          <Box>
            <Box
              position="relative"
              width="20px"
              height="55px"
              top="30px"
              left="30px"
              borderRadius="3px"
              sx={{ backgroundColor: "#4A4A4A" }}
            ></Box>
            <Box
              position="relative"
              width="55px"
              height="20px"
              top="-7px"
              left="12px"
              borderRadius="3px"
              sx={{ backgroundColor: "#4A4A4A" }}
            >
              <Box
                position="relative"
                height="13px"
                width="13px"
                borderRadius="50%"
                top="2.5px"
                ml="auto"
                mr="auto"
                sx={{ backgroundColor: "#424242" }}
              ></Box>
              <Buttons handleNext={handleNext} handleBack={handleBack} />
            </Box>
          </Box>
          <Box
            position="relative"
            height="24px"
            width="24px"
            borderRadius="50px"
            top="-33px"
            left="155px"
            sx={{ backgroundColor: "#4A4A4A" }}
          >
            <Box
              position="absolute"
              fontFamily="helvetica"
              fontSize="11px"
              textAlign="center"
              color="#424242"
              top="7px"
              height="27px"
              width="27px"
            >
              A
            </Box>
          </Box>
          <Box
            position="relative"
            height="24px"
            width="24px"
            borderRadius="50px"
            top="-45px"
            left="125px"
            sx={{ backgroundColor: "#4A4A4A" }}
          >
            <Box
              position="absolute"
              fontFamily="helvetica"
              fontSize="11px"
              textAlign="center"
              color="#424242"
              top="7px"
              height="27px"
              width="27px"
            >
              B
            </Box>
          </Box>
          <Box
            position="relative"
            width="27px"
            height="6px"
            borderRadius="5px"
            left="70px"
            sx={{ backgroundColor: "#424242" }}
          >
            <Box
              position="absolute"
              height="27px"
              width="27px"
              fontFamily="helvetica"
              fontSize="7.7px"
              textAlign="center"
              color="#424242"
              top="14.6px"
            >
              SELECT
            </Box>
          </Box>
          <Box
            position="relative"
            width="27px"
            height="6px"
            borderRadius="5px"
            left="110px"
            top="-6px"
            sx={{ backgroundColor: "#424242" }}
          >
            <Box
              position="absolute"
              height="27px"
              width="27px"
              fontFamily="helvetica"
              fontSize="7.7px"
              textAlign="center"
              color="#424242"
              top="14.6px"
            >
              START
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

const PowerMoon = (): JSX.Element => {
  return (
    <Box
      position="relative"
      width="5px"
      height="5px"
      display="inline-block"
      borderRadius="50%"
      boxShadow="2px -0.2px 0 white"
      top="-119.7px"
      left="8.3px"
    ></Box>
  );
};

interface MyDivProps {
  handleNext: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleBack: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Buttons: React.FC<MyDivProps> = ({
  handleNext,
  handleBack,
}): JSX.Element => {
  return (
    <Fragment>
      <div
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderRight: "10px solid #424242",
          bottom: "5px",
          left: "3.5px",
          cursor: "pointer",
        }}
        onClick={handleBack}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "0",
          height: "0",
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: "10px solid #424242",
          bottom: "5px",
          right: "3.5px",
          cursor: "pointer",
        }}
        onClick={handleNext}
      ></div>
    </Fragment>
  );
};

export default Projects;
