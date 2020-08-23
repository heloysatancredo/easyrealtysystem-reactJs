// Imports
import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useStyles from './styles';

// Data to be used in main function
const tiers = [
  {
    title: 'Free Trial',
    price: '0',
    description: [
      '5 users included',
      '2 GB of storage',
      'Email support',
      '1 Email account'
    ],
    button: "Get Started"
  },
  {
    title: 'Basic',
    subheader: 'Most popular',
    price: '25',
    description: [
      '10 users included',
      '25 GB of storage',
      'Priority email support',
      '10 Email accounts',
    ],
    button: "Buy Now"
  },
  {
    title: 'Pro',
    price: '75',
    description: [
      'Unlimited users',
      'Unlimited storage',
      'Phone & email support',
      'Unlimited Email',
    ],
    button: "Buy Now"
  },
  {
    title: 'Custom',
    price: '',
    description: [
      'Unlimited users',
      'Unlimited storage',
      'Phone & email support',
      'Unlimited Email',
    ],
    button: "Contact Us"
  },
];

// Main function
export default function Pricing() {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.outContainer}>
        <div className={classes.wrap} >
          <Typography variant="h4">PRICING</Typography>
          <Typography variant="subtitle1">Plans for all companies. Choose the best for your business</Typography>
        </div>
        <div>
          <Container width="85%" maxWidth="xl" component="main">
            <Grid container spacing={3} alignItems="center">
              {tiers.map(tier => (
                <Grid item key={tier.title} xs={12} sm={6} md={6} lg={3} xl={3}>
                  <Card style={{ border: ((tier.title === "Basic") ? "2px solid #34AAC7" : "2px solid #2B879E") }}>
                    <CardHeader
                      title={tier.title}
                      titleTypographyProps={{ align: 'center', variant: "h5" }}
                      className={classes.cardHeader}
                      style={{ backgroundColor: ((tier.title === "Basic") ? '#34AAC7' : '#2B879E') }} />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography
                        style={{ color: ((tier.title === "Custom") ? 'transparent' : 'black') }} 
                        component="h2" variant="h3" color="textPrimary">${tier.price}</Typography>
                        <Typography 
                        style={{ color: ((tier.title === "Custom") ? 'transparent' : 'black') }} variant="h6" color="textPrimary">/mo</Typography>
                        <Typography 
                        style={{ fontWeight: "bold", position: "absolute", marginTop: "22px", display: ((tier.title === "Custom") ? 'block' : 'none') }} variant="h6" color="textPrimary">Ask for a quote</Typography>
                      </div>
                      <ul>
                        {tier.description.map(line => (
                          <Typography className={classes.descCard} component="li" variant="body2" align="center" key={line} color="textPrimary">{line}</Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button className={classes.button}>
                        <Link variant="button" href="#" className={classes.link} to="/Contact">{tier.button}</Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

// References: Material UI - https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/pricing
