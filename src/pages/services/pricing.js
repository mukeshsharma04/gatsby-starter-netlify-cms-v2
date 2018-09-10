import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
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
		}
	},
	row: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	},
	divider: {
		[theme.breakpoints.up('sm')]: {
			borderRight: 'solid 1px #d1d1d1'
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
	listItem: {
		display: 'list-item'
	},
	space: {
		marginTop: theme.spacing.unit * 2
	},
	rangeButton: {
		height: '52px',
		backgroundColor: '#f8f8f8',
		textAlign: 'center',
		padding: theme.spacing.unit * 2,
		margin: 'auto'
	},
	pricing: {
		height: '69px',
		marginBottom: '45px'
	},
	quoteButton: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			position: 'fixed',
			top: '90%',
			left: '0',
			width: '100%',
			backgroundColor: 'white',
			height: '10%',
			borderTop: '1px solid #d1d1d1',
			padding: '0 30px',
			zIndex: '100'
		}
	},
	button: {
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	spacing: {
		marginTop: '40px',
		marginBottom: '40px'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container}>
				<Grid className={classNames(classes.row, classes.divider, classes.spacing)} item xs={12} md={4}>
					<Grid container className={classes.pricing} direction="row" justify="center" alignItems="center">
						<img src={withPrefix('/img/cupcake.png')} />
					</Grid>
					<Typography className={classes.title} align="center">
						Simple
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						A simple project usually consists of:
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Developer/Project Manager
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Part-time Quality Assurance Tester
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Part-time UI/UX Designer
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						SIMPLE PROJECT EXAMPLES
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Mobile applications with no server-side implementation
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Mobile applications with discrete server-side implementation supporting mobile functionality
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Defined, limited feature set web-applications
					</Typography>

					<div className={classes.space} />
					<div className={classes.rangeButton}>$100K - $200K</div>
				</Grid>
				<Grid className={classNames(classes.row, classes.divider, classes.spacing)} item xs={12} md={4}>
					<Grid container className={classes.pricing} direction="row" justify="center" alignItems="center">
						<img src={withPrefix('/img/cake.png')} />
					</Grid>
					<Typography className={classes.title} align="center">
						Moderate
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						A moderate project usually consists of:
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Developer/Project Manager
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1+ Additional Developer(s)
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Part-time Quality Assurance Tester
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Part-time UI/UX Designer
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						MODERATE PROJECT EXAMPLES
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Enterprise applications integrating web and mobile functionality
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Consumer-facing service applications
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Applications with user management, multiple user roles, moderate business logic, or siloed
						workflows
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$120K - $250K</div>
				</Grid>
				<Grid className={classNames(classes.row, classes.spacing)} item xs={12} md={4}>
					<Grid container className={classes.pricing} direction="row" justify="center" alignItems="center">
						<img src={withPrefix('/img/wedding-cake.png')} />
					</Grid>
					<Typography className={classes.title} align="center">
						Complex
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						A complex project usually consists of:
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Full-time Project Manager
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						2+ Developers
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1 Application Architect
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1+ Full-time Quality Assurance Tester
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						1+ Full-time UI/UX Designer
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						*May also include database administration (DBA) and Certified Information Systems Security
						Professional (CISSP) services
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						COMPLEX PROJECT EXAMPLES
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Enterprise applications supporting complex business logic, hardware, third-party applications,
						complex user workflows, robust reporting
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Data-driven applications
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.listItem, classes.space)} gutterBottom>
						Consumer-facing application supporting mobile devices, social functionality, AI, complex user
						interactions, robust reporting
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$250K - $2M+</div>
				</Grid>
				<Grid container direction="row" alignItems="center" justify="center" className={classes.space}>
					<Grid className={classes.quoteButton} item xs={12} md={4}>
						<Button text="Get a quote" styles={classes.button} />
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
