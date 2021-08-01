import { Grid ,Paper,Link, Container, Typography} from '@material-ui/core';
import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PublicIcon from '@material-ui/icons/Public';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { Dialog, DialogContent, DialogTitle, makeStyles } from "@material-ui/core";

const useStyles= makeStyles(theme => ({
    dialogWrapper:{
        padding: theme.spacing(2),
        position:'absolute',
        top: theme.spacing(5)

    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex'
       }

}));
function ExploreDropdownPopup(props){
    const {openPopup,setOpenPopup}=props;
    
    const classes= useStyles();
    return(
       
        <Dialog open={openPopup} maxWidth="md"  classes={{paper:classes.dialogWrapper}}>
           
            <DialogContent>
            <div style={{ padding:8 }}>
           
             <Grid container spacing={3} >
            <Grid item xs={4} > <NotificationsNoneIcon className={classes.wrapIcon}/> 
            <Link
            to=""
             href="/book/enterpreneureship">
            enterpreneureship
             </Link></Grid>
            <Grid item xs={4}>  <HourglassEmptyIcon className={classes.wrapIcon}/>Science</Grid>
            <Grid item xs={4}>  <PublicIcon className={classes.wrapIcon}/>Economics</Grid>
            <Grid item xs={4}>  <BusinessCenterIcon className={classes.wrapIcon}/>CorporatCulter</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon className={classes.wrapIcon}/>enterpreneureship</Grid>
            <Grid item xs={4}>  <HourglassEmptyIcon className={classes.wrapIcon}/>Science</Grid>
            <Grid item xs={4}>  <PublicIcon className={classes.wrapIcon}/>Economics</Grid>
            <Grid item xs={4}>  <BusinessCenterIcon className={classes.wrapIcon}/>CorporatCulter</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon className={classes.wrapIcon}/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon className={classes.wrapIcon}/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon className={classes.wrapIcon}/>enterpreneureship</Grid>
            <Grid item xs={4}>  <NotificationsNoneIcon className={classes.wrapIcon}/>enterpreneureship</Grid>
            </Grid>

       
            </div>
            </DialogContent>
        </Dialog>

    );
}
export default ExploreDropdownPopup;