import { Container, Typography ,  makeStyles,Link} from "@material-ui/core";
import React from "react";
import Header from "../components/atoms/organisms/Header";
import BookCard from "../components/molecules/BookCard";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/atoms/organisms/Footer";
import PaperComponent from "../components/atoms/PaperComponent";
import TypographyComponent from "../components/atoms/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import BookCardGrid from "../components/molecules/BookCardGrid";
import { BrowserRouter as Router,Route} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));
function MyLibrary() {
  const bookList = [
    {
      title: "Book1",
      author: "Author1",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book2",
      author: "Author2",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book3",
      author: "Author3",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
    {
      title: "Book4",
      author: "Author4",
      image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
      imageTitle: "My BOOK",
      bookReadTime: "13 min read",
      bookReadCount: "15 k read",
    },
  ];
  const paperProps = {
    title:'Find Audiobooks on the blinkist App',
    description:'with premium you will get the whole Blinkist library for free,plus full-length notification audiobooks at a special member price'
};

const classes = useStyles();
  return (
    <Router>
    <React.Fragment>
      <Container maxWidth="lg">
      <Header/>
        <main>
        <TypographyComponent variant="header" gutterBottom align="left">My Library</TypographyComponent>
         <PaperComponent  paperProps={paperProps}/>
         <br/>
       
         
           <Route path="/book/:category">   
              <BookCardGrid/>
          </Route>   
        </main>
      </Container>
      <Footer />
    </React.Fragment>
    </Router>
  );
}
export default MyLibrary;
