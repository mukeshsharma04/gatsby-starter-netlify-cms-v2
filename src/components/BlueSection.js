import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import zeros from '../img/zeros.png';

const styles = (theme) => ({
	container: {
		padding: '3%',
		background: 'linear-gradient(112deg, #4198ff, #6f73ff)'
	},
	section: {
		padding: '0 15% 0 5%'
	},
	image: {
		backgroundImage: `url(${zeros})`,
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
		color: '#ffffff'
	},
	paragraph: {
		...theme.typography.paragraph,
		color: '#ffffff'
	},
	textWhite: {
		...theme.typography.paragraph,
		fontWeight: '900',
		color: '#ffffff',
		textDecoration: 'underline'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container className={classes.container}>
			<Grid className={classes.section} item xs={12} md={8}>
				<h1 className={classes.title}>
					A software engineering firm with only software engineers. Imagine that.
				</h1>
				<br />
				<div className={classes.paragraph}>
					<p>
						We’re not kidding. We’ve no sales people, no marketing people, no business development people,
						no customer relations people.
					</p>
					<br />
					<p>Everyone in the company is an engineer first.</p>
					<br />
					<p>
						Some of our software development engineers are elite. Some are top-notch experts with years of
						experience architecting large projects.
					</p>
					<p>
						But we are all engineers.<br />And we are all very good at what we do.
					</p>
				</div>
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
