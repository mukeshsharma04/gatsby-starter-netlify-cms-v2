import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';

const styles = (theme) => ({
	container: {
		padding: theme.spacing.unit * 8
	},
	row: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	},
	divider: {
		borderRight: 'solid 1px #d1d1d1'
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
	rangeButton: {
		width: '241px',
		height: '52px',
		backgroundColor: '#f8f8f8',
		textAlign: 'center',
		padding: theme.spacing.unit * 2,
		margin: 'auto'
	},
	button: {
		marginTop: '30px',
		margin: 'auto',
		width: '260px',
		height: '39px'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar />
			<Grid container className={classes.container}>
				<Grid className={classNames(classes.row, classes.divider)} item xs={12} md={4}>
					<Typography className={classes.title} align="center">
						Simple
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
				</Grid>
				<Grid className={classNames(classes.row, classes.divider)} item xs={12} md={4}>
					<Typography className={classes.title} align="center">
						Moderate
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
				</Grid>
				<Grid className={classes.row} item xs={12} md={4}>
					<Typography className={classes.title} align="center">
						Complex
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					</Typography>
					<div className={classes.space} />
					<div className={classes.rangeButton}>$1,000 — $10,000</div>
				</Grid>
				<Button className={classes.button} text="Get a quote" />
			</Grid>
		</React.Fragment>
	);
});
