import {
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
  Button,
  Paper,
  Avatar,
  Container,
  Toolbar,
  StylesProvider
  
} from "@material-ui/core";
import { Link} from "react-router-dom";
import React, { useState } from 'react';
import ExploreDropdownPopup from "../ExploreDropdownPopup";

const useStyles = makeStyles((theme) => ({
  anchorStyles: {
    color: '#00c853',
    marginRight: 16 ,
    fontSize:16
  }
}));


function Header() {

  const classes = useStyles();
  
  const [openPopup,setOpenPopup] = useState(false);
 
  return (
    
    <React.Fragment>
      
       
      
      <Toolbar
        component="nav"
       
      >
              
           <Avatar  src="/blinkist_icon.png"/>
           <Typography style={{ marginRight: 16 }}><b>           
            
            Blinkist</b>
          </Typography>
            
            <Link
            to="#"
            onClick={() => setOpenPopup(true)}
            href="#" style={{ marginRight: 16 }}  className={classes.anchorStyles} >
            Explore
          </Link>
        

          <Link
            to="/book/myLibrary"
            href='#' style={{ marginRight: 16 }} className={classes.anchorStyles}>
            MyLibrary
          </Link>
          <Link
            
            to="#"
            key="Highlights"
            variant="body2"
            href="#"
            className={classes.anchorStyles}
            style={{ marginRight: 16 }}
          >
            Highlights
          </Link>
          <Link
            to="/addBook"
            href='#' className={classes.anchorStyles} style={{ marginRight: 16 }}>
            Add Book
          </Link>

          <Link
           
            to="#"
            key="Account"
            href="#"
            className={classes.anchorStyles}
            style={{ marginRight: 16 }}
          >
            Account
          </Link>
       
      </Toolbar>

      
      
     
        <ExploreDropdownPopup 
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}        
        /> 
        
        
        
  </React.Fragment>
  );
}
export default Header;
