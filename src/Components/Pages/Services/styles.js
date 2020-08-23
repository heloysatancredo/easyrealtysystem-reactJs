// Imports
import { makeStyles } from '@material-ui/core';
import ServicesImg from "./assets/services.jpg";
import ServicesDashboard from "./assets/services_dash.jpg";
import ServicesListings from "./assets/services_listings.jpg";
import ServicesRealtors from "./assets/services_realtors.jpg";
import ServicesBall1 from "./assets/services_ball1.png";
import ServicesBall2 from "./assets/services_ball2.png";
import ServicesBall3 from "./assets/services_ball3.png";

// Define styles/classes
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${ServicesImg})`,
    height: "32vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    padding: "auto",
    marginBottom: "60px",
    paddingTop: "10vh",
  },
  wrapServices: {
    width: "85%",
    margin: "auto",
    paddingBottom: "60px",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
    maxWidth: "1480px"
  },
  dashImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    backgroundImage: `url(${ServicesDashboard})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    marginLeft: "5px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px"
    }
  },
  listImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    float: "left",
    backgroundImage: `url(${ServicesListings})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    marginLeft: "-8px",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px",
      float: "none"
    }
  },
  realImg: {
    height: "18vw",
    width: "32vw",
    minHeight: "169px",
    minWidth: "300px",
    maxWidth: "755px",
    maxHeight: "424px",
    backgroundImage: `url(${ServicesRealtors})`,
    borderRadius: "4px",
    boxShadow: "-2px 2px 5px #9B9A9A",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    marginLeft: "5px",
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: "center",
      margin: "auto",
      marginBottom: "15px"
    }
  },
  titleListings: {
    marginTop: "55px",
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  description: {
    margin: "auto",
  },
  listingsDesc: {
    maxWidth: "748px",
    paddingRight: "30px"
  },
  realtorsDesc: {
    maxWidth: "748px"
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
  },
  ball1: {
    position: "absolute",
    top: "460px",
    left: "0",
    width: "100%",
    height: "42vh",
    backgroundImage: `url(${ServicesBall1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      top: "300px",
    }
  },
  ball2: {
    position: "absolute",
    top: "830px",
    right: "0",
    width: "100%",
    height: "42vh",
    backgroundImage: `url(${ServicesBall2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      top: "700px",
    }
  },
  ball3: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "200px",
    backgroundImage: `url(${ServicesBall3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: "-1",
    [theme.breakpoints.down('md')]: {
      height: '100px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '100px',
    }
  },
  smallGrid: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  largeGrid: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  leftImgs: {
    paddingRight: "30px",
    [theme.breakpoints.down('md')]: {
      paddingRight: "0",
    },
  }
}));

export default useStyles;