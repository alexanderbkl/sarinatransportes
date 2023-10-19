import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import landingImage from "./images/landing.gif";
import logoImage from "./images/logo_naranja.png";
import mapImage from "./images/map.png";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    background: "linear-gradient(to right, #000428, #004e92)",
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "60%",

    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    marginLeft: "10vw",
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HeadSection(props) {

  var dataLayer = window.dataLayer || [];
  window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'AW-11329806600');
  function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11329806600/GSfaCN2-pOgYEIjCvJoq',
      'event_callback': callback
  });
  return false;
}

  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div style={{ backgroundColor: "#000428", display: "flex" }}>
        {/*Create a text next to logo saying "MUDANZAS SARINA" */}
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#fff", marginTop: "2vh", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'left' }}
          className={classes.h4}
        >
          MUDANZAS Y TANSPORTES SARINA
        </Typography>
        <img
          src={logoImage}
          alt="logo"
          style={{ margin: "10px", display: "flex", justifyContent: "end", alignItems: "end" }}
          className={classes.image}
        />





      </div>



      <div className={classNames("lg-p-top", classes.wrapper)}>

        <div className={classNames("container-fluid", classes.container)}>

          <Box display="flex" justifyContent="center" className="row"
          >

            <Card style={{ backgroundImage: "url(" + mapImage + ")" }}
              className={classes.card}

            >

              <div className={classNames(classes.containerFix, "container")}>
                {/*logi image centered horizontally*/}


                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={12}>

                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h2" : "h3"}
                        >
                          Mudanza Economica Barcelona Badalona y Provincia
                        </Typography>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h6"}
                        >
                          <b>SARINA</b> es una empresa especializada en mudanzas y traslados de cualquier dimensión, garantizamos un servicio de calidad y adaptable dirigido a <b>particulares</b> y <b>empresas</b> ante un traslado de vivienda o de oficinas.

                        </Typography>
                      </Box>
                      <div>
                        {/*Phone number link*/}
                        <Button
                          variant="contained"
                          color="primary"
                          size={isWidthUp("sm", width) ? "large" : "medium"}
                          className={classes.extraLargeButton}
                          classes={{ label: classes.extraLargeButtonLabel }}
                          onClick={() => {
                            gtag_report_conversion("https://wa.me/34633583439?text=Hola,%20me%20interesan%20vuestros%20servicios%20de%20transporte%20y%20mudanzas.")
                          }}
                        >
                          Contactar
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    {/*Vertically centered langingImage */}
                    <Grid item md={10}>
                      <Box

                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="100%"
                      >
                        <img
                          src={landingImage}
                          alt="landing"
                          className={classes.image}
                        />
                      </Box>
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor="linear-gradient(to right, #000428, #004e92)"
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
