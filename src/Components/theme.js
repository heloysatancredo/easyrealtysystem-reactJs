import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
    h5: {
      fontWeight: "800",
      fontSize: "2vw",
      '@media (max-width:1200px)': {
        fontSize: '28px',
      },
    },
    h4: {
      fontSize: "44px",
      fontWeight: "800",
      '@media (max-width:900px)': {
        fontSize: '28px',
      },
      paddingBottom: "10px"
    },
    h2: {
      fontSize: "26px",
      fontWeight: "600",
      '@media (max-width:900px)': {
        fontSize: '22px',
      },
      paddingBottom: "10px"
    },
    subtitle1: {
      fontSize: "22px",
      fontWeight: "600",
      '@media (max-width:900px)': {
        fontSize: '18px',
      },
      paddingBottom: "10px"
    },
    body1: {
      fontSize: "20px",
      fontWeight: "400",
      '@media (max-width:900px)': {
        fontSize: '16px',
      },
    },
    body2: {
      fontSize: "22px",
      fontWeight: "400",
      '@media (max-width:900px)': {
        fontSize: '18px',
      },
    },
  },
  palette: {
    primary: {
      main: "#2B879E"
    },
    secondary: {
      main: "#34AAC7",
    },
    text: {
      primary: "#000000"
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400
    }
  },
});

export default theme;

