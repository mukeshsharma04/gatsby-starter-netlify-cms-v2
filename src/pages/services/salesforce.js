import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../../components/Quotes';
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
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container}>
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom={true}>
						We will put Salesforce to work for you.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Ah, the promise. Salesforce will help you track deals faster, sell faster, connection with
						customers faster, and blaze your way to business growth—you guessed it—faster.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						The promise IS possible … if you choose the right partner for your implementation.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Primoko is that right partner, with the expertise you need to customize and connect Salesforce
						to legacy systems, SaaS applications, and other business software. This applies whether you’re
						just starting with Salesforce, re-engineering the way you do business, or in need of ongoing
						maintenance to continually fine-tune the system for increased functionality, usability, and
						adoption.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						We work with all components of the Salesforce package, including CRM, Calendar, Commerce Cloud,
						Einstein, and more.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Contact us today for a free consultation. Let’s talk about how you want Salesforce to work for
						you.
					</Typography>
				</Grid>
			</Grid>
			<Quotes quote="If you know how to create software, then you can create big things." author="Xavier Niel" />
		</React.Fragment>
	);
});
