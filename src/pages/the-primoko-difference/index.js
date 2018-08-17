import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';
import { thePrimokoDiffernceFields } from '../../metadata';
import Link, { withPrefix } from 'gatsby-link';
import { Hidden } from '@material-ui/core';

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
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		width: 'fit-content',
		color: 'white',
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		padding: '10px'
	},
	list: {
		display: 'list-item'
	},
	unordered: {
		paddingLeft: theme.spacing.unit * 3
	},
	block: {
		width: '260px',
		height: '206px',
		background: `linear-gradient(to right, #4198ff, #6f73ff)`
	},
	logo: {
		width: '153.5px',
		height: '31px'
	},
	blockade: {
		height: '210px'
	}
});

export default withStyles(styles)(({ classes }) => {
	const tag = (
		<Typography className={classes.text} align="center">
			The Primoko Difference
		</Typography>
	);
	return (
		<React.Fragment>
			<TabBar fields={thePrimokoDiffernceFields} />
			<Banner banner={withPrefix('/img/achievement.jpg')} tag={tag} height="425px" />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={8}>
					<Typography className={classes.title} gutterBottom>
						Why Primoko? We speak geek.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						If you search the web for "web development," "software development," or "app development,"
						you’ll find millions of companies plying their wares.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						We’re one of those millions, but here’s what makes us different.
					</Typography>
					<div className={classes.unordered}>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							We’re all engineers. Seriously. Even our sales, marketing, and customer relations people
							started as engineers before branching out into other functions. This means we all speak
							geek.
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							When you work with us, you’ll speak with an engineer.
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							Your Technical Account Manager will not be a sales person or even a junior engineer. In most
							cases, your contact will be a senior engineer, senior enough to collaborate with your CTO.
							If you do not have a CTO, then we are happy to wear that hat and help you to craft
							technology that is in your best interest, advising you as if we were your CTO and not a
							third party.
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							If you need a high level of support, we will work as if we are part of your company, not a
							separate, outside vendor.
						</Typography>
					</div>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						We like to chase the hard engineering problems, the kind that hold companies back.
					</Typography>
					<Grid item xs={12} md={4}>
						<Button
							text="Read our manifesto"
							fullWidth
							to="/the-primoko-difference/manifesto"
							component={Link}
						/>
					</Grid>
				</Grid>
				<Hidden smDown>
					<Grid item xs={12} md={3}>
						<div className={classes.block}>
							<Grid container className={classes.blockade} justify="center" alignItems="center">
								<img src={withPrefix('/img/primoko-logo-white.png')} className={classes.logo} />
							</Grid>
						</div>
					</Grid>
				</Hidden>
			</Grid>
		</React.Fragment>
	);
});
