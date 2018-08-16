import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';

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
	outerBox: {
		backgroundImage: `url(${withPrefix('/img/illustration-dev-ops.png')})`,
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
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom>
						DevOps. Lean. Integrated. Predictive. Automated.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						DevOps brings together software development (Dev) and software operations (Ops) to allow
						developers and operations teams to work as a single unit over a highly automated software
						development lifecycle that runs from building to deploying code to testing to releasing to
						monitoring feedback, iteration after iteration.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						With the help of real-time dashboards, tools, technology, and best practices, DevOps leads to
						continuous improvement in every area: constant visibility, faster deployments, faster time to
						market, higher reliability, reduced risk, increased scale, and tighter security. DevOps also
						helps you build a culture that supports collaboration between development and operational
						engineering teams.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						It’s the future, here and now.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Contact us today to implement DevOps in your organization, or to extend your DevOps team.
					</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<div className={classes.outerBox} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
