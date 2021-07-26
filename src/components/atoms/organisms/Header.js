import {
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
  Button,
  Paper,
  Avatar,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
import ExploreDropdownPopup from "./ExploreDropdownPopup";
import { FormatListBulletedOutlined } from "@material-ui/icons";




const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    
    
  },
  toolbarSecondary: {
    
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
  const [openPopup,setOpenPopup] = useState(false);
  const paperProps = {
    title:'Explore books on Entrepreneurship',
    description:'Everything you need to know about thriving on a shortering budget, making your first million,and hiring right from the start'
  };
  return (
    <>
       
     
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
           
           <Avatar  src="/blinkist_icon.png"/>
           <Typography style={{ marginRight: 16 }}><b>           
            
            Blinkist</b>
          </Typography>
          
            <Link
            onClick={() => setOpenPopup(true)}
            href="#" style={{ marginRight: 16 }}>
            Explore
          </Link>
        

          <Link
            to={{pathname: '/book/myLibrary'}} style={{ marginRight: 16 }}>
            MyLibrary
          </Link>
          <Link
            to="#"
            color="inherit"
            key="Highlights"
            variant="body2"
            href="#"
            className={classes.toolbarLink}
            style={{ marginRight: 16 }}
          >
            Highlights
          </Link>
          <Link
            to={{pathname: '/addBook'}} style={{ marginRight: 16 }}>
            Add Book
          </Link>

          <Link
            color="inherit"
            to=""
            key="Account"
            variant="body2"
            href="#"
            className={classes.toolbarLink}
            style={{ marginRight: 16 }}
          >
            Account
          </Link>
       
      </Toolbar>
     
     
        <ExploreDropdownPopup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}        
        /> 
         
    </>
  );
}
export default Header;
