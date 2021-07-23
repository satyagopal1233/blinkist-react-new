import React from 'react';
import BookCard from '../BookCard';
function DisplayBookCard({history,location}){
    

    
    return(
       
        <BookCard book={location.state}/>

    );
}
export default DisplayBookCard;