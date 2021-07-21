import {
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Typography,
  Button,
  Link
} from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
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
    flexShrink: 0,
  },
}));

function Header() {
  const classes = useStyles();
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
       
          <Link
            color="inherit"
            noWrap
            key="Blinkist"
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            Blinkist
          </Link>
          <Link
             href="/book/enterpreneureship">
            Explore
          </Link>
          <Link
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
    </>
  );
}
export default Header;
