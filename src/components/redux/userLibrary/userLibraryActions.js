import axios from "axios";
import { ADD_TO_USERLIBRARY, FETCH_USERLIBRARY, UPDATE_TO_USERLIBRARY } from "./userLibraryTypes";

export const getUserLibrary = () => {
    return (dispatch) => {
        
        axios.get('http://localhost:8080/userLibrary/5')
        .then(response => {
          //  console.log("*****************in getUserLIbrary*************");
          //  console.log(response);
            dispatch({
                type: FETCH_USERLIBRARY,
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
        });
    };
};



export const addToUserLibrary = book => {
    return (dispatch) => {
        axios.post('http://localhost:8080/userBook', 
        {"user":{"id":"5"},"book":{"id":book.id},"status":"CRR"}
        )
        .then(response => {
          //  console.log("*****************in addToUserLibrary*************");
            dispatch({
                type: ADD_TO_USERLIBRARY,
                payload: response.data
            }) ;
        })
        .catch(error => {
            console.log(error);
        });
    };
};
export const updateToUserLibrary = (userBook,index) => {
    return (dispatch) => {
        axios.put('http://localhost:8080/userBook', userBook)
        .then(response => {
          //  console.log("*****************in updateToUserLibrary*************");
            dispatch({
                type: UPDATE_TO_USERLIBRARY,
                payload: response.data,
                index:index
            }) ;
        })
        .catch(error => {
            console.log(error);
        });
    };
};