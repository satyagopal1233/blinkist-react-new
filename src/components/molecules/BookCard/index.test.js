import { Button, Typography } from "@material-ui/core";
import { shallow, render ,mount} from "enzyme";
import BookCard from ".";
import ButtonComponent from "../../atoms/Button";

describe('<BookCard /> rendering', () => {
    const book={
        name:'book1',
        author:'author1',
        bookReadTime:'10 min',
        bookReadCount:'15k'

     }
     
    it('should render a <ButtonComponent /> on displaying BookCard', () => {
        const wrapper = shallow(<BookCard book={book} buttonText="CRR"/>);
        //console.log(wrapper.debug());
        expect(wrapper.find(Button)).toHaveLength(1);
    });
  
   


   
});