import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  container: {
    padding: '3%',
    overflow: 'hidden'
  },
  section: {
    padding: '0 15% 0 5%'
  },
  title: {
    ...theme.typography.title
  },
  paragraph: {
    ...theme.typography.paragraph,
    maxWidth: '526px',
    paddingBottom: '70px'
  },
  teamTitle: {
    ...theme.typography.subheading,
    maxWidth: '200px',
    textAlign: 'center',
    margin: '33px 30px 17px 30px'
  },
  avatarDefault: {
    backgroundColor: '#f8f8f8',
    width: '200px',
    height: '200px',
    margin: '0px 30px'
  },
});

export default withStyles(styles)(({ classes }) => {

  return (
    <Grid container className={classes.container} >
      <Grid className={classes.section} item xs={12}>
        <Typography className={classes.title} gutterBottom>
          Meet the team
        </Typography>
        <br />
        <Typography className={classes.paragraph}>
          Our band of hardcore engineers also happens to be good at the soft stuff, like planning, managing, and serving our clients.
        </Typography>
      </Grid>
      <Grid container justify="center" spacing={40} alignItems="center">
        <Grid className={classes.section} item>
          <Avatar className={classes.avatarDefault} />
          <Typography className={classes.teamTitle}>
            First Lastname <br /> Role
          </Typography>
        </Grid>
        <Grid className={classes.section} item>
          <Avatar className={classes.avatarDefault} />
          <Typography className={classes.teamTitle}>
            First Lastname <br /> Role
          </Typography>
        </Grid>
        <Grid className={classes.section} item>
          <Avatar className={classes.avatarDefault} />
          <Typography className={classes.teamTitle}>
            First Lastname <br /> Role
          </Typography>
        </Grid>
        <Grid className={classes.section} item>
          <Avatar className={classes.avatarDefault} />
          <Typography className={classes.teamTitle}>
            First Lastname <br /> Role
          </Typography>

        </Grid>

      </Grid>

    </Grid>
  );

});
