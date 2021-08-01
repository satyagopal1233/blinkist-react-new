import { Container, Typography ,  makeStyles,Link, Avatar} from "@material-ui/core";
import React from "react";





import { BrowserRouter as Router,Route} from "react-router-dom";


import "@fontsource/raleway";

import AddBook from "../../components/organisms/AddBook";

import DisplayBookCard from "../../components/organisms/DisplayBookCard";
import Header from "../../components/organisms/Header";
import MyLibrary from "../../components/organisms/MyLibrary";
import Explorer from "../../components/organisms/Explorer";
import Footer from "../../components/atoms/Footer";




function BlinkistHome() {
 
  


  return (
  
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
      <Footer/>
      
      
    </React.Fragment>
 
  );
}
export default BlinkistHome;
