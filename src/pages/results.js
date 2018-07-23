import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quotes from '../components/Quotes';
import classNames from 'classnames';

const styles = (theme) => ({
	container: {
		padding: theme.spacing.unit * 10
	},
	title: {
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	space: {
		marginTop: theme.spacing.unit * 4
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={12}>
					<Typography className={classes.title}>Selected clients</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						Primoko is proud to bring you our expert and elite engineering experience with the following
						companies.
					</Typography>
				</Grid>
			</Grid>
			<Quotes
				quote="The team at Primoko is top notch. Cognizant of best practices for code hygiene and thorough 
				documentation making for excellent coordination amongst engineers working with the code 
				base currently as well as those on-boarding at a later time."
				author="George Spyros,"
				authorRole="Founder of Filmakr"
			/>
		</React.Fragment>
	);
});
