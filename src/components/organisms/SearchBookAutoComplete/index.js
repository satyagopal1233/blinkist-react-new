import { SettingsOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TypographyComponent from "../../atoms/Typography";

function SearchBookAutoComplete(props) {
  const books = props.bookArray;

  const [bookMatch, setBookMatch] = useState([]);
  const searchBooks = (text) => {
    const matches = books.filter((book) => {
      const regex = new RegExp(`${text}`, "gi");
      return book.name.match(regex);
    });

    setBookMatch(matches);
  };
  const displayBookCard = (book)=>{
    console.log(book.name);
  };
 
  
  return (
    <>
    <Grid container justifyContent="flex-start">
      <TextField 
        id="outlined-basic"
        label="Search Book"
        variant="standard"
        size="medium"
        onChange={(e) => searchBooks(e.target.value)}
      />
      </Grid>
      <br />
     
      <ul>
        {bookMatch &&
          bookMatch.map((book) => <li key={book.name}><Link to={{pathname: '/book/displayBookCard',state:book}}><b>{book.name}</b></Link></li>)}
      </ul>
      <Grid container justifyContent="flex-start">
      <TypographyComponent variant="header" gutterBottom align="left">Trending Blinks</TypographyComponent>
      
      </Grid>
    </>
  );
}
export default SearchBookAutoComplete;
