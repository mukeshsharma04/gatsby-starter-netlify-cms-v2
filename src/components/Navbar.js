import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link, { withPrefix } from 'gatsby-link';
import Drawer from '@material-ui/core/Drawer';
import ListItemLink from './ListItemLink';
import Close from '@material-ui/icons/Close';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},

	menuButton: {
		margin: '.5rem 0rem'
	},

	navLink: {
		...theme.typography.link,
		color: 'white',
		padding: '1.3rem 1rem',
		fontWeight: 500,
		textDecoration: 'none',
		'&:hover': {
			borderBottom: '3px solid #fff',
			color: '#fff',
			lineHeight: 2
		}
	},
	active: {
		borderBottom: '3px solid #fff',
		color: '#fff',
		lineHeight: 2
	},
	letsactive: {
		color: '#fff'
	},
	list: {
		width: 375
	},
	hamburger: {
		...theme.typography.mHamburgerTitle,
		padding: '0'
	},
	mhamburger: {
		...theme.typography.mDropdownLi,
		paddingLeft: '7%',
		'&:hover': {
			textDecoration: 'underline'
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px'
	},
	closeIcon: {
		color: '#ffffff'
	},
	button: {
		...theme.typography.mHamburgerTitle,
		width: '140px',
		height: '41px',
		borderRadius: '28.5px',
		backgroundColor: '#ffffff',
		padding: theme.spacing.unit,
		color: '#333333',
		textAlign: 'center'
	},
	client: {
		width: '140px',
		height: '41px',
		borderRadius: '28.5px',
		border: 'solid 2px #ffffff',
		padding: theme.spacing.unit * 1 / 2,
		textAlign: 'center'
	},
	sectionSpace: {
		marginTop: theme.spacing.unit * 2
	},
	titleSpace: {
		marginTop: '20px'
	},
	paragraphSpace: {
		marginTop: '14px'
	},
	drawerPaper: {
		[theme.breakpoints.down('xs')]: {
			width: '100%'
		},
		backgroundColor: '#333333'
	},
	margin: {
		marginTop: '40px'
	},
	letstalk: {
		display: 'inline-flex',
		...theme.typography.link,
		color: 'white',
		fontWeight: 500,
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none'
		},
		width: '87px',
		height: '25px',
		borderRadius: '12.5px',
		backgroundColor: 'rgba(0, 0, 0, 0.25)',
		padding: '0.5% 2%'
	},
	appBarSpace: {
		height: '64px'
	}
});

class NavBar extends React.Component {
	state = {
		showDrawer: false,
		anchorEl: null
	};

	activeLink = (route) => {
		const location = typeof window !== 'undefined' ? window.location.pathname : '';
		return route === location && true;
	};

