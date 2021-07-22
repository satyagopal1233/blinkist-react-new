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
  const [pageStatus, setPageStatus] = useState("CRR");

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


  const [bookArray, setBookArray] = useState(myLibraryBookList);

  const changeBookStatus = (bk) => {
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].name === bk.name) {
        if (bookArray[i].bState === "CRR") {
          bookArray[i].bState = "FIN";
        } else {
          bookArray[i].bState = "CRR";
        }
        break;
      }
    }

    setBookArray([...bookArray]);
  };

  const paperProps = {
    title:'Find Audiobooks on the blinkist App',
    description:'with premium you will get the whole Blinkist library for free,plus full-length notification audiobooks at a special member price'
  };

  return (
    <>
     
       <TypographyComponent variant="header" gutterBottom align="left">My Library</TypographyComponent>
         <PaperComponent  paperProps={paperProps}/>
         <br/>
       
      <Grid container justifyContent="space-around">
        <Grid item>
          <Link
            to="#"
            href="#"
            onClick={() => {
              setPageStatus("CRR");
            }}
          >
            Coninue Reading
          </Link>
        </Grid>
        <Grid item>
          <Link
            to="#"
            href="#"
            onClick={() => {
              setPageStatus("FIN");
            }}
          >
            finished
          </Link>
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={4}>
        {bookArray
          .filter((book) => {
            console.log(book);
            return book.bState === `${pageStatus}`;
          })
          .map((book) => (
            <BookCard key={book.name}
              book={book}
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
