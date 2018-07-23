import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import zeros from '../img/zeros.png';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  container: {
    padding: '3%',
    overflow: 'hidden'
  },
  section: {
    padding: '0 15% 0 5%'
  },
  image: {
    backgroundImage: `url(${zeros})`,
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
  subTitle: {
    ...theme.typography.title,
    width: 'fit-content',
    borderBottom: '6px solid #6f73ff',
    paddingBottom: '8px'
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
      <Grid className={classes.section} item xs={12} md={8}>
        <Typography className={classes.title}>
          A software engineering firm with only software engineers. Imagine that.
				</Typography>
        <br />
        <Typography className={classes.subTitle}>
          Our people are good.
        </Typography>
        <div>
          <br />
          <Typography className={classes.paragraph}>
            Primoko is a software engineering firm whose founders bring 50+ years of software engineering experience to the table to tackle your most challenging engineering projects
					</Typography>
          <br />
          <Typography className={classes.paragraph}>Give us a bull; we’ll bring our cape.</Typography>
          <br />
          <Typography className={classes.paragraph}>
            Give us a runaway train; we’ll bring our catch engine.
          </Typography>
          <br />
          <Typography className={classes.paragraph}>
            Give us your most difficult engineering obstacle; we’ll bring an engineering expert with the skills and tools to face it.
					</Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div style={{width: '409px', height: '404px', backgroundColor: '#f8f8f8'}} />
      </Grid>
    </Grid>
  );
});
