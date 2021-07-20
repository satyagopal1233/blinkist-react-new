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
    image: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png",
    imageTitle: "My BOOK",
    bookReadTime: "13 min read",
    bookReadCount: "15 k read",
  },
};
