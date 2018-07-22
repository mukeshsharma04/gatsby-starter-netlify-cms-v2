import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  container: {
    padding: '3%',
    overflow: 'hidden'
  },
  section: {
    padding: '0 15% 0 5%'
  },
  image: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      height: '350px'
    },
    [theme.breakpoints.up('md')]: {
      width: '425px',
      height: '370px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '425px',
      height: '370px'
    }
  },
  title: {
    ...theme.typography.title
  },
  paragraph: {
    ...theme.typography.paragraph,
  },
  textWhite: {
    ...theme.typography.paragraph,
    fontWeight: '900',
    textDecoration: 'underline'
  }

});

export default withStyles(styles)(({ classes }) => {

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.section} item xs={12}>
        <Typography variant="title" gutterBottom>
          Meet the team
        </Typography>
        <br />
        <p style={{fontWeight: 500}}>
          Our band of hardcore engineers also happens to be good at the soft stuff, like planning, managing, and serving our clients.
        </p>
      </Grid>
    </Grid>
  );

});
