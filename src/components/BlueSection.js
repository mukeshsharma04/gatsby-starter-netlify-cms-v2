import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';

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
		background: 'linear-gradient(112deg, #4198ff, #6f73ff)',
		overflow: 'hidden'
	},
	image: {
		backgroundImage: `url(${withPrefix('/img/zeros.png')})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 'auto',
			marginRight: 'auto',
			marginTop: '40px',
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
		}
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
				<Typography className={classes.title} gutterBottom>
					Only engineers drive our bus. In other words, we’re a software engineering firm with only software
					engineers. Imagine that!
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom>
					We’re software engineers first. Yes, we do handle the sales, marketing, customer relations and other
					non-engineering functions, but everyone in the company comes from a technical background.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom>
					We're also elite, meaning we hire and grow the best talent and that makes us very good at what we
					do. We bring years of experience architecting large projects to the table and look forward to
					stepping in at whatever level you need us.
				</Typography>
				{/* <br />
				<a href="/" className={classes.textWhite}>
					Meet the team.
				</a> */}
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
		</Grid>
	);
});
