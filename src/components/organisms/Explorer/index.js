import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";


import PaperComponent from "../../atoms/PaperComponent";



import { connect, useDispatch, useSelector } from "react-redux";

import {
  addToUserLibrary,
  getUserLibrary,
} from "../../redux/userLibrary/userLibraryActions";
import { getBooksByCategory } from "../../redux/books/booksActions";
import SearchBookAutoComplete from "../SearchBookAutoComplete";
import BookCard from "../../molecules/BookCard";

function Explorer() {
  const userLibrary = useSelector((state) => state.userLibrary.userLibrary);
  const bookArray = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserLibrary());
  }, []);
  useEffect(() => {
    dispatch(getBooksByCategory());
  }, []);
  const addToUserLib = (bk) => {
    dispatch(addToUserLibrary(bk));
  };

  const paperProps = {
    title: "Explore books on Entrepreneurship",
    description:
      "Everything you need to know about thriving on a shortering budget, making your first million,and hiring right from the start",
  };

  return (
    <>
      <PaperComponent paperProps={paperProps} />

      <SearchBookAutoComplete bookArray={bookArray} />

      <Grid container spacing={4}>
        {bookArray.map((book) => {
          // console.log(userLibrary);
          console.log("**********************");
          console.log("userlibrary=", userLibrary);
          console.log(book);
          const btnTextFlag = userLibrary.some(
            (userBook) => userBook.book.name === book.name
          );
          console.log(btnTextFlag);
          console.log("**********************");
          return (
            <BookCard
              key={book.name}
              book={book}
              buttonText={btnTextFlag ? "" : "Add to Library"}
              onchangestate={(bk) => {
                addToUserLib(bk);
              }}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default Explorer;
