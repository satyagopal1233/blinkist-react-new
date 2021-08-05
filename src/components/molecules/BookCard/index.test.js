import { Button } from "@material-ui/core";
import { shallow} from "enzyme";
import BookCard from ".";


describe('<BookCard /> rendering', () => {
    const book={
        name:'book1',
        author:'author1',
        bookReadTime:'10 min',
        bookReadCount:'15k'

     }
     
    it('should render a <ButtonComponent /> on displaying BookCard', () => {
        const wrapper = shallow(<BookCard book={book} buttonText="CRR"/>);
        expect(wrapper.find(Button)).toHaveLength(1);
    });
  
   


   
});