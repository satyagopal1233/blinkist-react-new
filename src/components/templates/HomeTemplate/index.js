import React from "react";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f00bl",
  },
  paper: {
    padding: theme.spacing(2),
  },
  container: {
    height: "100vh",
  },
  
  banner: {},
  content: {},
  footer: {},
 
}));

const HomeTemplate = (props) => {
  const style = useStyle();

  return (
      
    <Container maxWidth="lg">
        
          <Grid item container xs alignContent="flex-start" spacing={2}>
            <Grid item xs={12} className={style.banner}>
              {props.banner}
            </Grid>
            <Grid item xs={12} className={style.content}>
              {props.content}
            </Grid>
            <Grid item xs={12} className={style.footer}>
              {props.footer}
            </Grid>
          </Grid>
        
      </Container>
  );
};



export default HomeTemplate;