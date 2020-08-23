// Imports
import { makeStyles } from '@material-ui/core';
import TeamImg from "./assets/team.jpg";
import LogoTeam from "./assets/LogoTeam.png";

// Define styles/classes
const useStyles = makeStyles({
    root: {
        position: "relative",
    },
    wrap: {
        backgroundImage: `url(${TeamImg})`,
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
    teamLogo: {
        backgroundImage: `url(${LogoTeam})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        textAlign: "center",
        width: "100%",
        height: "65px"
    },
    gridTeam: {
        width: "85%",
        margin: "auto",
        textAlign: "-webkit-center",
        alignItems: "start",
        paddingBottom: "40px"
    }
});

export default useStyles;