import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import apoorva from '../assets/apoorva2.jpg';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import react from '../assets/react1.svg';
import mechanical from '../assets/mechanical1.svg';
import school from '../assets/school1.svg';
import twelve from '../assets/twelve.svg';
import programmer from '../assets/programmer.svg';
import workstation from '../assets/workstation.svg';
import Paper from '@material-ui/core/Paper';
import Skills from './Skills';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import revolutionBackground from "../assets/infoBackground.svg";


const useStyles = makeStyles(theme => ({
    apoorva : {
        height: "15em",
        width: "15em",
        marginTop : "2rem",
        marginBottom : "2rem",
        marginLeft : "15rem",
        marginRight : "10rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "0rem",
          marginleft : "-5rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "10em",
            width: "10em",
            maxHeight: 300,
            maxWidth: 300,
            marginRight : "1rem",
            marginLeft : "5rem",
            marginTop : "0.5em",
          }
    } ,
    mainContainer: {
        backgroundColor : "black"
    },
    info : {
        color : "white",
        maxWidth : "55em",
        marginLeft : "2em"
    },
    bodyContent : {
        textAlign : "left"
    },
    iconBlock : {
        marginRight : "30rem"
    },
    wordpress : {
     marginRight : "3rem"
    },
    heading : {
        color : "white" ,
        [theme.breakpoints.down("xs")] : {
            textAlign : "center"
          }
    },
    icon : {
        marginLeft : "2em",
        height : '5em',
        width : "5em",
        //borderRadius : "4em",
        [theme.breakpoints.down("xs")] : {
            marginRight : 0
        }
    },
    card : {
        backgroundColor : theme.palette.common.gross,
        boxShadow : theme.shadows[10],
        borderRadius : "2rem",
        padding : "1em",
        [theme.breakpoints.down("sm")] : {
            paddingTop : "3em" ,
            paddingBottom : "3em",
            paddingLeft : 0,
            paddingRight : 0,
            //borderRadius : "25%",
            width : "100%"
        },
        [theme.breakpoints.down("xs")] : {
            paddingTop : "0" ,
            paddingBottom : "0",
            paddingLeft : "0.5em",
            paddingRight : "0.5em",
            marginLeft : "1.2em",
            //borderRadius : "25%",
            width : "80%"
        }
    },
    summary : {
        borderRadius : "50%",
        backgroundColor : theme.palette.common.gold,
        marginTop : "2em"
    },
    paper : {
        marginTop : "3rem",
        marginLeft : '3rem',
        marginRight : '3rem' ,
        marginBottom : "3rem",
        backgroundColor : "#20c9a2",
        borderRadius : "0rem" ,
       // backgroundImage: `url(${revolutionBackground})`,
        [theme.breakpoints.down("sm")]: {
            //marginTop : "5rem",
            marginRight : 0,
            marginLeft : 0
        },
        [theme.breakpoints.down("xs")]: {
            marginRight : 0,
            marginLeft : "-4rem",
            marginTop : 0
        }
    },
    firstCard : {
        marginTop : "3rem",
        marginLeft : "2rem",
        marginBottom : "3rem",
        marginRight : "2rem",
        [theme.breakpoints.down("xs")]: {
            marginTop : "0",
            marginRight : 0,
            marginLeft : "5rem"
        }
    },
    secondCard : {
        marginRight : "5rem"
    },
    summaryPaper : {
        marginTop : "3rem",
        backgroundColor : theme.palette.common.gross
    },
    summaryCard : {
        marginTop : "3rem",
        marginLeft : "10rem",
        marginBottom : "3rem",
        marginRight : "3rem"
    },
    summaryApoorva : {
        height: "15em",
        width: "15em",
        marginTop : "2rem",
        marginBottom : "2rem",
        marginLeft : "2rem",
        [theme.breakpoints.down("sm")]: {
          height: "10em",
          width: "10em",
          maxHeight: 300,
          maxWidth: 300,
          marginTop : "3rem",
          marginBottom : "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            height: "10em",
            width: "10em",
            maxHeight: 300,
            maxWidth: 300,
            marginRight : "9rem",
            marginTop : "0.5em"
          }
    },
    bodyText : {
        color : "grey" , 
        fontSize : "1.5rem" ,
        fontFamily : "Viaoda Libre",
        fontWeight : "700",
        [theme.breakpoints.down("xs")]:{
            textAlign : "center",
            fontSize : "1rem"
        }
    },
    subHeading : {
        [theme.breakpoints.down("xs")]:{
            textAlign : "center",
            fontSize : "1rem"
        }
    },
    skillsPaper : {
        marginTop : "3rem",
        marginLeft : '3rem',
        marginRight : '3rem' ,
        backgroundImage: `url(${revolutionBackground})`,   
    },
    button : {
       
        fontSize : "2em" ,
        backgroundColor : "white" ,
        color : theme.palette.common.gross,
        marginBottom : "2em",
        "&:hover" : {
            color : "white",
            backgroundColor : theme.palette.common.gross
        },
        [theme.breakpoints.down("xs")]:{
            fontSize : "1em",
            marginLeft : "4em"
        }
    },
    h3 : {
        ...theme.typography.h3 ,
        [theme.breakpoints.down("xs")]:{
            textAlign : "center",
            fontSize : "1rem"
        }
    },
    span : {
        color : "skyblue"
    }
}))

