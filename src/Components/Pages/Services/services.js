// Imports
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import useStyles from './styles';

// Main function
export default function Services() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.outContainer}>
        <div className={classes.ball1}></div>
        <div className={classes.ball2}></div>
        <div className={classes.ball3}></div>
        <div className={classes.wrap} >
          <Typography variant="h4">SERVICES</Typography>
          <Typography variant="subtitle1">The best solutions for your Real State Business</Typography>
        </div>
        <div className={classes.wrapServices}>
          <Grid container>
            <Grid className={classes.leftImgs} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" color="primary">Dashboard</Typography>
              <div className={classes.dashImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary">
                Find dynamic charts that to analyze your business. Choose to see:<br></br>
                - Sales by type of property OR<br></br>
                - Sales by realtor<br></br><br></br>
                And choose the metrics you want: <br></br>
                - Sales by quantity OR<br></br>
                - Sales by amount<br></br>
                See statistics over time to analyse the progress of your business.
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <Typography variant="h4" color="primary" className={classes.titleListings}>Listings</Typography>
          <Grid container className={classes.largeGrid}>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography className={classes.listingsDesc} variant="body2" color="textPrimary">
                Manage your listings by exploring this feature:<br></br>
                - Add listings with all characteristics and photos<br></br>
                - Quiclky assign the listing to a realtor<br></br>
                - Manage the status of your listings: active, inactive, sold<br></br>
                - Easily edit and delete your listings<br></br>
                - Add your sales to automatically update your charts<br></br>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.listImg}></div>
            </Grid>
          </Grid>
          <br></br>
          <Grid container className={classes.smallGrid}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="h4" color="primary">Listings</Typography>
              <div className={classes.listImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Typography variant="body2" color="textPrimary" style={{ maxWidth: "748px" }}>Manage your listings by exploring this feature:<br></br>
              - Add listings with all characteristics and photos<br></br>
              - Quickly assign the listings to a realtor<br></br>
              - Manage the status of your listings: active, inactive, sold<br></br>
              - Easily edit and delete your listings<br></br>
              - Add your sales to automatically update your charts<br></br>
              </Typography>
            </Grid>
          </Grid>
          <br></br> <br></br>
          <Grid container>
            <Grid className={classes.leftImgs} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="h4" color="primary">Realtors</Typography>
              <div className={classes.realImg}></div>
            </Grid>
            <Grid className={classes.description} item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography className={classes.realtorsDesc} variant="body2" color="textPrimary">
                Manage your realtors efficiently by exploring this feature:<br></br>
                - Add realtors with their photo and information<br></br>
                - View houses assigned to a realtor<br></br>
                - Easily edit and delete realtors<br></br>
                - Quicly search a specific realtor in your list<br></br>
                - View all the information about your realtors<br></br>
                <br></br>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
