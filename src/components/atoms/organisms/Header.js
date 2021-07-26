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
  Link
} from "@material-ui/core";

import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExploreDropdown from "../../molecules/ExplorerDropdown";
import PaperComponent from "../PaperComponent";
import { fontWeight } from "@material-ui/system";
import ExploreDropdownPopup from "./ExploreDropdownPopup";
import { FormatListBulletedOutlined } from "@material-ui/icons";






function Header() {
  
  const [show, setShow] = useState(false);
  const [openPopup,setOpenPopup] = useState(false);
  const paperProps = {
    title:'Explore books on Entrepreneurship',
    description:'Everything you need to know about thriving on a shortering budget, making your first million,and hiring right from the start'
  };
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
            href="#" style={{ marginRight: 16 }}>
            Explore
          </Link>
        

          <Link
            to=""
            href='/book/myLibrary' style={{ marginRight: 16 }}>
            MyLibrary
          </Link>
          <Link
            
            to="#"
            key="Highlights"
            variant="body2"
            href="#"
          
            style={{ marginRight: 16 }}
          >
            Highlights
          </Link>
          <Link
            to=""
            href='/addBook' style={{ marginRight: 16 }}>
            Add Book
          </Link>

          <Link
           
            to="#"
            key="Account"
            href="#"
           
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
