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
		width: '459.6px',
		height: '300.5px'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom={true}>
						DevOps. It's not just for unicorns anymore.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						DevOps, a practice that eliminates the development and operations silos, has become all the rage
						among companies of all sizes. And for good reason.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						When development and operations unite, your once-disparate teams work as a single unit over a
						highly automated application lifecycle, from building, testing, and releasing to feedback
						monitoring and iteration planning.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						With the help of tools, technology, and DevOps best practices, this marriage leads to continuous
						improvement in every area: faster deployments, faster time to market, higher reliability,
						reduced risk, increased scale, and tighter security.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						It’s the future, here and now.{' '}
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Contact Primoko for a free consultation. Discover how far our talented, creative team can take
						you.
					</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<div className={classes.outerBox}>
						<img src={withPrefix('/img/illustration-dev-ops.png')} />
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
