import { Grid ,Paper,Link, Container, Typography} from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PublicIcon from '@material-ui/icons/Public';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Dialog, DialogContent, DialogTitle, makeStyles } from "@material-ui/core";
import TypographyComponent from '../../Typography';
const useStyles= makeStyles(theme => ({
    dialogWrapper:{
        padding:theme.spacing(1),
        position:'absolute',
        top:theme.spacing(3)

    }

}));
function ExploreDropdownPopup(props){
    const {openPopup,setOpenPopup}=props;
    
    const classes= useStyles();
    return(
        <Dialog open={openPopup} maxWidth="md"  classes={{paper:classes.dialogWrapper}} overlayStyle={{backgroundColor: 'transparent'}}>
            <DialogContent>
           
             <Grid container spacing={4}  >
            <Grid item xs={4} > <NotificationsNoneIcon/> 
            <Link
            to=""
             href="/book/enterpreneureship">
            enterpreneureship
             </Link></Grid>
            <Grid item xs={4}>  <HourglassEmptyIcon/>Science</Grid>
            <Grid item xs={4}>  <PublicIcon/>Economics</Grid>
            <Grid item xs={4}>  <BusinessCenterIcon/>CorporatCulter</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon/>enterpreneureship</Grid>
            <Grid item xs={4}>  <HourglassEmptyIcon/>Science</Grid>
            <Grid item xs={4}>  <PublicIcon/>Economics</Grid>
            <Grid item xs={4}>  <BusinessCenterIcon/>CorporatCulter</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon/>enterpreneureship</Grid>
            </Grid>

       
       
            </DialogContent>
        </Dialog>

    );
}
export default ExploreDropdownPopup;