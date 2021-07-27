import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import BookCard from "../BookCard";
import axios from "axios";
import PaperComponent from "../../atoms/PaperComponent";
import TypographyComponent from "../../atoms/Typography";
import SearchBookAutoComplete from "../../atoms/organisms/SearchBookAutoComplete";
import MyLibrary from "../MyLibrary";

function Explorer(props) {
  
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/book/category/enterpreneureship")
      .then(function (response) {
       console.log("response data here");
        // console.log(response.data);        
        setBookArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("http://localhost:8080/userLibrary/5")
      .then(function (response) {
        //console.log("response data here");
        //console.log(response.data);        
        setUserLibrary(response.data);
      })
      .catch((error) => {
        console.log(error);
      });


  },[]);
  const addToUserLibrary = (bk) => {
    alert("adding to library");
    axios.post('http://localhost:8080/userBook', 
    {"user":{"id":"5"},"book":{"id":bk.id},"status":"CRR"}



  )
  .then((response) => {
    console.log(response.data);
    console.log("before modified userlibrary");
    console.log({userLibrary});
    setUserLibrary( prevState => [...prevState,response.data]);
    console.log("after modified userlibrary");
    console.log({userLibrary});

    }, (error) => {
    console.log(error);
  });

  };

  const [bookArray, setBookArray] = useState([]);
  const [userLibrary, setUserLibrary] = useState([]);

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
            .map((book) => {  
                 // console.log(userLibrary);
                 console.log("**********************");
                 console.log(userLibrary);
                 console.log(book);
                  const btnTextFlag = userLibrary.some( userBook => userBook.book.name === book.name );
                  console.log(btnTextFlag);
                  console.log("**********************");
           return <BookCard key={book.name} book={book} 
            buttonText = {(btnTextFlag)?'':'Add to Library'}
            onchangestate={(bk) => {
              addToUserLibrary(bk);
            }}

            />;
            
            })
          
          }
      </Grid>
      </>
    );
        
          }
export default Explorer;

