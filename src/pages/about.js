import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typographyStyle: {
      flexGrow: 1,
      color: "plum"
    }
  }));

  export default function AboutDisp () {
    const classes = useStyles();

    return(
    <div>
    
    <Typography variant={'caption'} color="primary">
            This is my about Page
    </Typography>
    <Typography variant={'h5'} className={classes.typographyStyle}>
            This is my about Page
    </Typography>
    </div>
      
  )
  }