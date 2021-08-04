import React from "react";
import "@testing-library/jest-dom";
import { configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
React.useLayoutEffect = React.useEffect;
configure({ adapter: new Adapter() })