import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
import Button from '../../components/Button';
import classNames from 'classnames';
import Link from 'gatsby-link';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px'
		},
		[theme.breakpoints.up('md')]: {
			padding: '86px 60px'
		},
		[theme.breakpoints.up('lg')]: {
			padding: '86px'
		}
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		}
	},
	subheading: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.subheading
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.subheading
		},
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '20px'
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	button: {
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		},
		[theme.breakpoints.up('md')]: {
			width: '260px'
		},
		marginBottom: '7%'
	},
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		width: 'fit-content',
		color: 'white',
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		padding: '10px'
	},
	row: {
		position: 'relative',
		'&:after': {
			position: 'absolute',
			backgroundColor: 'red',
			width: '420px',
			height: '50px',
			backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 2%, #ffffff)'
		}
	}
});

export default withStyles(styles)(
	class Career extends Component {
		render() {
			const { classes } = this.props;

			const tag = (
				<Typography className={classes.text} align="center">
					Careers
				</Typography>
			);

			return (
				<React.Fragment>
					<Banner banner={withPrefix('/img/startup.jpg')} tag={tag} height="425px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								Senior software engineer - iOS
							</Typography>
							<Typography className={classes.subheading} gutterBottom>
								Location, NY
							</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.row)} gutterBottom>
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</Typography>
							<Button styles={classes.button} to={'/careers/ios'} component={Link} text="Apply now" />
						</Grid>
						<Grid item xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								Senior software engineer - React
							</Typography>
							<Typography className={classes.subheading} gutterBottom>
								Location, NY
							</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</Typography>
							<Button styles={classes.button} to={'/careers/react'} component={Link} text="Apply now" />
						</Grid>
					</Grid>
				</React.Fragment>
			);
		}
	}
);
