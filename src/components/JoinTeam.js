import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	button: {
		...theme.typography.button,
		backgroundImage: 'linear-gradient(99deg, #4198ff, #6f73ff)',
		borderRadius: '19.5px',
		padding: '10px',
		width: '260px',
		height: '39px',
		textTransform: 'initial'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.title} gutterBottom>
					Join the team
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom>
					Are you a nerd looking for home?
				</Typography>
				<br />
				<Button variant="contained" aria-label="Delete" className={classes.button}>
					See career opportunities
				</Button>
			</Grid>
		</Grid>
	);
});
