import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'gatsby-link';
import logo from '../img/primoko-logo-white.png';
import Drawer from '@material-ui/core/Drawer';
import ListItemLink from './ListItemLink';
import Divider from '@material-ui/core/Divider';
import Close from '@material-ui/icons/Close';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},

	flex: {
		flexGrow: 1
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
		paddingTop: '15px',
		width: 250
	},
	mobileMenuText: {
		color: '#ffffff',
		padding: '0'
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px'
	},
	drawer: {
		backgroundColor: '#333333',
		height: '-webkit-fill-available'
	},
	closeIcon: {
		color: '#ffffff'
	}
});

class NavBar extends React.Component {
	state = {
		showDrawer: false
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" style={{ background: 'linear-gradient(to right, #4B96FC, #6F77FB)' }}>
					<Toolbar varient="dense">
						<Typography variant="title" color="inherit" className={classes.flex}>
							<Link to="/">
								<img src={logo} alt="Primoko" style={{ height: '20px' }} />
							</Link>
						</Typography>
						<Hidden smDown implementation="css">
						<Link to="/about" className={classes.navLink}>
							About
						</Link>
						<Link to="/services" className={classes.navLink}>
							Services
						</Link>
						<Link to="/results" className={classes.navLink}>
							Results
						</Link>
						<Link to="/difference" className={classes.navLink}>
							The Primoko Difference
						</Link>
						<Link to="/letstalk" className={classes.navLink}>
							Let's Talk
						</Link>
						</Hidden>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon onClick={() => this.setState({ showDrawer: true })} />
							<Drawer
								anchor="right"
								open={this.state.showDrawer}
								onClose={() => this.setState({ showDrawer: false })}
							>
								<div
									className={classes.drawer}
									tabIndex={0}
									role="button"
									onClick={() => this.setState({ showDrawer: false })}
									onKeyDown={() => this.setState({ showDrawer: false })}
								>
									<div className={classes.list}>
										<List component="nav">
											<div className={classes.toolbar}>
												<IconButton>
													<Close className={classes.closeIcon} />
												</IconButton>
											</div>
											<ListItemLink to="/about" style={classes.mobileMenuText} primary="About" />
											<Divider />
											<ListItemLink
												to="/products"
												style={classes.mobileMenuText}
												primary="Products"
											/>
										</List>
									</div>
								</div>
							</Drawer>
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NavBar);
