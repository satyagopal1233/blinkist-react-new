import { render } from "../../redux/test-utils";
import { screen } from "@testing-library/react";
import MyLibrary from '../MyLibrary';



test("renders Explore link", () => {
    
    
    render(<MyLibrary/>);
    const linkElement = screen.getByText(/My Library/i);
    expect(linkElement).toBeInTheDocument();
  });