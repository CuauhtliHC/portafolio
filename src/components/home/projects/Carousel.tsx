import * as React from "react";
import { Box, MobileStepper, Paper, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

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

export default function Carousel(): JSX.Element {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box alignItems="center" justifyContent="center" display="flex" pt={10}>
      <Box sx={{ maxWidth: 800, width: { xs: "250px" } }}>
        <Box pb={5}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "background.default",
            }}
          >
            <Typography
              fontSize="30px"
              sx={{
                textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
              }}
            >
              {steps[activeStep].label}
            </Typography>
          </Paper>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{ height: { xs: "300px" }, maxWidth: 800, width: "100%", p: 2 }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "300px" },
              }}
              alt={steps[activeStep].label}
              src={steps[activeStep].image}
            />
          </Box>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography
              sx={{
                textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;",
              }}
            >
              {steps[activeStep].description}
            </Typography>
          </Paper>
        </Box>
        <Box>
          <MobileStepper
            variant="progress"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
