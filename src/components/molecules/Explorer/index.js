import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import BookCard from "../BookCard";
import axios from "axios";
import PaperComponent from "../../atoms/PaperComponent";
import TypographyComponent from "../../atoms/Typography";
import SearchBookAutoComplete from "../../atoms/organisms/SearchBookAutoComplete";

function Explorer(props) {
  const bookList = [
    {
      title: "Book1",
      author: "Author1",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book2",
      author: "Author2",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book3",
      author: "Author3",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "politics",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book4",
      author: "Author4",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "fiction",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
  ];
  const myLibrary = [
    {
      title: "Book5",
      author: "Author5",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book6",
      author: "Author6",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book7",
      author: "Author7",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "politics",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book8",
      author: "Author8",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "fiction",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
  ];
  useEffect(() => {
    axios
      .get("http://localhost:8080/book/category/enterpreneureship")
      .then(function (response) {
        console.log("response data here");
        console.log(response.data);        
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
      <Grid container justify="flex-start">
      
      </Grid>
      <SearchBookAutoComplete bookArray={bookArray}/>
    
      <Grid container spacing={4} >
        {bookArray
          .filter((book) => {
            return book.category === 'enterpreneureship';
          })
          .map((book) => (
            <BookCard key={book.name} book={book} />
          ))}
      </Grid>
      </>
    );
        
          }
export default Explorer;
