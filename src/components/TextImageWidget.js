import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import zeros from '../img/zeros.png';

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
        <h1 className={classes.title}>
          A software engineering firm with only software engineers. Imagine that.
				</h1>
        <br />
        <h1 className={classes.title} style={{ borderBottom: '2px solid red' }}>
          Our people are good.
        </h1>
        <div className={classes.paragraph}>
          <br />
          <p>
            Primoko is a software engineering firm whose founders bring 50+ years of software engineering experience to the table to tackle your most challenging engineering projects
					</p>
          <br />
          <p>Give us a bull; we’ll bring our cape.</p>
          <br />
          <br />
          <p>
            Give us a runaway train; we’ll bring our catch engine.
          </p>
          <br />
          <br />
          <p>
            Give us your most difficult engineering obstacle; we’ll bring an engineering expert with the skills and tools to face it.
					</p>
        </div>
        <br />
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.image} />
      </Grid>
    </Grid>
  );
});
