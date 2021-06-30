import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/aj.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import {Link}  from 'react-router-dom';
import { useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import batman from '../../assets/ether.svg';


function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  const useStyles = makeStyles(theme => ({
      appbar : {
        zIndex : theme.zIndex.modal + 1
      },
      toolbarMargin : {
          ...theme.mixins.toolbar,
          marginBottom : "3em" ,
          [theme.breakpoints.down("md")] : {
            marginBottom : "2em"
        },
        [theme.breakpoints.down("xs")] : {
            marginBottom : "1.25rem",
            marginRight : "5rem"
        }
      },
      logo : {
          height : "5rem",
          width : "7rem" ,
         // marginRight : "0.5rem",
          [theme.breakpoints.down("md")] : {
              height : "6rem"
          },
          [theme.breakpoints.down("xs")] : {
              height : "4rem"
          }
      },
      tabContainer : {
          marginLeft : "auto"
      },
      tab : {
          ...theme.typography.tab,
          minWidth : 10 ,
          marginLeft : "25px"
      },
      button : {
          borderRadius : "50px",
          marginLeft : "50px",
          marginRight : "25px",
          fontFamily : 'Viaoda Libre',
          fontSize : "25px",
          textTransform : "none",
          height : "45px",
          color : "white"
      },
      logoContainer : {
          padding : 0 ,
          height : "7rem",
          "&:hover" : {
              backgroundColor : "transparent"
          }
      },
      menu : {
          backgroundColor : theme.palette.common.gross,
          color : theme.palette.common.white,
          borderRadius : "0px"
      },
      menuItem : {
          ...theme.typography.tab,
          opacity : 0.7,
          "&:hover" : {
              opacity : 1
          }
      },
      portfolio : {
        fontFamily : 'Viaoda Libre',
            fontSize : "4rem" ,
            marginLeft : "2rem" , 
            marginBottom : "6px",
        [theme.breakpoints.down("md")] : {
            height : "6rem",
            fontSize : "3.5rem" 
        },
        [theme.breakpoints.down("xs")] : {
            height : "5rem",
            fontSize : "2.75rem" ,
            marginLeft : "0.2rem",
            marginTop : "2rem"
        }
      },
      drawerIcon : {
        height : "50px",
        width : "50px"
      },
      drawerIconContainer : {
          marginLeft : "auto" ,
        "&:hover" : {
            backgroundColor : "transparent"
        }  
      },
      drawer : {
          backgroundColor : theme.palette.common.gross,
          marginTop : "3em"
      },
      drawerItem : {
          ...theme.typography.tab,
          color : "white",
          opacity : 0.7
      },
      drawerItemEstimate : {
          backgroundColor : theme.palette.common.gold
      },
      drawerItemSelected : {
          "& .MuiListItemText-root" : {
            opacity : 1
          }  
      }
  }));  
  

export default function Header(props) {

    const classes = useStyles();
    const theme = useTheme();

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer , setOpenDrawer] = useState(false);
    
    const [anchorEl , setAnchorEl] = useState(null);
    const [openMenu , setOpenMenu] = useState(false);
    

    const handleChange = (e , newValue) =>{
        props.setValue(newValue);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e , i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        console.log(i);
        props.setSelectedIndex(i);
    }

    const handleClose =(e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [{name : "MyProjects" , link : "/myprojects" , activeIndex : 1 , selectedIndex : 0} ,
                        {name : "Cauvery Enterprises" , link : "/cauvery" , activeIndex : 1 , selectedIndex : 1} ,
                        {name : "Clothes E-Commerce" , link : "/ecommerce" , activeIndex : 1 , selectedIndex : 2} , 
                        {name : "Nisarga Constructions" , link : "/nisarga" , activeIndex : 1 , selectedIndex : 3}]

    const routes = [{name : "Home" , link : "/" , activeIndex : 0} ,

                    {name : "MyProjects" , link : "/myprojects" , activeIndex : 1 , 
                    ariaOwns : anchorEl ? "simple-menu" : undefined ,
                    ariaPopup : anchorEl ? "true" : undefined ,
                    mouseOver : event => handleClick(event)
                    },

                    {name : "About" , link : "/about" , activeIndex : 2},
                    {name : "Hobbies" , link : "/hobbies" , activeIndex : 3},
                    {name : "ContactMe" , link : "/contact" , activeIndex : 4}];                    

    useEffect(() => {

        [...menuOptions , ...routes].forEach((route) => {
            switch(window.location.pathname) {
                case `${route.link}` : {
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                }
                break;

                default : 
                break;
            }
        })
    
    } , [props.value , menuOptions , props.selectedIndex , routes , props])

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value} onChange={handleChange} indicatorColor="secondary" className={classes.tabContainer}>
                   
                   {routes.map((route , index) => (
                       <Tab 
                       key={`${route}${index}`}
                       className={classes.tab} 
                       component={Link} to={route.link}
                       label={route.name}
                       aria-owns={route.ariaOwns}
                       aria-haspopup={route.ariaPopup}
                       onMouseOver={route.mouseOver}></Tab>
                   ))}
                   

            </Tabs>

                <Button variant="contained" color="secondary" component={Link} to="/signin" className={classes.button}>
                    Sign In
                </Button>

                <Menu id="simple-menu" 
                anchorEl={anchorEl} open={openMenu} 
                onClose={handleClose} 
                classes={{paper : classes.menu}}
                elevation={0}
                keepMounted
                style={{zIndex : 1302}}
                MenuListProps={{onMouseLeave : handleClose}}>
                   
                   {menuOptions.map((menu , i) => (
                       <MenuItem key={`${menu}${i}`} component={Link} 
                       to={menu.link} 
                       classes={{root : classes.menuItem}}
                       onClick={(event) => {handleMenuItemClick(event , i); props.setValue(1); handleClose()}}
                       selected={i === props.selectedIndex && props.value === 1}>
                           {menu.name}
                       </MenuItem>
                    ))}
                    
                </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
            open={openDrawer} 
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{paper : classes.drawer}}>

                <div className={classes.toolbarMargin} />

                <List disablePadding>
                {routes.map(route => (
                    <ListItem 
                    key={`${route}${route.activeIndex}`}
                    onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} 
                    divider button 
                    component={Link} to={route.link}
                    selected={props.value === route.activeIndex}
                    classes={{selected : classes.drawerItemSelected}}>
                        <ListItemText disableTypography
                        className={classes.drawerItem}>
                            {route.name}
                        </ListItemText>
                    </ListItem>
                ))}


                    <ListItem 
                    onClick={() => {setOpenDrawer(false); props.setValue(5)}}  
                    divider button 
                    component={Link} to='/signin' 
                    className={classes.drawerItemEstimate}
                    selected={props.value === 5}
                    classes={{root : classes.drawerItemSelected , selected : classes.drawerItemSelected}}>
                        <ListItemText className={classes.drawerItem} disableTypography>SignIn</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );


    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar disableGutters>
                <Button component={Link} to="/" className={classes.logoContainer} onClick={() => props.setValue(0)} disableRipple>
                <img src={batman} alt="mylogo" className={classes.logo}/> 
                </Button> 

                {/* Using mediaquert change the marginleft to 5rem */}
                <Typography variant="h2" className={classes.portfolio} color="secondary"
                 >
                 Portfolio
                </Typography>

                {matches ? drawer : tabs}
                
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}