export default function About(props) {
    
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <React.Fragment>
            
            <Grid container direction="column" alignItems="center" justify="center" className={classes.mainContainer}>
            <Paper elevation={3} className={classes.paper}> 
                <Grid item>
                    <Typography variant="h2" 
                    style={{ fontSize : matchesSM ? "3rem" : undefined  , 
                    //minWidth : matchesXS ? "10rem" : 0 ,
                    marginLeft : matchesSM ? "4rem" : undefined,
                    marginTop : matchesSM ? "4rem" : undefined,
                    textAlign : "center" ,
                    }}>
                        About Myself
                    </Typography>
                </Grid>

            <Grid item>
            {/* <Paper elevation={24} className={classes.paper} square="true"> */}
                <Grid container 
                direction={matchesXS ? "column" : "row"} 
                justify={matchesXS ? "center" : "flex-start"} 
                alignItems="center" >

                <Grid item   >
                    <Avatar alt="apoorva" variant="circle" src={apoorva} className={classes.apoorva}/>
                </Grid>


                    <Grid item className={classes.firstCard}>
                        <Grid container direction="column" >
                            <Grid item style={{marginBottom : matchesXS ? "0" : "2em" ,
                                                marginTop : matchesXS ? "2em" : 0}}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                        <Grid item >
                                        <Typography variant="body1" className={classes.bodyText}>
                                        <span className={classes.span}> Name : </span> Mr.Apoorva A. Jakati
                                        </Typography>
                                        <Typography variant="body1" className={classes.bodyText}>
                                            <span className={classes.span}> DOB :  </span> 29/07/1993
                                        </Typography>
                                        <Typography variant="body1" className={classes.bodyText}>
                                            <span className={classes.span}> Phone :  </span> +91 8892510285
                                        </Typography>
                                        <Typography variant="body1" className={classes.bodyText}>
                                            <span className={classes.span}>  Email : </span> apoorva.jakati@gmail.com
                                        </Typography>
                                        <Typography variant="body1" className={classes.bodyText}>
                                            <span className={classes.span}>  Languages : </span> English , Kannada
                                        </Typography>
                                        <Typography variant="body1" className={classes.bodyText}>
                                            <span className={classes.span}>  Address : </span> #646,Vithobha Nivas,1st main , 4th cross ,<br/>
                                             pipeline road , T. Dasarahalli, Bangalore, KA 560057
                                        </Typography>
                                        </Grid> 
                                        </CardContent>
                                    </Card>
                            </Grid>
                            {/* <Grid item>
                                     <Card className={classes.card}>
                                        <CardContent>
                                        <Grid item >
                                        <Typography variant="h6">
                                            <span style={{color : "grey"}}> Phone :  </span> +91 8892510285
                                        </Typography>
                                        <Typography variant="h6">
                                            <span style={{color : "grey"}}>  Email : </span> apoorva.jakati@gmail.com
                                        </Typography>
                                        </Grid> 
                                        </CardContent>
                                     </Card>
                            </Grid> */}



                        </Grid>

                    </Grid>      
                </Grid>            
            {/* </Paper> */}
            </Grid>  

            <Grid>
            {/* <Paper elevation={3} className={classes.paper} square="true"> */}
                <Grid container justify={matchesXS ? "center" : "center"} alignItems="center" >


                    <Grid item className={classes.firstCard}>
                            <Grid style={{  textAlign : "center" , marginBottom : "1rem" }}>
                            <Typography variant="h3" >
                          Professional Summary
                        </Typography>
                            </Grid>

                    <Card className={classes.card}>
                        <CardContent>
                        <Grid item container direction="column" justify="center" alignItems="center">
                        <Typography variant="body1" className={classes.bodyText} paragraph>
                        Have 2 years & 10 months of experience in software development using Java, J2EE and
                        Javascript technologies.
                        </Typography>
                        
                        <Typography variant="body1" className={classes.bodyText} paragraph>
                         Also experienced in Spring MVC, Hibernate frameworks, SQL queries
                        (using MySql) & Tomcat 8.x. Proficient with tools such as Eclipse, VS Code, Ant and Maven.
                        </Typography>
                        
                        </Grid> 
                        </CardContent>
                    </Card>
                    </Grid>  

                    

    
                </Grid>            
            {/* </Paper> */}
            </Grid> 

            <Grid item className={classes.firstCard}>
                            <Grid style={{  textAlign : "center" , marginBottom : "1rem"}}>
                            <Typography variant="h3" >
                          Work History
                        </Typography>
                            </Grid>

                            

                    <Card className={classes.card}>
                        <CardContent>
                        
                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>


                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem",
                                                marginBottom : matchesSM ? 0 : "2rem" }}>
                                    <Grid container direction="column"   alignItems="center">

                                        
                        <Grid item style={{marginLeft : matchesSM ? "-2em" : "3em"}}>
                                <img className={classes.icon} alt="programmer" src={programmer} />
                            </Grid>
                                        <Grid item>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            Software Engineer
                                            </Typography>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            Imonitor Solutions (Bangalore, India)
                                            </Typography>
                                            <Typography variant="h3" className={classes.subHeading} >
                                            Sep 2017 - July 2019
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            <span className={classes.span}>Project Name : Home Automation </span>
                                            </Typography>
                                            <Typography variant="body1" className={classes.bodyText} paragraph>
                                            I have developed and tested UI, APIs, status, alerts, alarms, device configurations &
                                            control functionalities on IOT devices like AC, Dimmer, Security Systems, Switches,
                                            Dimmers, Cameras, LCD Remotes etc.
                                          </Typography>

                                          <Typography variant="subtitle1" className={classes.bodyText}>
                                            <span className={classes.span}>Project Name  : Alexa & Google Home </span>
                                            </Typography>
                                            <Typography variant="body1" className={classes.bodyText} paragraph>
                                            Implemented smart home speech to text conversions for Alexa and Google Home device
                                            using Node API and restful web services.
                                          </Typography>
                                      </Grid>
                                      
                                    
                                    <Grid item>
                                    <Typography variant="h4" className={classes.bodyText} >
                                           -----------------------------------------------------------------------------------------------------------

                                    </Typography>
                                    </Grid>

                                    <Grid item style={{marginLeft : matchesSM ? "-2em" : "3em"}}>
                                <img className={classes.icon} alt="workstation" src={workstation} />
                                   </Grid>

                                      <Grid item>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            Graduate Apprentice Trainee
                                            </Typography>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            Bharat Electronics Ltd. (Bangalore, India)
                                            </Typography>
                                            <Typography variant="h3" className={classes.subHeading} >
                                            Feb 2016 - Feb 2017
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            <span className={classes.span}>Project Name : Human Resource Information System</span> 
                                            </Typography>
                                            <Typography variant="body1" className={classes.bodyText} paragraph>
                                            Developed UI and backend functionalities to retrieve attendance, payroll, identification
                                            and other details for a given period of time using Java, Struts and HTML.
                                          </Typography>

                                          <Typography variant="subtitle1" className={classes.bodyText}>
                                          <span className={classes.span}>Project Name : Food Order Management System </span>
                                            </Typography>
                                            <Typography variant="body1" className={classes.bodyText} paragraph>
                                            Developed a food order management application in integration with the premises canteen
                                            exclusively for the company staff.
                                          </Typography>
                                      </Grid>

                                      
                                    </Grid> 
                            </Grid>

                        


                            </Grid>     
                        </CardContent>
                    </Card>
                    </Grid> 
            
            <Grid item>
            {/* <Paper elevation={3} className={classes.paper}> */}
                <Grid container direction="column" justify="space-between" alignItems="center" >

                    

                    <Grid item className={classes.firstCard}>

                    <Grid item style={{ textAlign : "center" , marginBottom : "1rem"}}>
                        <Typography variant="h3"  >
                            Education
                        </Typography>
                    </Grid> 

                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>


                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="mechanical" src={mechanical} />
                            </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem",
                                                marginBottom : matchesSM ? 0 : "2rem" }}>
                                    <Grid container direction="column"   alignItems="center">
                                        <Grid item>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            Bachelor in Engineering
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            Mechanical Engineering
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            Sri Krishna Institute of Technology
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md style={{marginBottom : matchesSM ? "3rem" : 0 }}>
                            <Typography variant="h4" className={classes.bodyText}>
                               2011 - 2015
                            </Typography>
                            </Grid>
                            </Grid>

                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="twelve" src={twelve} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "3.5rem" , 
                                                marginLeft : matchesSM ? "2rem" : "5rem" ,
                                                marginBottom : matchesSM ? 0 : "2rem"
                                                }}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            PUC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            PCMB (72.25%)
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            Sheshadripuram Composite PU College
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md style={{marginBottom : matchesSM ? "3rem" : 0 }}>
                            <Typography variant="h4" className={classes.bodyText}>
                               2009 - 2011
                            </Typography>
                            </Grid>
                            </Grid>

                            <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="school" src={school} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "7.5rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h3" className={classes.subHeading}>
                                            SSLC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.bodyText}>
                                            St. Mary's High School (90.40%)
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.bodyText}>
                               2009
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid>  

                    {/* <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="react" src={react} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "10rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            PUC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            PCMB (72.25%)
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            Sheshadripuram Composite PU College
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.educationText}>
                               2009 - 2011
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid>  */}

                    {/* <Grid item className={classes.firstCard}>
                    <Card className={classes.card}>
                        <CardContent>
                        <Grid container direction={matchesSM ? "column" : "row"}
                             alignItems={matchesSM ? "center" : undefined} justify={matchesSM ? "center" : undefined}>

                            <Grid item style={{marginRight : matchesSM ? "2em" : undefined}}>
                                <img className={classes.icon} alt="react" src={react} />
                           </Grid>

                            <Grid item  style={{marginRight : matchesSM ? "2rem" : "10rem" , marginLeft : matchesSM ? "2rem" : "5rem"}}>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" className={classes.educationText}>
                                            SSLC
                                            </Typography>
                                            <Typography variant="subtitle1" className={classes.educationText}>
                                            St. Mary's High School (90.40%)
                                            </Typography>
                                    </Grid>
                                    </Grid> 
                            </Grid>

                            <Grid item md>
                            <Typography variant="h4" className={classes.educationText}>
                               2009
                            </Typography>
                            </Grid>
                            </Grid>
                        
                        </CardContent>
                    </Card>
                    </Grid> */}
   
                </Grid>            
            {/* </Paper> */}
            </Grid> 

            <Grid item >
            {/* <Paper elevation={3} className={classes.skillsPaper}> */}
            
                <Grid container direction="column" alignItems="center">
                   
                <Grid item style={{  marginLeft : "3em" , marginBottom : matchesXS ? "1rem" : "-3rem"}}>
                       <Typography variant="h3" >
                          Skills
                        </Typography>
                    </Grid>

                    <Grid item>
                    <Skills />
                    </Grid>

                    
                </Grid>
              
                        
            {/* </Paper> */}
            </Grid>
                
            <Grid item container direction="column" alignItems="center">
            <Grid item>
                        <Button className={classes.button} variant="outlined">Click Here To Download CV</Button>
            </Grid>
            </Grid>
            
            </Paper> 
            </Grid>
           
        </React.Fragment>
    )
}