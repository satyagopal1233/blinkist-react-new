import React from 'react';
import { Button } from '@material-ui/core';
import { color } from '@material-ui/system';
import { makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

function ButtonComponent(props){
      
    return(
        <Button variant="contained"   onClick={props.onClick} color="primary">{props.children}</Button>

    );
}
export default ButtonComponent;