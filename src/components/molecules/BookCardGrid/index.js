import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import LinK from "@material-ui/core";
import BookCard from "../BookCard";
import { Link } from "react-router-dom";
import userListFetch from "../../../axios/UserListAxios";
import axios from "axios";
import TypographyComponent from "../../atoms/Typography";
import PaperComponent from "../../atoms/PaperComponent";




function BookCardGrid(props) {
  const [pageStatus, setPageStatus] = useState("FIN");

  const myLibraryBookList = [
    {
      name: "Book5",
      author: "Author5",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
      bState: "CRR",
    },
    {
      name: "Book6",
      author: "Author6",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "enterpreneureship",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
      bState: "CRR",
    },
    {
      name: "Book7",
      author: "Author7",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "politics",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
      bState: "CRR",
    },
    {
      name: "Book8",
      author: "Author8",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      category: "fiction",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
      bState: "CRR",
    },
  ];


  const [bookArray, setBookArray] = useState([]);

  const changeBookStatus = (bk) => {
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].book.name === bk.name) {
        if (bookArray[i].status === "CRR") {
          bookArray[i].status = "FIN";
        } else {
          bookArray[i].status = "CRR";
        }
        break;
      }
    }

    setBookArray([...bookArray]);
  };


  useEffect(() => {
    axios
      .get("http://localhost:8080/userLibrary/5")
      .then(function (response) {
        console.log("response data here");
        console.log(response.data);        
        setBookArray(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const paperProps = {
    title:'Find Audiobooks on the blinkist App',
    description:'with premium you will get the whole Blinkist library for free,plus full-length notification audiobooks at a special member price'
  };

  return (
    <>
        <Grid container justify="flex-start">
        
       <TypographyComponent variant="header" gutterBottom align="left">My Library</TypographyComponent>
       </Grid>
       <Grid xs={12}>  
         <PaperComponent  paperProps={paperProps}/>
         </Grid>
        
        
         <br/>
       
      <Grid container>
        <Grid item xs={12} md={4}>
          <Link
            to="#"
            href="#"
            onClick={() => {
              setPageStatus("CRR");
            }}
          >
            Currently Reading
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link
            to="#"
            href="#"
            onClick={() => {
              setPageStatus("FIN");
            }}
          >
            Finished
          </Link>
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={4}>
        {bookArray
          .filter((userBook) => {
            console.log("gk1"+userBook.book);
            return userBook.status === `${pageStatus}`;
          })
          .map((userBook) => (
            <BookCard key={userBook.book.name}
              buttonText = {userBook.status==='CRR'?'Finished Reading':'Currently Reading'}
              book={userBook.book}
              onchangestate={(bk) => {
                changeBookStatus(bk);
              }}
            />
          ))}
      </Grid>
    </>
  );
}
export default BookCardGrid;
