import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import chart from '../img/chart.png';
import Typography from '@material-ui/core/Typography';

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
	image: {
		backgroundImage: `url(${chart})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '350px',
			height: '350px'
		},
		[theme.breakpoints.up('md')]: {
			width: '425px',
			height: '370px'
		},
		[theme.breakpoints.up('lg')]: {
			width: '425px',
			height: '370px'
		}
	},
	title: {
		...theme.typography.title,
		color: '#333333'
	},
	paragraph: {
		...theme.typography.paragraph,
		color: '#333333'
	},
	textBlue: {
		...theme.typography.paragraph,
		fontWeight: '900',
		color: '#4198ff'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom={true}>
					Let's build.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					You've undertaken a project. Or You're creating a product. Congratulations! The future looks bright.
					But your existing staff lacks competency in the required technology. Or maybe you lack the staff you
					need, period.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					That's where Primoko comes in.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					We're ready to put our expert software engineers to work for and with you, advising you on all the
					architecture decisions, mapping out the pros and cons of different technologies, and getting your
					project, or product, up and running.
				</Typography>
				<br />
				<a href="/" className={classes.textBlue}>
					Learn more about our software development services.
				</a>
			</Grid>
		</Grid>
	);
});
