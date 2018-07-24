import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';

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
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	list: {
		paddingLeft: theme.spacing.unit * 2
	},
	outerBox: {
		width: '459.6px',
		height: '300.5px',
		borderRadius: '14.2px',
		backgroundColor: 'var(--white)',
		boxShadow: '0 1px 15px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px 0 #ffffff'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields}/>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={5}>
					<div className={classes.outerBox} />
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom={true}>Your customers are using the web. Are you?</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Looking to streamline internal operations? Become more flexible and versatile? Reach more
						customers? Create additional streams of income? Serve existing clients better?
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						A web app can do that.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						And an entire subset of our software engineers at Primoko live for creating rich web
						applications, such as those for:
					</Typography>
					<Grid container className={classes.space}>
						<Grid className={classes.list} item xs={6} md={6}>
							<ul>
								<li>• &#160; Online banking</li>
								<li>• &#160; Content management</li>
								<li>• &#160; Social Networking</li>
								<li>• &#160; eCommerce</li>
								<li>• &#160; Calendar apps</li>
							</ul>
						</Grid>
						<Grid className={classes.list} item xs={6} md={6}>
							<ul>
								<li>• &#160; Online reservations</li>
								<li>• &#160; Shopping carts</li>
								<li>• &#160; Interactive games</li>
								<li>• &#160; And more</li>
							</ul>
						</Grid>
					</Grid>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						We invite you to contact us for a free consultation today.
					</Typography>
				</Grid>
			</Grid>
			<Banner height="440px" />
		</React.Fragment>
	);
});
