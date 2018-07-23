import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
  },
  button: {
    ...theme.typography.button,
    margin: theme.spacing.unit,
    backgroundImage: 'linear-gradient(99deg, #4198ff, #6f73ff)',
    borderRadius: '19.5px',
    padding: '10px',
    width: '260px',
    height: '39px',
    textTransform: 'initial'
  }

});

export default withStyles(styles)(({ classes }) => {

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.section} item xs={12}>
        <Typography variant="title" gutterBottom>
          Join the team
        </Typography>
        <br />
        <p style={{ fontWeight: 500 }}>
          Are you a nerd looking for home?
        </p>
        <br />
        <Button variant="contained" aria-label="Delete" className={classes.button}>
          See career opportunities
        </Button>
      </Grid>
    </Grid>
  );

});
