import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./Carusel.css";
import bannerBike from "../../../product images/munroe-cargo-matt-metallic-green-01-906139.jpg";
import bannerBike2 from "../../../product images/cube-sl-road-fitnessbike-2021-1-912013.jpg";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "2.FOCUS JAM 6.9 - 29",
    imgPath: "https://i.ibb.co/N74BM5t/bicycle-161524-1280.png",
  },
  {
    label: "3.Ghost SQUARE CROSS Essential AL U ",
    imgPath: "https://i.ibb.co/DwYM2N2/bicycle-788733-1280.jpg",
  },
  {
    label: "1.Specialized SIRRUS 3.0 EQ Trekkingbike ",
    imgPath: "https://i.ibb.co/980gQ1G/bike-190483-1280.jpg",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item={4}>
          <Box sx={{ maxWidth: 400, flexGrow: 2 }}>
            <Typography
              style={{ textAlign: "left", fontWeight: "bolder" }}
              variant="h2"
            >
              today sales
            </Typography>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 455,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Box>
        </Grid>
        <Grid item={4}>
          <div className="center">
            <h2 className="discount">
              70% OFF <span style={{ color: "yellow" }}>!!!</span>
            </h2>
          </div>
          <div>
            <img src={bannerBike} height="400px" alt="" />
          </div>
          <Button className="gradient-button" variant="contained">
            click more
          </Button>
        </Grid>
        <Grid item={4}>
          <div className="discount-div">
            <img src={bannerBike2} height="400px" alt="" />
            <div className="center">
              <h2 className="discount">
                50% OFF <span style={{ color: "yellow" }}>!!!</span>
              </h2>
            </div>
          </div>
          <Button className="gradient-button" variant="contained">
            click more
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SwipeableTextMobileStepper;
