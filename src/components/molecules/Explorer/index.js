import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import BookCard from "../BookCard";
import axios from "axios";

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
      .get("http://localhost:8080/book")
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
  
 
    return (
      <Grid container spacing={4}>
        {bookArray
          .filter((book) => {
            return book.category === 'enterpreneureship';
          })
          .map((book) => (
            <BookCard key={book.name} book={book} />
          ))}
      </Grid>
    );
          }
export default Explorer;
