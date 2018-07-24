import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'gatsby-link';
import classNames from 'classnames';

const styles = (theme) => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		backgroundColor: 'rgba(255, 255, 255, 0.98)',
		boxShadow: '0 1px 0 0 #dfdfdf',
		height: '60px'
	},
	navLink: {
		color: '#4198ff',
		padding: '0.8rem 1rem',
		fontWeight: 500,
		textDecoration: 'none',
		'&:hover': {
			color: '#4198ff',
			borderBottom: '3px solid #469AFC',
			lineHeight: 2
		}
	},
	active: {
		color: '#4198ff',
		borderBottom: '3px solid #469AFC',
		lineHeight: 2
	}
});

class NavBar extends React.Component {
	activeLink = (route) => {
		const location = typeof window !== 'undefined' ? window.location.pathname : '';
		return route === location && true;
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar varient="dense">
						<Link
							to="/services"
							className={classNames(classes.navLink, this.activeLink('/services') && classes.active)}
						>
							Overview
						</Link>
						<Link
							to="/services/mobile"
							className={classNames(
								classes.navLink,
								this.activeLink('/services/mobile') && classes.active
							)}
						>
							Mobile
						</Link>
						<Link
							to="/services/web"
							className={classNames(classes.navLink, this.activeLink('/services/web') && classes.active)}
						>
							Web
						</Link>
						<Link
							to="/services/devops"
							className={classNames(
								classes.navLink,
								this.activeLink('/services/devops') && classes.active
							)}
						>
							DevOps
						</Link>
						<Link
							to="/services/salesforce"
							className={classNames(
								classes.navLink,
								this.activeLink('/services/salesforce') && classes.active
							)}
						>
							Salesforce
						</Link>
						<Link
							to="/services/pricing"
							className={classNames(
								classes.navLink,
								this.activeLink('/services/pricing') && classes.active
							)}
						>
							Pricing
						</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NavBar);
