import { ADD_TO_USERLIBRARY, FETCH_USERLIBRARY, UPDATE_TO_USERLIBRARY } from "./userLibraryTypes";

const initialState = {
    loading:false,
    userLibrary:[],
    error:''
};

const userLibraryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERLIBRARY:
            return {...state, userLibrary: action.payload};
         case ADD_TO_USERLIBRARY:
            const userLibrary = state.userLibrary.concat(action.payload);
            return {...state, userLibrary};
        case UPDATE_TO_USERLIBRARY:
                const index = action.index;
               // console.log("index=",index);
                return { 
                    ...state, 
                    userLibrary: [
                       ...state.userLibrary.slice(0,index),
                       action.payload,
                      ...state.userLibrary.slice(index+1)
                      ]
                 };  
        default:
            return state;
        }
};
export default userLibraryReducer;