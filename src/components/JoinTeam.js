import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '../components/Button';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		},
		overflow: 'hidden'
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
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid id="career" container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.title} gutterBottom={true}>
					Join the team
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					Are you a nerd looking for home?
				</Typography>
				<br />
				<Grid item xs={12} md={3}>
					<Button text="See career opportunities" fullWidth />
				</Grid>
			</Grid>
		</Grid>
	);
});
