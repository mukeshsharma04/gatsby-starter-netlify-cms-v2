import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withPrefix } from 'gatsby-link';

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
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		}
	},
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		},
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '8px'
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	textWhite: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		},
		fontWeight: '900',
		textDecoration: 'underline'
	}
});

export default withStyles(styles)(({ classes, title, heading, description }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom>
					{title}
				</Typography>
				<br />
				<Typography className={classes.subTitle}>{heading}</Typography>

				{description.split('<br />').map((v, k) => (
					<div>
						<br />
						<Typography key={k} className={classes.paragraph} gutterBottom>
							{v}
						</Typography>
					</div>
				))}
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
		</Grid>
	);
});
