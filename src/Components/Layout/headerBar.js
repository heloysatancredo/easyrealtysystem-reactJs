import React from 'react'
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from './assets/ERSLogo.svg'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    backgroundColor: '#ffffff',
    height: '70px',
    margin: 'auto',
    width: '85%',
    '@media (max-width:1200px)': {
      width: '100%',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 3),
    textDecoration: 'none',
    color: '#2B879E',
    width: '100%',
    fontSize: '22px',
    fontWeight: 'normal',
    '@media (max-width:1200px)': {
      fontSize: '18px',
    },
  },
  button: {
    color: 'white',
    backgroundColor: '#2B879E',
    '&:hover': {
      background: '#34AAC7',
      color: 'white',
      border: 'none',
    },
    marginLeft: '24px',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '22px',
    '@media (max-width:1200px)': {
      fontSize: '18px',
    },
  },
  logoLink: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    height: '51px',
    width: '210px',
  },
}))

export default function HeaderBar() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar style={{ marginTop: '3px', padding: '0' }}>
          <div className={classes.toolbarTitle}>
            <Link variant='button' to='/'>
              <div className={classes.logoLink}></div>
            </Link>
          </div>
          <nav>
            <Link variant='subtitle1' className={classes.link} to='/Services'>
              Services
            </Link>
            <Link
              variant='subtitle1'
              href='#'
              className={classes.link}
              to='/Pricing'
            >
              Pricing
            </Link>
            <Link variant='button' href='#' className={classes.link} to='/Team'>
              Team
            </Link>
            <Link
              variant='button'
              href='#'
              className={classes.link}
              to='/Contact'
            >
              Contact
            </Link>
          </nav>
          <Button
            href='#'
            color='primary'
            variant='contained'
            className={classes.button}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
