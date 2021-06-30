import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import customSoftwareIcon from '../assets/wood.svg';
import zavod from '../assets/zavod.svg';
import build from '../assets/buildIcon.svg';
import construction from '../assets/construction.svg';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor : "#fc4c3f"
    },
    viewButton : {
        color : "white",
        backgroundColor : theme.palette.common.gold ,
        borderRadius : "2rem",
        "&:hover" : {
            color : theme.palette.common.gold,
            backgroundColor : "white"
        },
        [theme.breakpoints.down("sm")] : {
            marginBottom : "2em"
        }
    },
    icon : {
        marginLeft : "2em",
        height : '10em',
        width : "10em",
        borderRadius : "0em",
        [theme.breakpoints.down("xs")] : {
            marginLeft : 0
        }
    },
    woodIcon : {
        marginLeft : "2em",
        height : '10em',
        width : "10em",
        borderRadius : "10em",
        [theme.breakpoints.down("xs")] : {
            marginLeft : 0
        }
    },
    iconBuild : {
        marginLeft : "2em",
        height : '10em',
        width : "10em",
        [theme.breakpoints.down("xs")] : {
            marginLeft : 0
        }
    },
    projectsContainer : {
        marginTop : "3em",
        [theme.breakpoints.down("sm")] : {
            padding : 25
        }
    }
}))

export default function MyProjects(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.mainContainer}>
                {/* Cauvery Start */}
                
                <Grid item>
                    <Grid container direction="row"
                    justify={matchesSM ? "center" : undefined}
                    className={classes.projectsContainer}>
                        <Grid item style={{marginLeft : matchesSM ? 0 : "5em" , textAlign : matchesSM ? "center" : undefined}}>
                            <Typography variant="h4">
                                Cauvery Enterprises
                            </Typography>
                            <Typography variant="subtitle1">
                                Wood Packing Industry
                            </Typography>
                            <Typography variant="subtitle1">
                                All types of boxes
                            </Typography>
                            <Button variant="outlined" component={Link} to="/cauvery" className={classes.viewButton}>
                                <span style={{marginRight : 10}}>View Details</span>
                            </Button>
                        </Grid>

                        <Grid item>
                            <img className={classes.woodIcon} alt="cauvery" src={customSoftwareIcon} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Cauvery End */}


                {/* E-Commerce Start */}
                
                <Grid item>
                    <Grid container direction="row"
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.projectsContainer}>


                        <Grid item style={{textAlign : matchesSM ? "center" : undefined}}>
                            <Typography variant="h4">
                                Clothes E-Commerce
                            </Typography>
                            <Typography variant="subtitle1">
                                Hats/Jackets/Mens
                            </Typography>
                            <Typography variant="subtitle1">
                                Easy Payment Options
                            </Typography>
                            <Button variant="outlined" component={Link} to="/ecommerce" className={classes.viewButton}>
                                <span style={{marginRight : 10}}>View Details</span>
                            </Button>
                        </Grid>

                        <Grid item style={{marginRight : matchesSM ? 0 : "5em" }}>
                            <img className={classes.icon} alt="zavod" src={zavod} />
                        </Grid>

                    </Grid>
                </Grid>
                {/* E-Commerce End */}


                {/* Nisarga Start */}
                
                <Grid item>
                    <Grid container direction="row"
                    justify={matchesSM ? "center" : undefined}
                    className={classes.projectsContainer}>
                        <Grid item 
                        style={{
                            marginLeft : matchesSM ? 0 : "5em" , 
                            textAlign : matchesSM ? "center" : undefined,
                            marginBottom : matchesSM ? 0 :"5em"}}>
                            <Typography variant="h4">
                                Nisarga Constructions
                            </Typography>
                            <Typography variant="subtitle1">
                                Buildings/Apartments
                            </Typography>
                            <Typography variant="subtitle1">
                                Group of Engineers
                            </Typography>
                            <Button variant="outlined" component={Link} to="/nisarga" className={classes.viewButton}>
                                <span style={{marginRight : 10}}>View Details</span>
                            </Button>
                        </Grid>

                        <Grid item>
                            <img className={classes.iconBuild} alt="construction" src={construction} />
                        </Grid>
                    </Grid>
                </Grid>
                {/* Nisarga End */}

            </Grid>
        </React.Fragment>
    )
}
