import { ADD_TO_BOOKS, FETCH_BOOKS_BY_CATEGORY } from "./booksTypes";


const initialState = {
    loading:false,
    books:[],
    error:''
};

const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_BY_CATEGORY:
            return {...state, books: action.payload};
         case ADD_TO_BOOKS:
            const books = state.books.concat(action.payload);
            console.log("after adding books",books);
            return {...state, books};
        default:
            return state;
        }
};
export default booksReducer;