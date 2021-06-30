import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/Footer Adornment.svg'; 
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import instagram from '../../assets/instagram1.svg';
import github from '../../assets/github.svg';
import heroku from '../../assets/heroku.svg';
import linkedin from '../../assets/linkedin1.svg';

const useStyles = makeStyles(theme => ({
    footer : {
        backgroundColor : theme.palette.common.gross,
        width : "100%",
        zIndex : 1302,
        position : "relative"
    },
    adornment : {
        width : "25em",
        verticalAlign : "bottom",
        [theme.breakpoints.down("md")] : {
            width : "21em"
        },
        [theme.breakpoints.down("xs")] : {
            width : "15em"
        }
    },
    mainContainer : {
        position : "absolute"
    },
    link : {
        color : "white" ,
        fontFamily : "Saira Condensed",
        fontSize : "1rem" ,
        fontWeight : "bold",
        textDecoration : "none"
    },
    gridItem : {
        margin : "3em"
    },
    icon : {
        height : "4em" ,
        width : "4em",
        [theme.breakpoints.down("xs")] : {
            height : "2.5em" ,
            width : "2.5em"  
        }
    },
    socialContainer : {
        position : "absolute",
        marginTop : "-6em",
        right : "1.5em",
        [theme.breakpoints.down("xs")] : {
            right : "0.6em"  
        }
    }
}))

export default function Footer(props) {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer} >
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={() => props.setValue(0)} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/myprojects" 
                        onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} 
                        className={classes.link}>
                            MyProjects
                        </Grid>
                        <Grid item component={Link} to="/cauvery" 
                        onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} 
                        className={classes.link}>
                            Cauvery Enterprises
                        </Grid>
                        <Grid item component={Link} to="/ecommerce" 
                        onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                        className={classes.link}>
                            Clothes E-Commerce
                        </Grid>
                        <Grid item component={Link} to="/nisarga" 
                        onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
                        className={classes.link}>
                            Nisarga Constructions
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem} >
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                            About
                        </Grid>
                        <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item component={Link} to="/about" onClick={() => props.setValue(2)} className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/hobbies" onClick={() => props.setValue(3)} className={classes.link}>
                            Hobbies
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" onClick={() => props.setValue(4)} className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            </Hidden> 
            <img alt="decorative" src={footerAdornment} className={classes.adornment}/>

            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram" src={instagram} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.github.com" rel="noopener noreferrer" target="_blank">
                    <img alt="github" src={github} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.heroku.com" rel="noopener noreferrer" target="_blank">
                    <img alt="heroku" src={heroku} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.linkedin.com" rel="noopener noreferrer" target="_blank">
                    <img alt="linkedin" src={linkedin} className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    );
}