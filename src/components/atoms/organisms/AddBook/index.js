import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useState } from 'react';
import axios from 'axios';
function AddBook(){
    const [data,setData] = useState({
        author:"",
        name:"",
        category:"",
        image:"",
        bookReadCount:"",
        bookReadTime: ""

    });
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
    const handleInput= (e) =>{
        const newData = {...data};
        newData[e.target.id]=e.target.value;
        setData(newData);
        //console.log(newData);
    };
    const submitForm = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8080/book",data)
        .then(res =>{
            //console.log(res);
            alert("Book successfully added");
        })
        .catch((error) => {
            console.log(error);
          });
        
        ;
       

    };
    return (

       
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography variant='caption' gutterBottom>Please fill this form to add a Book !</Typography>
                </Grid>
                <form onSubmit={e=>submitForm(e)}>
                    <TextField fullWidth label='Name' id="name" placeholder="Enter Book name" onChange={e=>handleInput(e)}/>
                    <TextField fullWidth label='Author' id="author" placeholder="Enter Book Author" onChange={e=>handleInput(e)}/>
                    <TextField fullWidth label='Category' id="category" placeholder="Enter Book Category" onChange={e=>handleInput(e)}/>
                    <TextField fullWidth label='Book Image url' id="image" placeholder="Enter Book Image url" onChange={e=>handleInput(e)}/>
                    <TextField fullWidth label='Book Read Count' id="bookReadCount" placeholder="Enter Book Read Count" onChange={e=>handleInput(e)}/>
                    <TextField fullWidth label='Book Read TIme' id="bookReadTime" placeholder="Enter Book Read Time" onChange={e=>handleInput(e)}/>
                    <Button type='submit' variant='contained' id="name" color='primary'>Submit</Button>
                </form>
            </Paper>
        </Grid>
    );

}
export default AddBook;