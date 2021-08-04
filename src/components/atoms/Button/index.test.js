import React from 'react';
import { shallow, render,mount } from "enzyme";
import ButtonComponent from '.';




describe("Primary Button", () => {
  it("Renders Primary Button", () => {
    const wrapper = render(<ButtonComponent>Primary Button</ButtonComponent>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
  
  it("Handles button click", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <ButtonComponent  onClick={mockFunction}>Button click</ButtonComponent>);
    wrapper.simulate("click");
    wrapper.update();
    expect(mockFunction).toBeCalled();
  });
});