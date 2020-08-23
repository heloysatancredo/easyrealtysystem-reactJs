// Imports
import { makeStyles } from '@material-ui/core';
import PricingImg from "./assets/pricing.jpg";

// Define styles/classes
const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  outContainer: {
    position: "relative",
    zIndex: "0",
    paddingBottom: "60px"
  },
  cardHeader: {
    backgroundColor: '#2B879E',
    color: 'white',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: "20px",
    marginBottom: "25px",
  },
  wrap: {
    backgroundImage: `url(${PricingImg})`,
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
  link: {
    lineHeight: "inherit",
    margin: theme.spacing(1, 3),
    textDecoration: 'none',
    color: "inherit",
    fontWeight: "bold",
    textTransform: "capitalize",
    display: "block",
    width: "100%",
    fontSize: "22px",
    '@media (max-width:900px)': {
      fontSize: '18px',
    },
  },
  descCard: {
    textAlign: "center",
    padding: "8px 0px",
    borderBottom: "1px solid #2B879E",
    width: "85%",
    margin: "auto"
  },
  button: {
    lineHeight: "inherit",
    color: "#2B879E",
    width: "195px", 
    margin: "auto", 
    marginBottom: "16px",
    border: "2px solid #2B879E",
    '&:hover': {
      background: "#34AAC7",
      color: 'white'
    },
  }
}));

export default useStyles;