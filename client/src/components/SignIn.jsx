import React , {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import revolutionBackground from "../assets/infoBackground.svg";
import comm1 from '../assets/e_commerce/comm_1.JPG';
import comm2 from '../assets/e_commerce/comm_2.JPG';
import comm3 from '../assets/e_commerce/comm_3.JPG';
import comm4 from '../assets/e_commerce/comm_4.JPG';
import comm5 from '../assets/e_commerce/comm_5.JPG';
import comm6 from '../assets/e_commerce/comm_6.JPG';
import comm7 from '../assets/e_commerce/comm_7.JPG';
import comm8 from '../assets/e_commerce/comm_8.JPG';
import comm9 from '../assets/e_commerce/comm_9.JPG';
import comm10 from '../assets/e_commerce/comm_10.JPG';
import comm11 from '../assets/e_commerce/comm_11.JPG';


const useStyles = makeStyles(theme => ({
     rev : {
         height : "100%",
         width : "70%",
         [theme.breakpoints.down("sm")] : {
            height : "100%",
            width : "100%"
         } 
     },
     carousel : {
        marginTop : "2em",
        [theme.breakpoints.down("xs")] : {
            marginTop : "2em"
         } 
     },
     mainContainer : {
         backgroundColor : theme.palette.common.gold, 
     },
     heading : {
      textAlign : "center" ,
      
      fontSize : "2em",
      color : 'red'
     },
     link : {
        textDecoration : "none",
        
     }
}));

export default function SignIn(props) {

    const classes = useStyles();

    const screenshots = [
        {alt : "comm1" , imageUrl: "comm1"},
        {alt : "comm2" , imageUrl: {comm2}},
        {alt : "comm3" , imageUrl: {comm3}},
        {alt : "comm4" , imageUrl: {comm4}},
        {alt : "comm5" , imageUrl: {comm5}},
        {alt : "comm6" , imageUrl: {comm6}},
        {alt : "comm7" , imageUrl: {comm7}},
        {alt : "comm8" , imageUrl: {comm8}},
        {alt : "comm9" , imageUrl: {comm9}},
        {alt : "comm10" , imageUrl: {comm10}},
        {alt : "comm11" , imageUrl: {comm11}},

    ]

    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.mainContainer}>

            <Grid item style={{marginTop : "5em"}}>
                <Typography variant="h2" className={classes.heading}>
                          Clothes Shopping
                </Typography>
            </Grid>

            <Grid item >
                <Typography variant="subtitle1" className={classes.heading}>
                          Great Discounts
                </Typography>
            </Grid>

            <Grid item component={"a"} href="https://crwn-apoorva.herokuapp.com" rel="noopener noreferrer" target="_blank" className={classes.link}>
            <Typography variant="subtitle1" className={classes.heading} >
                         Visit Site
            </Typography>
            </Grid>

                <Grid item className={classes.carousel}>
                <Carousel 
                easing="cubic-bezier(1,.15,.55,1.54)" 
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)" 
                //enableAutoPlay 
                autoPlaySpeed={1500}
                transitionMs={700}>
                    
                        <img className={classes.rev} alt="123" src={comm1} />
                        <img className={classes.rev} alt="123" src={comm2} />
                        <img className={classes.rev}alt="123" src={comm3} />
                        <img className={classes.rev} alt="123" src={comm4} />
                        <img className={classes.rev} alt="123" src={comm5} />
                        <img className={classes.rev} alt="123" src={comm6} />
                        <img className={classes.rev} alt="123" src={comm7} />
                        <img className={classes.rev}alt="123" src={comm8} />
                        <img className={classes.rev} alt="123" src={comm9} />
                        <img className={classes.rev} alt="123" src={comm10} />
                        <img className={classes.rev} alt="123" src={comm11} />
               </Carousel>
                </Grid>

                

            </Grid>
        </React.Fragment>
    )
}