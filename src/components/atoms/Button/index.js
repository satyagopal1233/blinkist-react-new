import React from 'react';
import { Button } from '@material-ui/core';


function ButtonComponent(props){
      
    return(
        <Button variant="contained"   onClick={props.onClick} color="primary">{props.children}</Button>

    );
}
export default ButtonComponent;