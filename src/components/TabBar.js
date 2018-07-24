import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'gatsby-link';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';

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
		const { classes, fields } = this.props;

		return (
			<Hidden xsDown>
				<div className={classes.root}>
					<AppBar position="static" className={classes.appBar}>
						<Toolbar varient="dense">
							{fields.map((v, k) => (
								<Link
									key={k}
									to={v.value}
									className={classNames(classes.navLink, this.activeLink(v.value) && classes.active)}
								>
									{v.label}
								</Link>
							))}
						</Toolbar>
					</AppBar>
				</div>
			</Hidden>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NavBar);
