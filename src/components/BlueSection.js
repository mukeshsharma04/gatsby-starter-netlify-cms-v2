import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
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
		background: 'linear-gradient(112deg, #4198ff, #6f73ff)',
		overflow: 'hidden'
	},
	image: {
		backgroundImage: `url(${withPrefix('/img/zeros.png')})`,
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
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle,
			color: '#ffffff'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title,
			color: '#ffffff'
		}
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.maragraph,
			color: '#ffffff'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#ffffff'
		},
	},
	textWhite: {
		...theme.typography.paragraph,
		fontWeight: '900',
		color: '#ffffff',
		textDecoration: 'underline',
		'&:hover': {
			color: '#ffffff'
		}
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom={true}>
					A software engineering firm with only software engineers. Imagine that.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					We’re not kidding. We’ve no sales people, no marketing people, no business development people, no
					customer relations people.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					Everyone in the company is an engineer first.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					Some of our software development engineers are elite. Some are top-notch experts with years of
					experience architecting large projects.
				</Typography>
				<Typography className={classes.paragraph} gutterBottom={true}>
					But we are all engineers.<br />And we are all very good at what we do.
				</Typography>
				<br />
				<a href="/" className={classes.textWhite}>
					Meet the team.
				</a>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
		</Grid>
	);
});
