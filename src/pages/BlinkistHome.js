import { Container, Typography ,  makeStyles,Link, Avatar} from "@material-ui/core";
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
import AddBook from "../components/atoms/organisms/AddBook";


function BlinkistHome() {
 
  


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
          <Route path="/addBook" component={AddBook}>
                
                </Route> 
        
      </Container>
      <Footer />
    </React.Fragment>
    </Router>
  );
}
export default BlinkistHome;
