import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '../../components/Button';

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
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: '50px'
	},
	space2: {
		marginTop: '40px'
	},
	subTitle: {
		...theme.typography.subheading,
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		marginTop: '20px'
	},
	button: {
		width: '260px',
		height: '39px'
	},
	list: {
		marginLeft: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2,
		listStyle: 'disc'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between" spacing={40}>
				<Grid item xs={12}>
					<Typography className={classes.title} gutterBottom>
						Senior software engineer - iOS
					</Typography>
					<Typography className={classes.subTitle}>Our people are good.</Typography>
					<Typography className={classNames(classes.space, classes.paragraph)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Typography className={classNames(classes.space2, classes.paragraph)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Typography className={classNames(classes.space2, classes.paragraph)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<Typography className={classNames(classes.space2, classes.paragraph)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
					<ul className={classNames(classes.list, classes.space2)}>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</li>
						<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</li>
						<li>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
							anim id est laborum
						</li>
					</ul>
					<Button text="Apply now" styles={classNames(classes.button, classes.space2)} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
