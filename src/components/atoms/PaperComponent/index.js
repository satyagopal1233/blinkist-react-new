import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
      textAlign:'left'
    },
  }));
function PaperComponent(props){
    const{title,description} = props;
    const classes = useStyles();
    return(   
      
    <Grid>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {props.paperProps.title}
        </Typography>
        <Typography>{props.paperProps.description}</Typography>
      </Paper>
    </Grid>
    );
    
    
}
export default PaperComponent;