import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent:"center",
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate({display}) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{display:display}} >
      <CircularProgress />

    </div>
  );
}
