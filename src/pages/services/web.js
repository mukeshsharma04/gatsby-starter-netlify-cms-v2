import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';
import Hidden from '@material-ui/core/Hidden';

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
	list: {
		paddingLeft: theme.spacing.unit * 2,
		listStyle: 'disc'
	},
	outerBox: {
		backgroundImage: `url(${withPrefix('/img/we-know-web.png')})`,
		position: 'relative',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		margin: 'auto',
		[theme.breakpoints.up('sm')]: {
			width: '459.6px'
		},
		height: '300.5px'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Hidden smDown>
					<Grid item xs={12} md={5}>
						<div className={classes.outerBox} />
					</Grid>
				</Hidden>
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom>
						Web app development
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Ready to bring you and your users together with a functionally rich and intuitively easy web
						application? An entire subset of our software engineers at Primoko live for creating websites
						like that to meet business objectives.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Whether you want a from-scratch website, repairs to an existing and problematic site, or a team
						to take over the build, enhancement, or maintenance of a site, Primoko is the team to call.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						We will work closely with you from concept, planning, and design, to development, deployment,
						and support for projects that run the gamut:
					</Typography>
					<Grid container className={classes.space}>
						<Grid item xs={6} md={6}>
							<ul className={classes.list}>
								<li>Online banking</li>
								<li>Content management</li>
								<li>Social Networking</li>
								<li>eCommerce</li>
								<li>Calendar apps</li>
							</ul>
						</Grid>
						<Grid item xs={6} md={6}>
							<ul className={classes.list}>
								<li>Online reservations</li>
								<li>Shopping carts</li>
								<li>Interactive games</li>
								<li>And more</li>
							</ul>
						</Grid>
					</Grid>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						We invite you to contact us for a free consultation today.
					</Typography>
					<Hidden mdUp>
						<Grid item xs={12} md={5}>
							<div className={classes.outerBox} />
						</Grid>
					</Hidden>
				</Grid>
			</Grid>
			<Banner banner={withPrefix('/img/computers.png')} height="440px" />
		</React.Fragment>
	);
});
