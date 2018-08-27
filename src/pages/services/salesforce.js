import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../../components/Quotes';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import Check from '@material-ui/icons/Check';
import BlueBlock from '../../components/BlueBlock';

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
	subheading: {
		...theme.typography.subheading
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	block: {
		[theme.breakpoints.up('sm')]: {
			width: '258px'
		},
		height: '238px',
		boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.05)',
		border: 'solid 1px #6f73ff',
		padding: '0 6%'
	},
	divider: {
		borderBottom: 'solid 2px #6f73ff',
		paddingBottom: '4%'
	},
	icon: {
		width: '14px',
		fill: '#6f73ff'
	},
	subpara: {
		fontFamily: 'Lato',
		fontSize: '12px',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '1.67',
		letterSpacing: 'normal',
		color: '#666666'
	},
	textGroup: {
		display: 'flex',
		paddingBottom: '5%'
	},
	left: {
		textAlign: 'left'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography className={classes.title} gutterBottom>
						We will put Salesforce to work for you.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						The Salesforce cloud-based CRM leads the pack in terms of helping businesses quickly roll out
						fast-integrating, user-friendly applications that scale.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Primoko has the expertise you need to customize and connect Salesforce to legacy systems, SaaS
						applications, and other business software. This applies whether you’re just starting with
						Salesforce, re-engineering the way you do business, or in need of ongoing maintenance to
						continually fine-tune the system for increased functionality, usability, and adoption.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Salesforce work may include client-side scripting, portal development, integration, and building
						customized applications on the Force.com platform.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Contact us today. Let’s discuss how to put Salesforce to work for you.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<BlueBlock main="We speak Salesforce" subMenu={['Visualforce, Javascript Remoting, Heroku', 'CRM, Calendar, Commerce Cloud, Einstein']} />
				</Grid>
			</Grid>
			<Quotes quote="If you know how to create software, then you can create big things." author="Xavier Niel" />
		</React.Fragment>
	);
});
