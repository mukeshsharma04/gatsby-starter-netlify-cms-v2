import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quotes from '../components/Quotes';
import { withPrefix } from 'gatsby-link';
import Hidden from '@material-ui/core/Hidden';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing.unit * 2,
			paddingBottom: theme.spacing.unit * 2,
			paddingLeft: theme.spacing.unit * 2,
			paddingRight: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing.unit * 7,
			paddingBottom: theme.spacing.unit * 7,
			paddingLeft: theme.spacing.unit * 7,
			paddingRight: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing.unit * 10,
			paddingBottom: theme.spacing.unit * 10,
			paddingLeft: theme.spacing.unit * 15,
			paddingRight: theme.spacing.unit * 30
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
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	right: {
		textAlign: 'right'
	},
	center: {
		textAlign: 'center'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom={true}>
						Selected clients
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						Primoko is proud to bring you our expert and elite engineering experience with the following
						companies.
					</Typography>
				</Grid>
				<Grid item xs={12} md={12}>
					<Hidden xsDown>
						<Grid container justify="flex-start" alignItems="center">
							<Grid item xs={6} md={5}>
								<img src={withPrefix('img/barneys.png')} width="178px" />
							</Grid>
							<Grid item xs={6} md={4}>
								<img src={withPrefix('img/bofa.png')} width="220px" />
							</Grid>
							<Grid item xs={6} md={3} className={classes.right}>
								<img src={withPrefix('img/Philips-Shield.png')} width="64px" />
							</Grid>
							<Grid item xs={6} md={5}>
								<img src={withPrefix('img/orchestra-tech.png')} width="186px" />
							</Grid>
							<Grid item xs={6} md={4}>
								<img src={withPrefix('img/jefferson.png')} width="176px" />
							</Grid>
							<Grid item xs={6} md={3} className={classes.right}>
								<img src={withPrefix('img/pricee.png')} width="114px" />
							</Grid>
							<Grid item xs={6} md={5}>
								<img src={withPrefix('img/filmakr.png')} width="186px" />
							</Grid>
							<Grid item xs={6} md={4}>
								<img src={withPrefix('img/time-warner.jpg')} width="145px" />
							</Grid>
							<Grid item xs={6} md={3} className={classes.right}>
								<img src={withPrefix('img/rutgers-logo.png')} width="200px" />
							</Grid>
						</Grid>
					</Hidden>
				</Grid>
				<Grid item xs={12} md={12}>
					<Hidden smUp>
						<Grid container justify="center" alignItems="center">
							<Grid item xs={6}>
								<img src={withPrefix('img/barneys.png')} width="178px" />
							</Grid>
							<Grid item xs={6} className={classes.right}>
								<img src={withPrefix('img/Philips-Shield.png')} width="64px" />
							</Grid>
							<Grid item xs={6}>
								<img src={withPrefix('img/bofa.png')} width="220px" />
							</Grid>
							<Grid item xs={6} className={classes.right}>
								<img src={withPrefix('img/pricee.png')} width="114px" />
							</Grid>
							<Grid item xs={6}>
								<img src={withPrefix('img/jefferson.png')} width="176px" />
							</Grid>
							<Grid item xs={6} className={classes.right}>
								<img src={withPrefix('img/orchestra-tech.png')} width="186px" />
							</Grid>
							<Grid item xs={6}>
								<img src={withPrefix('img/filmakr.png')} width="186px" />
							</Grid>
							<Grid item xs={6} className={classes.right}>
								<img src={withPrefix('img/time-warner.jpg')} width="145px" />
							</Grid>
							<Grid item xs={12} className={classes.center}>
								<img src={withPrefix('img/rutgers-logo.png')} width="200px" />
							</Grid>
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Quotes
				quote="The team at Primoko is top notch. Cognizant of best practices for code hygiene and thorough 
				documentation making for excellent coordination amongst engineers working with the code 
				base currently as well as those on-boarding at a later time."
				author="George Spyros,"
				authorRole="Founder of Filmakr"
			/>
		</React.Fragment>
	);
});
