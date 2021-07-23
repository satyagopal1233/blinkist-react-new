import {
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
  Button,
  Link,
  Paper,
  Avatar
} from "@material-ui/core";

import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExploreDropdown from "../../molecules/ExplorerDropdown";
import PaperComponent from "../PaperComponent";
import "@fontsource/raleway";
import { fontWeight } from "@material-ui/system";




const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    
    
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    
    
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
   
  },
}));

function Header() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const paperProps = {
    title:'Explore books on Entrepreneurship',
    description:'Everything you need to know about thriving on a shortering budget, making your first million,and hiring right from the start'
  };
  return (
    <>
      {/*  <AppBar position="sticky"  className={classes.appBar}>
        <Tabs aria-label="simple tabs example">
          <Tab  label="Blinkist" >
               

          </Tab>
          <Tab icon={<SearchIcon />} />
          <Tab label="Explore" />
          <Tab label="My Library" />
          <Tab label="Highlights" />
          <Tab label="Account"  style={{flexGrow:1}}/>
        </Tabs>
      </AppBar> 
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">Blinkist</Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button>Explore</Button>
          <Button>My Library</Button>
          <Button>Highlights</Button>
          <Button style={{ flexGrow: 1 }}>Account</Button>
        </Toolbar>
      </AppBar>*/}
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
           
           <Avatar  src="/blinkist_icon.png"/>
            <Link
            color="inherit"
            noWrap
            key="Blinkist"
            variant="h6"
            fontWeight="bold"
            href="#"
            className={classes.toolbarLink}
            >      
            
            Blinkist
          </Link>
            <Link
            onClick={() => setShow(prev => !prev)}
            to=""
             href="#">
            Explore
          </Link>
        

          <Link
            to=""
             href="/book/myLibrary">
            MyLibrary
          </Link>
          <Link
            color="inherit"
            noWrap
            key="Highlights"
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Highlights
          </Link>
          <Link
            color="inherit"
            noWrap
            key="Account"
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Account
          </Link>
       
      </Toolbar>
      {show &&  
        <ExploreDropdown/>  }
    </>
  );
}
export default Header;
