import React from 'react';
import { shallow, configure ,Adapter} from 'enzyme';
import { Route } from 'react-router-dom';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new ReactSixteenAdapter() })
import MainContent from '../MainContent';
import MyLibrary from '../MyLibrary';
import AddBook from '../AddBook';
let pathMap = {};
describe('routes using array of routers', () => {
  
  beforeAll(() => {
    const component = shallow(<MainContent/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  
  it('should show My library component for /myLibrary router', () => {
    expect(pathMap['/book/myLibrary']).toBe(MyLibrary);
  })
  it('should show AddBook component for /addBook router', () => {
    expect(pathMap['/addBook']).toBe(AddBook);
  })
 
})