// Imports
import { makeStyles } from '@material-ui/core';
import heroImage from "./assets/home-hero-image.jpg";
import BackImg from "./assets/backImg.png";

// Define styles/classes
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  wrap: {
    backgroundImage: `url(${heroImage})`,
    height: "48vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    color: "#fff",
    paddingTop: "10vh",
  },
  backImg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "66vh",
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: "-1",
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    width: "100%",
    fontSize: "22px",
    '@media (max-width:900px)': {
      fontSize: '18px',
    },
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
    paddingBottom: "40px",
  },
  homeContentGrid: {
    display: "grid",
    textAlign: "center",
    color: "#2B879E",
    paddingTop: "40px"
  },
  textDesc: {
    width: "80%",
    margin: "Auto",
    paddingBottom: "30px"
  },
  cardsGrid: {
    width: "100%",
    margin: "auto",
    textAlign: "-webkit-center"
  },
  button: {
    width: "197px",
    color: 'white',
    backgroundColor: '#2B879E',
    '&:hover': {
      background: '#34AAC7',
      color: 'white'
    },
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "22px",
    padding: "6px 0",
    '@media (max-width:900px)': {
      fontSize: '18px',
    },
  }
}));

export default useStyles;
