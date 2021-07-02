import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor : "transparent",
    },
    firstContainer: {
        marginTop : "5em",
        marginBottom : "5em" ,
        [theme.breakpoints.down("xs")] : {
            
        }
    },
    card : {
        backgroundColor : theme.palette.common.gross,
        boxShadow : theme.shadows[10],
        borderRadius : "5%" ,
        padding : "0.5em",
        marginRight : "1rem",
        [theme.breakpoints.down("xs")] : {
            paddingTop : 0 ,
            paddingBottom : 0,
            paddingLeft : 0,
            paddingRight : 0,
            borderRadius : 0,
            marginRight : "0",
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
            marginTop : "5em",
        
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
            marginLeft : 0
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
            <Grid container direction="column" alignItems="center" className={classes.mainContainer}>
                
                <Grid item className={classes.firstItem}>
                 <Typography variant="h4">
                     Hobbies
                </Typography>
                </Grid>
               

             

            </Grid>
        </React.Fragment>
    )
}