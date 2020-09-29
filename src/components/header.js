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

const  Header =()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
              <Grid container  alignItems="baseline" spacing={'2'}>
                <Grid item xs={3} alignItems="baseline"><Link to="/">Home</Link></Grid>
                <Grid item xs={3} alignItems="baseline"><Link to="/about/">About</Link></Grid>
                <Grid item xs={3} alignItems="baseline"> <Link to="/contact/">Contact</Link></Grid>
                <Grid item xs={3} alignItems="baseline"> <Button color="primary">Login</Button></Grid>
              </Grid>
        </Toolbar>
     
    </div>
  );
}
export default Header