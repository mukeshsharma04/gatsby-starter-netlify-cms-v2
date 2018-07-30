import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withPrefix } from 'gatsby-link';

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
		backgroundImage: `url(${withPrefix('/img/team.png')})`,
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
		}
	},
	title: {
		...theme.typography.title
	},
	subTitle: {
		...theme.typography.title,
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '8px'
	},
	paragraph: {
		...theme.typography.paragraph
	},
	textWhite: {
		...theme.typography.paragraph,
		fontWeight: '900',
		textDecoration: 'underline'
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
				<Typography className={classes.subTitle}>Our people are good.</Typography>
				<div>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Primoko is a software engineering firm whose founders bring 50+ years of software engineering
						experience to the table to tackle your most challenging engineering projects
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Give us a bull; we’ll bring our cape.
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Give us a runaway train; we’ll bring our catch engine.
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Give us your most difficult engineering obstacle; we’ll bring an engineering expert with the
						skills and tools to face it.
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
		</Grid>
	);
});
