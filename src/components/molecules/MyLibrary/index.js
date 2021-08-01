import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import LinK, { Divider, Link } from "@material-ui/core";
import BookCard from "../BookCard";

import userListFetch from "../../../axios/UserListAxios";
import axios from "axios";
import TypographyComponent from "../../atoms/Typography";
import PaperComponent from "../../atoms/PaperComponent";
import { connect, useDispatch, useSelector } from 'react-redux';
import { updateToUserLibrary } from "../../redux/userLibrary/userLibraryActions";





function MyLibrary(props) {
  const bookArray = useSelector(state => state.userLibrary.userLibrary);
  console.log(" modified userlibrary from redux store",bookArray);
  const [pageStatus, setPageStatus] = useState("FIN"); 
  const dispatch = useDispatch();
  


 
  const changeBookStatus = (bk) => {
    let status='CRR';
    
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].book.name === bk.name) {
        if (bookArray[i].status === "CRR") {
          status = "FIN";
        } else {
          status = "CRR";
        }
        const userBook = {"id":bookArray[i].id,"user":{"id":bookArray[i].user.id},"book":{"id":bookArray[i].book.id},"status":status};
        dispatch(updateToUserLibrary(userBook,i));
        break;
      }
       
    }  
    
  };


  
  const paperProps = {
    title:'Find Audiobooks on the blinkist App',
    description:'with premium you will get the whole Blinkist library for free,plus full-length notification audiobooks at a special member price'
  };
  console.log("userlibrary from redux store",{bookArray});
  return (
    <>
        
        <Grid container justifyContent="flex-start" >
        <Grid item xs={12}> 
       <TypographyComponent variant="header" gutterBottom align="left">My Library</TypographyComponent>
       </Grid>
      
       <Grid item xs={12}>  
         <PaperComponent  paperProps={paperProps}/>
         </Grid>
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

export default MyLibrary;

