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




function MyLibrary(props) {
  const [pageStatus, setPageStatus] = useState("FIN"); 

  const [bookArray, setBookArray] = useState([]);

  const changeBookStatus = (bk) => {
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].book.name === bk.name) {
       // console.log("gk1 start");
        //console.log(bookArray[i].id);
        //console.log(bookArray[i].book.id);
        //console.log(bookArray[i].user.id);
        //console.log(bookArray[i].status);
        //console.log("gk1 end");
        if (bookArray[i].status === "CRR") {
          bookArray[i].status = "FIN";
        } else {
          bookArray[i].status = "CRR";
        }
        axios.put('http://localhost:8080/userBook', 
          {"id":bookArray[i].id,"user":{"id":bookArray[i].user.id},"book":{"id":bookArray[i].book.id},"status":bookArray[i].status}
        )
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        break;
      }
    }

    setBookArray([...bookArray]);
  };


  useEffect(() => {
    axios
      .get("http://localhost:8080/userLibrary/5")
      .then(function (response) {
        //console.log("response data here");
        //console.log(response.data);        
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
