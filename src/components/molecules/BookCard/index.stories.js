import React from "react";
import BookCard from ".";
import baseTheme from "../../../themes";
import { ThemeProvider } from "@material-ui/core/styles";
export default {
  component: BookCard,
  title: "Molecules/BookCard",
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <BookCard {...args} />
  </ThemeProvider>
);

export const BookCardSample = Template.bind({});
BookCardSample.args = {
  book: {
    title: "Book1",
    author: "Author1",
    image: "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    imageTitle: "My BOOK",
    bookReadTime: "13 min read",
    bookReadCount: "15 k read",
  },
  buttonText:"Currently Reading"
};
