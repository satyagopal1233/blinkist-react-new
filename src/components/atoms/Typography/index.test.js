import React from 'react';
import { shallow, render } from "enzyme";
import TypographyComponent from '.';
describe("Typography", () => {
    it("Renders Default Body", () => {
      const wrapper = render(<TypographyComponent>Body</TypographyComponent>);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    it("Renders Body", () => {
      const wrapper = render(<TypographyComponent variant='body'>Body</TypographyComponent>);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    it("Renders Header", () => {
      const wrapper = render(<TypographyComponent variant="header">Header</TypographyComponent>);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    it("Renders Title", () => {
      const wrapper = render(<TypographyComponent variant="title">Title</TypographyComponent>);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
    
  });
