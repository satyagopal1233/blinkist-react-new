import React from 'react';
import {Route} from "react-router-dom";
import Explorer from '../Explorer';
import AddBook from '../AddBook';
import DisplayBookCard from '../DisplayBookCard';
import MyLibrary from '../MyLibrary';
function MainContent(){
    return(
        <>
        
        <Route path="/book/enterpreneureship" component={Explorer}>   
             
        </Route>   
        <Route path="/book/myLibrary" component={MyLibrary}>   
           
        </Route>  
        <Route path="/book/displayBookCard" component={DisplayBookCard}>
              
        </Route> 
        <Route path="/addBook" component={AddBook}>
              
              </Route> 
        </>      

    );
}
export default MainContent;