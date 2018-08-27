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
		},
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
		textAlign: 'center'
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
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
				</Grid>
				<Grid className={classNames(classes.row, classes.divider, classes.spacing)} item xs={12} md={4}>
					<Grid container className={classes.pricing} direction="row" justify="center" alignItems="center">
						<img src={withPrefix('/img/cake.png')} />
					</Grid>
					<Typography className={classes.title} align="center">
						Moderate
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
				</Grid>
				<Grid className={classNames(classes.row, classes.spacing)} item xs={12} md={4}>
					<Grid container className={classes.pricing} direction="row" justify="center" alignItems="center">
						<img src={withPrefix('/img/wedding-cake.png')} />
					</Grid>
					<Typography className={classes.title} align="center">
						Complex
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
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
