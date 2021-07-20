import { Container, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/atoms/organisms/Header";
import BookCard from "../components/molecules/BookCard";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/atoms/organisms/Footer";
import PaperComponent from "../components/atoms/PaperComponent";
import TypographyComponent from "../components/atoms/Typography";
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
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header />
        <main>
        <TypographyComponent variant="header" gutterBottom align="left">My Library</TypographyComponent>
         <PaperComponent  paperProps={paperProps}/>
         <br/>
          <Grid container spacing={4}>
            {bookList.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
export default MyLibrary;
