import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import apoorva from '../assets/apoorva.jpg';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    apoorva1 : {
        height: "25em",
        width: "25em",
        marginTop : "2rem",
        marginBottom : "2rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "20em",
            width: "20em",
            maxHeight: 200,
            maxWidth: 200,
            marginTop : "0.5em",
           // marginLeft : "-2rem"
          }
    },
    mainContainer : {
        backgroundColor : "black"
    },
    details : {
        fontFamily : 'Saira Condensed',
        color : theme.palette.common.gold ,
            fontSize : "4rem" ,
            alignItems : "center" ,
            marginLeft : "20px",
        [theme.breakpoints.down("md")] : {
            
            fontSize : "3rem" 
        },
        [theme.breakpoints.down("sm")] : {
            marginTop : "4rem",
            fontSize : "2.5rem" ,
            marginRight : "5rem"
        },
        [theme.breakpoints.down("xs")] : {
            marginTop : "3rem",
            fontSize : "1.8rem" ,
            marginRight : "1rem"
        }
      },
      button : {
          color : "white",
          backgroundColor : theme.palette.common.gold,
          borderRadius : 50 ,
          height : 45 ,
          width : 145 ,
          fontFamily : 'Viaoda Libre' ,
          fontSize : "1rem" ,
          "&:hover" : {
            backgroundColor : "white",
            color : theme.palette.common.gold
          },
          [theme.breakpoints.down("xs")] : {
            marginRight : "2rem",
            marginLeft : "1rem" ,
            height : 35 ,
          width : 105 
          },
          [theme.breakpoints.down("sm")] : {
            marginRight : "1rem",
            marginTop : "1rem",
            marginBottom : "1rem" ,
            fontSize : "0.85rem"
        }
      },
      TextContainer : {
          minWidth : "21.5em" ,
          marginLeft : "1em",
          [theme.breakpoints.down("sm")] : {
              marginLeft : "2rem",
              minWidth : "30em",
              marginBottom : "2em"
          },
          [theme.breakpoints.down("xs")] : {
            marginLeft : "-1rem",
            minWidth : "30em",
            marginBottom : "2em"
        }
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
        borderRadius : "4em",
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
    },
    insideContainer : {
        [theme.breakpoints.down("xs")] : {
            marginRight: 0
        }
    }
}))

export default function Home(props){

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <React.Fragment>


        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item >
                <Grid container direction={matchesXS ? "column" : "row"}  justify="flex-end" alignItems="center">

                    <Grid item sm >
                        <Typography variant="h3" align="center" className={classes.details}>
                                    Hello, I'm <br/>
                                    Mr. Apoorva A. Jakati <br/>
                                    I'm a Full Stack Web Developer
                        </Typography>
                    <Grid container justify="center">
                        <Grid item>
                        <Button variant="contained" 
                        component={Link} to="/about" 
                        onClick={() => props.setValue(2)}
                        className={classes.button}>About Me</Button>
                        </Grid>
                    </Grid>
                    </Grid>

                    <Grid item sm>
                    <Avatar alt="apoorva1" src={apoorva} className={classes.apoorva1}/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>


        </React.Fragment>
    );
}