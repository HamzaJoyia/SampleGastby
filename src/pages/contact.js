import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typographyStyle: {
      flexGrow: 1,
      color: "plum"
    }
  }));

  export default function ContactDisp () {
    const classes = useStyles();

    return(
    <div>
    
    <Typography variant={'h1'} className={classes.typographyStyle}>
          Contact Page Under Construction!
    </Typography>
    <Typography variant={'h5'} className={classes.typographyStyle}>
            To be Completed
    </Typography>
    </div>
      
  )
  }