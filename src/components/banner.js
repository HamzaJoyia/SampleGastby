import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import { PlayCircleFilledWhite } from '@material-ui/icons';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  backgroundvideo: {

    height: 100,
    width: 100,
    //float: middle,
    top: 0,
    //padding: none,
    //position: fixed, /* optional depending on what you want to do in your app */
    
    
    },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root2: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      color:"white",
      alignItems:"baseline"
      
      
    },
    
  },
  title: {
    flexGrow: 1,
  },
}));

const  Banner =()=> {
  const classes = useStyles();
  const videoSource="https://www.w3schools.com/tags/movie.mp4"

  return(
      <div className={classes.Container}>
          <video autoPlay="autoplay" loop="loop" muted className={classes.video}>
            <source src={videoSource} type="video.mp4"/>
            Your Browser does not support this video.
            </video>

      </div>
  );
}
export default Banner

