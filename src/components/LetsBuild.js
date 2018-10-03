import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px'
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
			color: '#4198ff',
			fontWeight: '900'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#4198ff',
			fontWeight: '900'
		},
		'&:hover': {
			color: '#4198ff',
			fontWeight: '900',
			textDecoration: 'underline'
		}
	}
});

export default withStyles(styles)(({ data, classes }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Hidden xsDown>
				<Grid item xs={12} md={4}>
					<div className={classes.image} style={{ backgroundImage: `url(${withPrefix(data.image)})` }} />
				</Grid>
			</Hidden>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom>
					{data.heading}
				</Typography>
				{data.description &&
					data.description.split('<br />').map((v, k) => (
						<div key={k}>
							<br />
							<Typography className={classes.paragraph} gutterBottom>
								{v}
							</Typography>
						</div>
					))}
				<br />
				<a href="/" className={classes.textBlue}>
					{data.linkText}
				</a>
			</Grid>
			<Hidden smUp>
				<Grid item xs={12} md={4}>
					<div className={classes.image} style={{ backgroundImage: `url(${withPrefix(data.image)})` }} />
				</Grid>
			</Hidden>
		</Grid>
	);
});