	handlePopoverOpen = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handlePopoverClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);

		const renderMenu = (
			<Popover
				id="simple-popper"
				className={classes.popover}
				classes={{
					paper: classes.paper
				}}
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				onClose={this.handlePopoverClose}
				disableRestoreFocus
			>
				<MenuItem>Never</MenuItem>
				<MenuItem>Every Night</MenuItem>
				<MenuItem>Weeknights</MenuItem>
				<MenuItem>Weekends</MenuItem>
			</Popover>
		);

		return (
			<div className={classes.root}>
				<AppBar
					position="fixed"
					style={{
						background: 'linear-gradient(to right, #4B96FC, #6F77FB)'
					}}
				>
					<Toolbar varient="dense">
						<Typography variant="title" color="inherit" className={classes.root}>
							<Link to="/">
								<img
									src={withPrefix('/img/primoko-logo-white.png')}
									alt="Primoko"
									style={{ height: '28px' }}
								/>
							</Link>
						</Typography>
						<Hidden smDown implementation="css">
							<Link
								to="/about"
								className={classNames(classes.navLink, this.activeLink('/about') && classes.active)}
								aria-owns={open ? 'simple-popper' : null}
								aria-haspopup="true"
								onMouseEnter={this.handlePopoverOpen}
							>
								About
							</Link>
							<Link
								to="/services"
								className={classNames(classes.navLink, this.activeLink('/services') && classes.active)}
							>
								Services
							</Link>
							<Link
								to="/results"
								className={classNames(classes.navLink, this.activeLink('/results') && classes.active)}
							>
								Results
							</Link>
							<Link
								to="/the-primoko-difference"
								className={classNames(
									classes.navLink,
									this.activeLink('/the-primoko-difference') && classes.active
								)}
								aria-owns={open ? 'simple-popper' : null}
								aria-haspopup="true"
								onMouseEnter={this.handlePopoverOpen}
							>
								The Primoko Difference
							</Link>
							<Link
								to="/letstalk"
								className={classNames(classes.navLink, this.activeLink('/letstalk') && classes.active)}
							>
								<div className={classes.letstalk}>Let's Talk</div>
							</Link>
						</Hidden>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon onClick={() => this.setState({ showDrawer: true })} />
							<Drawer
								anchor="right"
								open={this.state.showDrawer}
								classes={{
									paper: classes.drawerPaper
								}}
								onClose={() => this.setState({ showDrawer: false })}
							>
								<div
									tabIndex={0}
									role="button"
									onClick={() => this.setState({ showDrawer: false })}
									onKeyDown={() => this.setState({ showDrawer: false })}
								>
									<div className={classes.list}>
										<List component="nav">
											<Hidden smUp>
												<div className={classes.toolbar}>
													<IconButton>
														<Close className={classes.closeIcon} />
													</IconButton>
												</div>
											</Hidden>
											<ListItemLink
												to="/"
												style={classNames(
													classes.hamburger,
													classes.sectionSpace,
													classes.margin
												)}
												primary="Home"
											/>
											<ListItemLink
												to="/about"
												style={classNames(classes.hamburger, classes.titleSpace)}
												primary="About Primoko"
											/>
											<div>
												<ListItemLink
													to="/about"
													style={classNames(classes.mhamburger, classes.paragraphSpace)}
													primary="Overview"
													subLink
												/>
												<ListItemLink
													to="/about/#team"
													style={classes.mhamburger}
													primary="Team"
													subLink
												/>
												<ListItemLink
													to="/careers"
													style={classes.mhamburger}
													primary="Careers"
													subLink
												/>
											</div>
											<ListItemLink
												to="/services"
												style={classNames(classes.hamburger, classes.titleSpace)}
												primary="Services"
											/>
											<div>
												<ListItemLink
													to="/services"
													style={classNames(classes.mhamburger, classes.paragraphSpace)}
													primary="Overview"
													subLink
												/>
												<ListItemLink
													to="/services/mobile"
													style={classes.mhamburger}
													primary="Mobile"
													subLink
												/>
												<ListItemLink
													to="/services/web"
													style={classes.mhamburger}
													primary="Web"
													subLink
												/>
												<ListItemLink
													to="/services/devops"
													style={classes.mhamburger}
													primary="DevOps"
													subLink
												/>
												<ListItemLink
													to="/services/#recruitment-staffing"
													style={classes.mhamburger}
													primary="Recruitment &amp; Staffing"
													subLink
												/>
												<ListItemLink
													to="/services/salesforce"
													style={classes.mhamburger}
													primary="Salesforce"
													subLink
												/>
											</div>
											<ListItemLink
												to="/results"
												style={classNames(classes.hamburger, classes.titleSpace)}
												primary="Results"
											/>
											<div>
												<ListItemLink
													to="/results/#clients-testimonials"
													style={classNames(classes.mhamburger, classes.paragraphSpace)}
													primary="Clients &amp; Testimonials"
													subLink
												/>
												<ListItemLink
													to="/results/#select-case-studies"
													style={classes.mhamburger}
													primary="Select Case Studies"
													subLink
												/>
											</div>
											<ListItemLink
												to="/the-primoko-difference"
												style={classNames(classes.hamburger, classes.titleSpace)}
												primary="The Primoko Difference"
											/>
											<div>
												<div>
													<ListItemLink
														to="/the-primoko-difference"
														style={classNames(classes.mhamburger, classes.paragraphSpace)}
														primary="Overview"
														subLink
													/>
													<ListItemLink
														to="/the-primoko-difference/process"
														style={classes.mhamburger}
														primary="Process"
														subLink
													/>
													{/* <ListItemLink
														to="/the-primoko-difference/manifesto"
														style={classes.mhamburger}
														primary="Manifesto"
														subLink
													/> */}
													<ListItemLink
														to="/services/pricing"
														style={classes.mhamburger}
														primary="Pricing"
														subLink
													/>
													{/* <ListItemLink
														to="/the-primoko-difference/faqs"
														style={classes.mhamburger}
														primary="FAQs"
														subLink
													/> */}
												</div>
											</div>
											<ListItemLink
												to="/letstalk"
												style={classNames(
													classes.hamburger,
													classes.button,
													classes.titleSpace
												)}
												primary="Let's Talk"
											/>
											<ListItemLink
												to="#"
												style={classNames(
													classes.hamburger,
													classes.client,
													classes.titleSpace
												)}
												primary="Client Login"
											/>
										</List>
									</div>
								</div>
							</Drawer>
						</IconButton>
					</Toolbar>
				</AppBar>
				{renderMenu}
				<div className={classes.appBarSpace}>&#160;</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NavBar);
