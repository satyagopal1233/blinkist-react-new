import React, { useState } from 'react';
import BookCard from '../../molecules/BookCard';


function DisplayBookCard({history,location}){
    const [book,setBook] = useState(location.state); 

    
    return(
        
        <center>
        
         <BookCard book={book} buttonText = ''/>
        </center>
    );
}
export default DisplayBookCard;