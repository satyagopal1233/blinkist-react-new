import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import LinK, { Divider, Link, makeStyles } from "@material-ui/core";
import TypographyComponent from "../../atoms/Typography";
import PaperComponent from "../../atoms/PaperComponent";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateToUserLibrary } from "../../redux/userLibrary/userLibraryActions";
import BookCard from "../../molecules/BookCard";
const useStyles = makeStyles((theme) => ({
  activeLink: {
    color: "#00c853",
  },
  deActiveLink: {
    color: "black",
  },
}));

function MyLibrary(props) {
  const classes = useStyles();
  const bookArray = useSelector((state) => state.userLibrary.userLibrary);
  const [pageStatus, setPageStatus] = useState("FIN");
  const [activeLink, setActiveLink] = useState("fin");
  const dispatch = useDispatch();

  const changeBookStatus = (bk) => {
    let status = "CRR";

    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].book.name === bk.name) {
        if (bookArray[i].status === "CRR") {
          status = "FIN";
        } else {
          status = "CRR";
        }
        const userBook = {
          id: bookArray[i].id,
          user: { id: bookArray[i].user.id },
          book: { id: bookArray[i].book.id },
          status: status,
        };
        dispatch(updateToUserLibrary(userBook, i));
        break;
      }
    }
  };

  const ClickLinkHandler = (e) => {
    const { name } = e.target;
    setActiveLink(name);
    name === "crr" ? setPageStatus("CRR") : setPageStatus("FIN");
  };

  const paperProps = {
    title: "Find Audiobooks on the blinkist App",
    description:
      "with premium you will get the whole Blinkist library for free,plus full-length notification audiobooks at a special member price",
  };

  return (
    <>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12}>
          <TypographyComponent variant="header" gutterBottom align="left">
            My Library
          </TypographyComponent>
        </Grid>

        <Grid item xs={12}>
          <PaperComponent paperProps={paperProps} />
        </Grid>
      </Grid>

      <br />

      <Grid container>
        <Grid item xs={12} md={4}>
          <Link
            to="#"
            href="#"
            name="crr"
            onClick={ClickLinkHandler}
            className={
              activeLink === "crr"
                ? `${classes.activeLink}`
                : `${classes.deActiveLink}`
            }
          >
            Currently Reading
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link
            to="#"
            href="#"
            name="fin"
            onClick={ClickLinkHandler}
            className={
              activeLink === "fin"
                ? `${classes.activeLink}`
                : `${classes.deActiveLink}`
            }
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
            <BookCard
              key={userBook.book.name}
              buttonText={
                userBook.status === "CRR"
                  ? "Finished Reading"
                  : "Currently Reading"
              }
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
