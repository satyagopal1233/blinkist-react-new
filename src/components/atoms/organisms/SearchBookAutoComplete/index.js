import { SettingsOutlined } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
function SearchBookAutoComplete(props) {
  const mylist = props.bookArray;
  const [books, setBooks] = useState([]);
  const [bookMatch,setBookMatch] = useState([]);
  useEffect(() => {
    console.log("hi");
     
    const loadBooks = async () => {
      const response = await axios.get("http://localhost:8080/book/category/enterpreneureship");
      setBooks(response.data);
    };
    loadBooks();
  }, []);
  console.log(books);
  const searchBooks = (text) => {
  
    const matches = books.filter((book) => {
      const regex = new RegExp(`${text}`, "gi");
      return book.name.match(regex);
    });
   
    setBookMatch(matches);
   
  };
  console.log("in searchbookautocomplete");
  console.log({mylist});
  return (
      <>
  
    <TextField id="outlined-basic" label="Search Book" variant="outlined"   onChange={(e) => searchBooks(e.target.value)}/><br/>
    <ul>{bookMatch && bookMatch.map(book => <li key={book.name}>{book.name }</li>)}</ul>    
    </>
  );
}
export default SearchBookAutoComplete;
