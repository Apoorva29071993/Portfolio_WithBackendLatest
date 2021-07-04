import React  from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useMediaQuery , useTheme, AppBar, Toolbar} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import locationIcon from '../assets/location2.svg';
import { useState } from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import ReactGA from "react-ga";

const useStyles = makeStyles(theme => ({
    textContainer1 : {
        color : "black",
        fontSize : "3rem",
        [theme.breakpoints.down("sm")] : {
            alignItems : "center",
            marginTop : "2rem",
            fontSize : "1.5rem",
        },
        [theme.breakpoints.down("xs")] : {
            alignItems : "center",
            marginTop : "0rem",
            fontSize : "1.5rem",
        }
    },
    textContainer2 : {
        color : "black",
        textAlign : "center",
        marginTop : "2rem",
        fontSize : "5rem",
        [theme.breakpoints.down("sm")] : {
            alignItems : "center",
            fontSize : "3rem",
            marginTop : "5rem",
            textAlign : "center"
        }
    },
    textContainer3 : {
        color : "white ",
        fontSize : "1.2rem",
        [theme.breakpoints.down("sm")] : {
            fontSize : "1.2rem",
           // marginTop : "1rem",
           // marginBottom : "-1rem",
      
            textAlign : "center"
        },
        [theme.breakpoints.down("xs")] : {
            fontSize : "1.2rem",
        }
    },
    textContainer4 : {
        color : "black",
        textAlign : "center",
        marginTop : "2rem",
        fontSize : "5rem",
        [theme.breakpoints.down("sm")] : {
            alignItems : "center",
            fontSize : "3rem",
            marginTop : "0rem",
            textAlign : "center",
            marginBottom : "2rem"
        }
    },
    gridItem : {
        marginBottom : "1rem",
        [theme.breakpoints.down("xs")] : {
            
        }
    },
    message : {
        border: `2px solid ${theme.palette.common.white}`,
        marginTop : "5em",
        borderRadius : 5
    },
    sendButton : {
        borderRadius : 10,
        height : 45 ,
        width : 245 ,
        fontSize : "1rem" ,
        color : "black" ,
        backgroundColor : theme.palette.common.white,
        "&:hover" : {
            backgroundColor : "gold",
            color : theme.palette.common.white
        }
    },
    bodyText : {
        color : "red" , 
        fontSize : "2.5rem" ,
        fontFamily : "Saira Condensed",
        fontWeight : "700",
        [theme.breakpoints.down("xs")]:{
            textAlign : "center",
            fontSize : "1.2rem"
        }
    }
}))

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [name , setName] = useState("");

    const [email , setEmail] = useState("");
    const [emailHelper , setEmailHelper] = useState("");

    const [phone , setPhone] = useState("");
    const [phoneHelper , setPhoneHelper] = useState("");

    const [message , setMessage] = useState("");

    const [loading , setLoading] = useState(false);

    const [alert , setAlert] = useState({
        open : false ,
        message : "" ,
        backgroundColor : ""
    })

    const [alertMessage , setAlertMessage] = useState("");

    const [data, setData] = React.useState(null);


    const onChange = event => {
        let valid ;

        switch(event.target.id) {
            case "email" : {
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                .test(event.target.value)

                if (!valid) {
                    setEmailHelper("Invalid Email")
                }
                else {
                    setEmailHelper("")
                }

                break;
            }

            case "phone" : {
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                .test(event.target.value)

                if (!valid) {
                    setPhoneHelper("Invalid Phone Number")
                }
                else {
                    setPhoneHelper("")
                }
                break;
            }

            default : break;    

        }
    }

    const onConfirm = () => {
        setLoading(true);
   
    console.log(name + email + phone + message);

    axios({
        url : 'http://localhost:3001/api',
        method : 'post' ,
        data : {
          name: name,
          email: email,
          phone: phone,
          message: message
        }})
        .then(res => {
            console.log("Received : " + res);
          setLoading(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setAlert({
            open: true,
            backgroundColor: "#4BB543"
          });
          setAlertMessage("Mail sent successfully")
        })
        .catch(err => {
            console.log("Send grid error" + err);
          setLoading(false);
          setAlert({
            open: true,
            backgroundColor: "#FF3232"
          });
          setAlertMessage("Something went wrong, please try again!");
          console.log(err);
        });
      };

      const buttonContents = (
          <React.Fragment>
            Send Message
          </React.Fragment>
      )

    return (
        <React.Fragment>
            <Grid container direction="column" alignItems="center" style={{backgroundColor : theme.palette.common.gold}}>

                <Grid item container direction="column" alignItems="center" justify="center">

                <Grid item className={classes.gridItem}>    
                        <Typography variant="h3" className={classes.textContainer2} >
                            Contact Info
                        </Typography>
                        </Grid>

                    <Grid item >
                        <Typography variant="body1" className={classes.bodyText}>
                            Feel free to contact me anytime.
                        </Typography>
                    </Grid>
                </Grid>


                <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop : matchesSM ? 0 : "3rem"}}>
                    <Grid item container direction="column" alignItems={matchesSM ? "center" : undefined} 
                    justify="center" md style={{marginLeft : matchesSM ? 0 :  "2rem"}}>
                        

                        <Grid item className={classes.gridItem}>
                        <Typography variant="body1" className={classes.bodyText}>
                            Always available for freelance work if the right project
                            comes along. feel free to contact me !
                        </Typography>
                        </Grid>

                        <Grid item container direction="row" className={classes.gridItem} >
                            <Grid item >
                                <img alt="location" src={emailIcon}  
                                style={{marginRight : "1em" ,
                                        marginLeft : matchesXS ? "2em" : 0 ,
                                        marginTop : matchesXS ? "0.5em" : 0 ,
                                       verticalAlign : "bottom"}} />
                            </Grid>

                            <Grid item >
                                <Typography variant="body1" className={classes.textContainer3}>
                               <a style={{textDecoration : "none" , color : "inherit"}} href="mailto:apoorva.jakati@gmail.com"> apoorva.jakati@gmail.com</a>
                            </Typography>
                            </Grid>
                        
                        </Grid>

                        <Grid item container direction="row" className={classes.gridItem} justify="flex-start">
                            <Grid item > 
                                <img alt="phone" src={phoneIcon} 
                                style={{marginRight : "1em" ,
                                 marginLeft : matchesXS ? "5em" : 0,
                                 marginTop : matchesXS ? "0.2em" : 0}}/> 
                            </Grid>

                            <Grid item >
                                <Typography variant="body1" className={classes.textContainer3}>
                                <a style={{textDecoration : "none" , color : "inherit"}} href="tel:8892510285">+91 8892510285 </a>
                            </Typography>
                            </Grid>
                        
                        </Grid>
                    </Grid>

                    <Grid item container justify="center" alignItems="center" direction="column" md style={{ marginTop : matchesSM ? "3rem" : undefined}}>
                        <Grid item>
                            <Grid container direction="column" >
                            <Grid item>
                        <Typography variant="h3" className={classes.textContainer4}>
                            Mail me
                        </Typography>
                        </Grid>

                        <Grid item container direction="column" style={{maxWidth : "20em"}}>
                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Name" id="name" fullWidth value={name} 
                            onChange={event => setName(event.target.value)}/>
                            </Grid>

                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Email" id="email" 
                            error={emailHelper.length !== 0 }
                            helperText={emailHelper}
                            fullWidth value={email}
                            onChange={onChange}/>
                            </Grid>

                            <Grid item style={{marginBottom : "0.5em"}}>
                            <TextField label="Phone" id="phone" 
                            error={phoneHelper.length !== 0 }
                            helperText={phoneHelper}
                            fullWidth value={phone}
                            onChange={onChange}/>
                            </Grid>
                        </Grid>

                        <Grid item style={{maxWidth : "20em"}}>
                            <TextField rows={6} multiline id="name" value={message} 
                            className={classes.message}
                            fullWidth
                            InputProps={{disableUnderline : true}}
                            onChange={event => setMessage(event.target.value)}/>
                        </Grid>

                        <Grid item container justify="center" style={{marginTop : "2em" , marginBottom : "2em"}}>
                            <Button variant="contained" 
                            disabled={ 
                                name.length === 0 || 
                                message.length === 0 ||
                                phoneHelper.length !== 0 || 
                                email.length === 0 ||
                                emailHelper.length !== 0 }
                            className={classes.sendButton}
                            onClick={onConfirm} >
                               {loading ? <CircularProgress size={30}/> : buttonContents}
                            </Button>


                        </Grid>
                            </Grid>
                        </Grid>

                        
                        
                    </Grid>

                </Grid>

            </Grid>

             <Snackbar open={alert.open} message={alertMessage} 
             ContentProps={{style : {backgroundColor : alert.backgroundColor}}}  
             anchorOrigin={{vertical : "top" , horizontal: "center"}}
             onClose={() => setAlert({...alert , open : false})}     
             autoHideDuration={4000} />            

        </React.Fragment>
    )
}