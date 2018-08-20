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
			padding: '30px 40px'
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: '81px',
			paddingLeft: '149px',
			paddingRight: '128px'
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
		paddingTop: '30px',
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
	},
	gridItem: {
		padding: '20px 0'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom>
						Selected clients
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						Primoko is proud to bring you our expert and elite engineering experience with the following
						companies.
					</Typography>
				</Grid>
				<Grid item xs={12} md={12} className={classes.space}>
					<Hidden xsDown>
						<Grid container justify="space-between">
							<Grid item xs={5}>
								<Grid container direction="column" justify="space-evenly" alignItems="flex-start">
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/barneys.png')} width="178px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/orchestra-tech.png')} width="186px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/filmakr.png')} width="186px" />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={4}>
								<Grid container direction="column" justify="space-evenly" alignItems="flex-start">
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/bofa.png')} width="220px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/jefferson.png')} width="176px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/time-warner.jpg')} width="145px" />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={3}>
								<Grid container direction="column" justify="space-evenly" alignItems="flex-end">
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/Philips-Shield.png')} width="64px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/pricee.png')} width="114px" />
									</Grid>
									<Grid item className={classes.gridItem}>
										<img src={withPrefix('img/rutgers-logo.png')} width="200px" />
									</Grid>
								</Grid>
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
				<div className={classes.space} />
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
