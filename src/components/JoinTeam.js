import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '../components/Button';

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
		},
		overflow: 'hidden',
		textAlign: 'center'
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
				<br />
				<Typography className={classes.title} gutterBottom>
					Join the team
				</Typography>
				{/* <Typography className={classes.paragraph} gutterBottom>
					Are you a nerd looking for home? Or a nerd looking to work from home? Checkout our current
					opportunities.
				</Typography> */}
				<Typography className={classes.paragraph} gutterBottom>
					Are you a nerd looking for home?
				</Typography>
				<Grid item xs={12} md={3}>
					<Button text="See career opportunities" fullWidth />
				</Grid>
				<br />
			</Grid>
		</Grid>
	);
});
