import React, { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const steps = [
  {
    label: "E-Commerce Pineapple",
    description: `E-commerce de celulares que permite ver y listar los celulares disponibles, buscar productos, dejar reviews, agregar al carrito y realizar el checkout. Tambien cuenta con panel de administrador donde se puede administrar productos, administrar usuarios y ordenes de compra.`,
    image: "/img/projects/e-commerce.png",
  },
  {
    label: "Portafolio",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
    image: "/img/projects/portfolio.png",
  },
  {
    label: "Tmdb movies",
    description: `Es una aplicacion web que permite buscar peliculas y series, ver sus detalles y también agregarla a favoritos si tienes la sesion iniciada.`,
    image: "/img/projects/tmdb.png",
  },
];

function Projects(): JSX.Element {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) setActiveStep(0);
    else setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) setActiveStep(maxSteps - 1);
    else setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Fragment>
      <Box
        pt={5}
        alignItems="center"
        justifyContent="center"
        display="flex"
        component="section"
        id="projects"
      >
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
        {/* colored_component */}
        <Box
          pt="18px"
          borderRadius="4px 4px 30px 4px"
          boxShadow="5px 5px 3px blue"
          left="calc(50% - 100px)"
          sx={{
            backgroundColor: grey[600],
            width: { xs: "360px", sm: "560px", md: "760px" },
            height: { xs: "360px", sm: "460px", md: "560px" },
          }}
        >
          {/* screen_border */}
          <Box
            position="relative"
            ml="auto"
            mr="auto"
            borderRadius="4px 20px 4px"
            sx={{
              backgroundColor: "#4A4A4A",
              width: { xs: "340px", sm: "540px", md: "740px" },
              height: { xs: "200px", sm: "300px", md: "400px" },
            }}
          >
            {/* screen */}
            <Box
              position="relative"
              top="16px"
              margin="auto"
              sx={{
                width: { xs: "280px", sm: "480px", md: "680px" },
                height: { xs: "160px", sm: "260px", md: "360px" },
                backgroundColor: "#B5B28F",
              }}
            >
              {/* projects */}
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
            {/* power */}
            <Typography
              position="relative"
              fontFamily="helvetica"
              fontSize="4px"
              color="white"
              left="6.6px"
              sx={{
                top: { xs: "-99px", sm: "-199px", md: "-299px" },
              }}
            >
              Power
            </Typography>
            <PowerMoon />
            <PowerMoon />
            <PowerMoon />
          </Box>
          {/* cross_button */}
          <Box>
            {/* vertical */}
            <Box
              position="relative"
              width="20px"
              height="55px"
              top="30px"
              left="30px"
              borderRadius="3px"
              sx={{
                backgroundColor: "#4A4A4A",
                left: { xs: "30px", sm: "100px" },
              }}
            ></Box>
            {/* horizontal */}
            <Box
              position="relative"
              width="55px"
              height="20px"
              top="-7px"
              left="12px"
              borderRadius="3px"
              sx={{
                backgroundColor: "#4A4A4A",
                left: { xs: "12px", sm: "82px" },
              }}
            >
              {/* middle_round */}
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
              {/* Buttons */}
              <Buttons handleNext={handleNext} handleBack={handleBack} />
            </Box>
          </Box>
          {/* Button A */}
          <Box
            position="relative"
            height="24px"
            width="24px"
            borderRadius="50px"
            top="-33px"
            sx={{
              backgroundColor: "#4A4A4A",
              left: { xs: "290px", sm: "430px", md: "630px" },
            }}
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
          {/* Button B */}
          <Box
            position="relative"
            height="24px"
            width="24px"
            borderRadius="50px"
            top="-45px"
            left="125px"
            sx={{
              backgroundColor: "#4A4A4A",
              left: { xs: "260px", sm: "400px", md: "600px" },
            }}
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
          {/* Select */}
          <Box
            position="relative"
            width="27px"
            height="6px"
            borderRadius="5px"
            sx={{
              backgroundColor: "#424242",
              top: { xs: "-15px" },
              left: { xs: "130px", sm: "230px", md: "330px" },
            }}
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
          {/* Start */}
          <Box
            position="relative"
            width="27px"
            height="6px"
            borderRadius="5px"
            left="110px"
            sx={{
              backgroundColor: "#424242",
              top: { xs: "-21px" },
              left: { xs: "170px", sm: "270px", md: "370px" },
            }}
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
      left="8.3px"
      sx={{
        top: { xs: "-119.7px", sm: "-219.7px", md: "-319.7px" },
      }}
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
