import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'gatsby-link';
import logo from '../img/primoko-logo-white.png';
import Drawer from '@material-ui/core/Drawer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  flex: {
    flexGrow: 1,
  },

  menuButton: {
    margin: '.5rem 1rem'
  },

  navLink: {
    color: 'white',
    padding: '.5rem 1rem',
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '3px solid #fff',
      color: '#fff',
      lineHeight: 2
    }
  },

  list: {
    width: 500,
  },

});

class NavBar extends React.Component {
  state = {
    showDrawer: false
  }

  toggleDrawer = () => () => {
    this.setState({
      showDrawer: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'linear-gradient(to right, #4B96FC, #6F77FB)' }}>
          <Toolbar varient="dense">
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Link to="/"><img src={logo} alt='Primoko' style={{ height: "20px" }} /></Link>
            </Typography>

            <Link to='/about' className={classes.navLink}>About</Link>
            <Link to='/products' className={classes.navLink}>Products</Link>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" >
              <MenuIcon onClick={this.toggleDrawer()} />
            </IconButton>

          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={this.state.showDrawer} onClose={this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer()}>
            <div><Link to='/about'>About</Link></div>
            <div><Link to='/products'>Products</Link></div>
          </div>
        </Drawer>
      </div>
    );
  }


}


export default withStyles(styles, { withTheme: true })(NavBar);