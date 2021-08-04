import { fireEvent, render, screen } from "@testing-library/react";
import ExploreDropdownPopup from ".";

test("renders enterpreneureship link", () => {
    render( <ExploreDropdownPopup openPopup={true}/>);
    const linkElement = screen.getByRole("link",{name:/enterpreneureship/i});
    expect(linkElement).toBeInTheDocument();
  });
  
  