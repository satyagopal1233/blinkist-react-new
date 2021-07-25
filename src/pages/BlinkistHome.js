import { Container, Typography ,  makeStyles,Link} from "@material-ui/core";
import React from "react";
import Header from "../components/atoms/organisms/Header";
import BookCard from "../components/molecules/BookCard";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/atoms/organisms/Footer";
import PaperComponent from "../components/atoms/PaperComponent";
import TypographyComponent from "../components/atoms/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import MyLibrary from "../components/molecules/MyLibrary";
import { BrowserRouter as Router,Route} from "react-router-dom";
import { Explore } from "@material-ui/icons";
import Explorer from "../components/molecules/Explorer";
import "@fontsource/raleway";
import DisplayBookCard from "../components/molecules/DisplayBookCard";

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    fontFamily:"raleway"
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
function BlinkistHome() {
 
  

const classes = useStyles();
  return (
    <Router>
    <React.Fragment>
      <Container maxWidth="lg">
      <Header/>
        
       
         <br/>
       
         
           <Route path="/book/enterpreneureship" component={Explorer}>   
             
          </Route>   
          <Route path="/book/myLibrary" component={MyLibrary}>   
             
          </Route>  
          <Route path="/book/displayBookCard" component={DisplayBookCard}>
                
          </Route> 
        
      </Container>
      <Footer />
    </React.Fragment>
    </Router>
  );
}
export default BlinkistHome;
