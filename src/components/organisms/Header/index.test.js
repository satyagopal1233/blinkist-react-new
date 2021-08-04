import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";



const MockHeader = () => {
  return (
    
    <Router>
      <Header />
    </Router>
  );
};

test("renders Explore link", () => {
  render(<MockHeader />);
  const linkElement = screen.getByText(/Explore/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders MyLibrary link", () => {
  render(<MockHeader />);
  const linkElement = screen.getByText(/MyLibrary/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Add Book link", () => {
  render(<MockHeader />);
  const linkElement = screen.getByText(/Add Book/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders popup  on click of explorer link", () => {
  render(<MockHeader />);
  const linkElement1 = screen.getByText(/Explore/i);
  fireEvent.click(linkElement1);
  const linkElement2 = screen.getByRole("link",{name:/enterpreneureship/i});
  expect(linkElement2).toBeInTheDocument();
});

 


