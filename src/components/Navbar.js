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
	list: {
		width: 350
	},
	mobileMenuText: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mlink,
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.link,
		},
		padding: '0'
	},
	mobileSubMenuText: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.msubLink,
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.subLink,
		},
		paddingLeft: '7%'
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px'
	},
	drawer: {
		backgroundColor: '#333333'
	},
	closeIcon: {
		color: '#ffffff'
	},
	button: {
		width: '151px',
		height: '57px',
		border: 'solid 2px #ffffff',
		textAlign: 'center',
		padding: '3%'
	},
	space: {
		marginTop: '4%'
	}
});

class NavBar extends React.Component {
	state = {
		showDrawer: false
	};

	activeLink = (route) => {
		const location = typeof window !== 'undefined' ? window.location.pathname : '';
		return route === location && true;
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" style={{ background: 'linear-gradient(to right, #4B96FC, #6F77FB)' }}>
					<Toolbar varient="dense">
						<Typography variant="title" color="inherit" className={classes.flex}>
							<Link to="/">
								<img
									src={withPrefix('/img/primoko-logo-white.png')}
									alt="Primoko"
									style={{ height: '20px' }}
								/>
							</Link>
						</Typography>
						<Hidden smDown implementation="css">
							<Link
								to="/about"
								className={classNames(classes.navLink, this.activeLink('/about') && classes.active)}
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
							>
								The Primoko Difference
							</Link>
							<Link
								to="/letstalk"
								className={classNames(classes.navLink, this.activeLink('/letstalk') && classes.active)}
							>
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
											<ListItemLink
												to="/"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="Home"
											/>
											<ListItemLink
												to="/about"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="About Primoko"
											/>
											<div>
												<ListItemLink
													to="/about"
													style={classes.mobileSubMenuText}
													primary="Overview"
													subLink
												/>
												<ListItemLink
													to="/about/#team"
													style={classes.mobileSubMenuText}
													primary="Team"
													subLink
												/>
												<ListItemLink
													to="/about/#career"
													style={classes.mobileSubMenuText}
													primary="Careers"
													subLink
												/>
											</div>
											<ListItemLink
												to="/services"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="Services"
											/>
											<div>
												<ListItemLink
													to="/services"
													style={classes.mobileSubMenuText}
													primary="Overview"
													subLink
												/>
												<ListItemLink
													to="/services/mobile"
													style={classes.mobileSubMenuText}
													primary="Mobile"
													subLink
												/>
												<ListItemLink
													to="/services/web"
													style={classes.mobileSubMenuText}
													primary="Web"
													subLink
												/>
												<ListItemLink
													to="/services/devops"
													style={classes.mobileSubMenuText}
													primary="DevOps"
													subLink
												/>
												<ListItemLink
													to="/services/recruitment-staffing"
													style={classes.mobileSubMenuText}
													primary="Recruitment &amp; Staffing"
													subLink
												/>
												<ListItemLink
													to="/services/salesforce"
													style={classes.mobileSubMenuText}
													primary="Salesforce"
													subLink
												/>
											</div>
											<ListItemLink
												to="/results"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="Results"
											/>
											<div>
												<ListItemLink
													to="/results/clients-testimonials"
													style={classes.mobileSubMenuText}
													primary="Clients &amp; Testimonials"
													subLink
												/>
												<ListItemLink
													to="/results/select-case-studies"
													style={classes.mobileSubMenuText}
													primary="Select Case Studies"
													subLink
												/>
											</div>
											<ListItemLink
												to="/the-primoko-difference"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="The Primoko Difference"
											/>
											<div>
												<div>
													<ListItemLink
														to="/the-primoko-difference"
														style={classes.mobileSubMenuText}
														primary="Overview"
														subLink
													/>
													<ListItemLink
														to="/the-primoko-difference/process"
														style={classes.mobileSubMenuText}
														primary="Process"
														subLink
													/>
													<ListItemLink
														to="/the-primoko-difference/manifesto"
														style={classes.mobileSubMenuText}
														primary="Manifesto"
														subLink
													/>
													<ListItemLink
														to="/services/pricing"
														style={classes.mobileSubMenuText}
														primary="Pricing"
														subLink
													/>
													<ListItemLink
														to="/the-primoko-difference/faqs"
														style={classes.mobileSubMenuText}
														primary="FAQs"
														subLink
													/>
												</div>
											</div>
											<ListItemLink
												to="/letstalk"
												style={classNames(
													classes.mobileMenuText,
													classes.button,
													classes.space
												)}
												primary="Let's Talk"
											/>
											<ListItemLink
												to="/login"
												style={classNames(classes.mobileMenuText, classes.space)}
												primary="Client Login"
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
