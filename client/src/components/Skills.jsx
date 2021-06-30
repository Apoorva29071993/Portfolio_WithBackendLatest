import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import zavod from '../assets/zavod.svg';
import react from '../assets/react1.svg';
import sass from '../assets/sass.svg';
import html5 from '../assets/html5.svg';
import javascript from '../assets/javascript.svg';
import nodejs from '../assets/nodejs.svg';
import redux from '../assets/redux.svg';
import reduxsaga from '../assets/reduxsaga.svg';
import vscode from '../assets/vscode.svg';
import mongodb from '../assets/mongodb.svg';
import github from '../assets/github.svg';
import heroku from '../assets/heroku.svg';
import nextJs from '../assets/nextjs.svg';
import revolutionBackground from "../assets/infoBackground.svg";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor : "transparent",
        //backgroundImage: `url(${revolutionBackground})`,
        [theme.breakpoints.down("sm")] : {
            backgroundColor : "transparent"
        },
        [theme.breakpoints.down("xs")] : {
            backgroundColor : "transparent",
            //marginLeft : "2em"
        }
    },
    firstContainer: {
        marginTop : "5em",
        [theme.breakpoints.down("xs")] : {
            marginTop : "0em",
        }
    },
    card : {
        backgroundColor : theme.palette.common.gross,
        boxShadow : theme.shadows[10],
        borderRadius : "5%" ,
        padding : "0.5em",
        marginRight : "1rem",
        [theme.breakpoints.down("sm")] : {
            paddingTop : 0 ,
            paddingBottom : 0,
            paddingLeft : 0,
            paddingRight : 0,
            borderRadius : 0,
            width : "100%"
        },
        [theme.breakpoints.down("xs")] : {
            paddingTop : 0 ,
            paddingBottom : 0,
            paddingLeft : 0,
            paddingRight : 0,
            borderRadius : 0,
            width : "100%",
            marginRight : 0
        }
    },
    firstItem : {
       // marginRight : "2rem",
        [theme.breakpoints.down("xs")] : {
            marginBottom : "2em",
            marginLeft : "2em"
        }
    },
    SecondItem : {
        // marginRight : "2rem",
         [theme.breakpoints.down("xs")] : {
             marginBottom : "2em",
             marginLeft : "2em"
         }
     },
    firstRow : {
        marginLeft : "2em",
        [theme.breakpoints.down("sm")] : {
            marginRight : 0
        }
    },
    firstRowLastItem : {
        marginRight : "2em",
        [theme.breakpoints.down("sm")] : {
            marginRight : "2em"
        }
    },
    icon : {
        height : '3em',
        width : "3em",
        borderRadius : "0em",
        [theme.breakpoints.down("xs")] : {
            marginLeft : 0
        }
    }
}));

export default function Skills(props) {

    const classes= useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <React.Fragment>
            <Grid container direction="column"  className={classes.mainContainer}>
                {/* First row start*/}
                <Grid item className={classes.firstRow}>
                    <Grid container justify={matchesSM ? "center" : "space-between"} direction="row" className={classes.firstContainer}>

                    

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="react" src={react} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.SecondItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="sass" src={sass} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="javascript" src={javascript} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="github" src={github} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="heroku" src={heroku} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="html5" src={html5} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* First row end*/}

                {/* Second row start*/}
                <Grid item className={classes.firstRow} >
                    <Grid container justify={ matchesSM ? "center" : "space-between"} direction="row" className={classes.firstContainer}>

                        

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="redux" src={redux} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="reduxsaga" src={reduxsaga} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="mongodb" src={mongodb} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="nextJs" src={nextJs} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="nextJs" src={nextJs} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item className={classes.firstItem} style={{marginBottom : "3em"}}>
                            <Card className={classes.card}>
                                <CardContent>
                                <Grid container direction="column" style={{textAlign : "center"}}>
                                <Grid item>
                                <img className={classes.icon} alt="vscode" src={vscode} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Web Design
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Lorem ipsum
                                    </Typography>
                                </Grid>
                                </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Second row end*/}

                

            </Grid>
        </React.Fragment>
    )
}