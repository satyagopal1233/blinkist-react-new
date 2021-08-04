import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    height: "100%",
    
   
  },

  
});

function BookCard(props) {
  const classes = useStyles();
  const { book,buttonText } = props;
  const changeStatusOfBook = (funct, book) => {
    funct(book);
  };

  return (
    <Grid item item xs={12} md={4}>
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={book.name}
          image={book.image}
          title={book.name}
        />
        <CardContent>
          <TypographyComponent gutterBottom variant="title" fontWeight="fontWeightMedium" >
           <b>{book.name}</b>
          </TypographyComponent>
          <TypographyComponent variant="subtitle">
         {book.author}
          </TypographyComponent>
          <br/>
          <Grid container justifyContent="space-between">
            <Grid item>{book.bookReadTime}</Grid>
            <Grid item>{book.bookReadCount}</Grid>
          </Grid>

        </CardContent>
      </CardActionArea>
      <CardActions>
      {buttonText.length > 0 && (
      <Button variant="contained"   color="primary"      onClick={() => changeStatusOfBook(props.onchangestate, props.book)}
        >
          {buttonText}
        </Button>
      )}
      </CardActions>
    </Card>
    </Grid>
  );
}
export default BookCard;


