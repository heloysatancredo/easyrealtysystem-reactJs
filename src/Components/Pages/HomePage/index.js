// Imports
import React from "react";
import { Button, Grid, Container, Typography } from '@material-ui/core';
import CircularImageCard from "../../Layout/CircularImageCard";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useStyles from './styles';

// Main function
export default function HomePage() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const homepageServicesCard = [
    {
      title: "Dashboard",
      detail: "Visualize data about the sales over time",
      imgThumb: "Home_dashboard_Icon.svg"
    },
    {
      title: "Listings",
      detail: "Easily and quickly manage your listings",
      imgThumb: "Home_listings_icon.svg"
    },
    {
      title: "Realtors",
      detail: "Manage your realtors individually",
      imgThumb: "Home_realtors_icon.svg"
    }
  ];

  return (
    <div id="home">
      <div className={classes.root}>
        <div className={classes.outContainer}>
          <div className={classes.wrap}>
            <Typography variant="h4">EASY REALTY SYSTEM</Typography>
            <Typography variant="subtitle1">A data-driven responsive web platform for real estate companies</Typography>
            <br></br>
            <Button className={classes.button} component={Link} to="/Pricing" variant="contained" color="primary" href="#contained-buttons">Get Started</Button>
          </div>
          <Container className={classes.homeContentGrid} component="main" width="85%">
            <div className={classes.homeContentHeading}>
              <Typography variant="h4">Manage Realty System</Typography>
              <Typography className={classes.textDesc} variant="body2" color="textPrimary"> This solution is dedicated to small/medium real estate companies and independent realtors, to support them in making strategic decisions by providing dynamic charts with crucial company statistics, and also to help them on managing the core operations of their business - listings and realtors. </Typography>
            </div>
            <Grid className={classes.cardsGrid} container direction="row" justify="space-between" alignItems="center" spacing={4}>
              {homepageServicesCard.map(item => (
                <Grid item key={item.title} xs={12} sm={12} md={3} lg={3} xl={3}>
                  <CircularImageCard
                    title={item.title}
                    detail={item.detail}
                    imgThumb={item.imgThumb}>
                  </CircularImageCard>
                </Grid>
              ))}
            </Grid>
          </Container>
          <div className={classes.backImg}></div>
        </div>
      </div>
    </div>
  );
}
