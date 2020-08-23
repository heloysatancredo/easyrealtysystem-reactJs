import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LogoMobile from "./assets/logoMobile.png";
import Logo from "./assets/ERSLogo.svg";

const useStyles = makeStyles(theme => ({
    footerWrap: {
        display: "flex",
        flexDirection: "column",
    },
    newsLetterContent:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2% 8%",
        backgroundColor: "#2B879E",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            textAlign: "center",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "#ffffff",
        height: "70px",
        width: "85%",
        '@media (max-width:1200px)': {
            width: "93%",
        },
        margin: "auto",
        //padding: "0 10%"
    },
    logoLink: {
        backgroundImage: `url(${Logo})`,
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${LogoMobile})`,
            marginTop: "10px",
        },
        backgroundRepeat: "no-repeat",
        height: "51px",
        width: "210px",
    },
    email: {
        [theme.breakpoints.down('sm')]: {
            marginTop: "14px",
            marginBottom: "12px",
        },
    },
    input: {
        color: "#2B879E",
        height: "40px",
        width: "320px",
        borderRadius: "4px",
        fontSize: "16px",
        fontStyle: "italic",
        paddingLeft: "10px",
        [theme.breakpoints.down('sm')]: {
            width: "240px",
            fontSize: "16px"
        },
    },
    sendBtn: {
        backgroundColor: "white",
        color: "#2B879E",
        '&:hover': {
            background: "#34AAC7",
            color: 'white'
        },
        boxShadow: "none",
        padding: "2px 16px",
        border: "none",
        borderRadius: "4px",
        width: "100px",
        height: "40px",
        marginLeft: "20px",
        fontSize: "22px",
        [theme.breakpoints.down('sm')]: {
            width: "94px",
            fontSize: "16px"
        },
    },
    barFooter: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "3px",
        padding: "0",
    },
    toolbarTitle: {
        [theme.breakpoints.down('sm')]: {
            width: "100px",
        },
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <div className={classes.footerWrap}>
                <div className={classes.newsLetterContent}>
                    <div>
                        <Typography variant="h2">Subscribe to our newsletter</Typography>
                        <Typography variant="body2">To get tips about how to be a better manager</Typography>
                    </div>
                    <div style={{ display: "flex" }} className={classes.email}>
                        <input className={classes.input} type="text" placeholder="Your Email"></input>
                        <button className={classes.sendBtn}>Send </button>
                    </div>
                </div>
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.barFooter}>
                        <div className={classes.toolbarTitle}>
                            <Link variant="button" to="/" className={classes.logoLink}><div className={classes.logoLink}></div>
                            </Link>
                        </div>
                        <div><span style={{ fontSize: "16px" }}>&copy; {new Date().getFullYear()} Easy Realty System</span></div>
                    </Toolbar>
                </AppBar>
            </div>
        </footer>
    );
}