import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import BookCard from "../BookCard";
import axios from "axios";
import PaperComponent from "../../atoms/PaperComponent";
import TypographyComponent from "../../atoms/Typography";
import SearchBookAutoComplete from "../../atoms/organisms/SearchBookAutoComplete";

function Explorer(props) {
  
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/book/category/enterpreneureship")
      .then(function (response) {
       // console.log("response data here");
        // console.log(response.data);        
        setBookArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  const [bookArray, setBookArray] = useState([]);

  const paperProps = {
    title:'Explore books on Entrepreneurship',
    description:'Everything you need to know about thriving on a shortering budget, making your first million,and hiring right from the start'
  };
  
 
    return (

      <>
      
     
      

      <PaperComponent  paperProps={paperProps}/>
     
      <SearchBookAutoComplete bookArray={bookArray}/>
    
      <Grid container spacing={4} >
        
        {bookArray
            .map((book) => (
            <BookCard key={book.name} book={book} 
            buttonText = 'Add to Library'
            />
          ))}
      </Grid>
      </>
    );
        
          }
export default Explorer;
