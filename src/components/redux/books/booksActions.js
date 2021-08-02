import axios from "axios";
import { ADD_TO_BOOKS, FETCH_BOOKS_BY_CATEGORY } from "./booksTypes";

export const getBooksByCategory = () => {
    return (dispatch) => {
        
        axios.get("http://localhost:8080/book/category/enterpreneureship")
        .then(response => {
        //    console.log("*****************in getBooksByCategory*************");
        //    console.log(response);
            dispatch({
                type: FETCH_BOOKS_BY_CATEGORY,
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    };
};



export const addToBooks = book => {
    return (dispatch) => {
        axios.post('http://localhost:8080/book', book)
        .then(response => {
          //  console.log("*****************in addToBooks*************");
            dispatch({
                type: ADD_TO_BOOKS,
                payload: response.data
            }) ;
        })
        .catch(error => {
            console.log(error);
        });
    };
};