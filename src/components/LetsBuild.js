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
		overflow: 'hidden'
	},
	image: {
		backgroundImage: `url(${withPrefix('/img/chart.png')})`,
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
			color: '#333333'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title,
			color: '#333333'
		}
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#333333'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#333333'
		}
	},
	textBlue: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#4198ff'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#4198ff'
		},
		fontWeight: '900',
		'&:hover': {
			color: '#4198ff'
		}
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
					You’ve undertaken a project. Or you’re creating a product. Congratulations! The future looks bright.
					But your team is already loaded or isn’t fully trained in the required technologies. Maybe there
					simply is not enough bandwidth.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					That's where Primoko comes in.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					We can step in and quickly begin advising you on all architecture decisions, mapping out the pros
					and cons of various design decisions, and coding and implementing your vision. We’re not jacks of
					all trades here; we’re experts in a few. If those few are what you’re looking for, then you’ll be
					hard-pressed to find better engineers anywhere.
				</Typography>
				<br />
				<a href="/" className={classes.textBlue}>
					[Learn more about our software development services.]
				</a>
			</Grid>
		</Grid>
	);
});
