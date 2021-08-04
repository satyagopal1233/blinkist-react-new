import React from 'react';
import { shallow, render } from "enzyme";
import PaperComponent from '.';



describe("Paper component", () => {
  it("Renders Paper component", () => {
    const paperProps = {
        title:'title',
        description:'desc'
    }
    const wrapper = render(<PaperComponent paperProps={paperProps}/>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

 

});