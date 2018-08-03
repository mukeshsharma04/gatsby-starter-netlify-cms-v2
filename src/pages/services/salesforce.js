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
						The Salesforce cloud-based CRM leads the pack in terms of helping businesses quickly roll out
						fast-integrating, user-friendly applications that scale.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Primoko has the expertise you need to customize and connect Salesforce to legacy systems, SaaS
						applications, and other business software. This applies whether you’re just starting with
						Salesforce, re-engineering the way you do business, or in need of ongoing maintenance to
						continually fine-tune the system for increased functionality, usability, and adoption.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Salesforce work may include client-side scripting, portal development, integration, and building
						customized applications on the Force.com platform.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Contact us today. Let’s discuss how to put Salesforce to work for you.
					</Typography>
				</Grid>
			</Grid>
			<Quotes quote="If you know how to create software, then you can create big things." author="Xavier Niel" />
		</React.Fragment>
	);
});
