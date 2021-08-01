import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";



import userLibraryReducer from "./userLibrary/userLibraryReducer";


const rootReducer = combineReducers({
    userLibrary: userLibraryReducer,
    books: booksReducer
    
    
});
export default rootReducer;