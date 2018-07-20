import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
	container: {
		padding: '3%',
		height: '392px',
		backgroundColor: '#f8f8f8'
	},
	section: {
		padding: 'auto'
	},
	quote: {
		...theme.typography.quote,
		color: '#6f73ff',
		letterSpacing: 'normal',
		borderLeft: '9px solid #6f73ff',
		backgroundColor: '#ffffff',
		width: 'fit-content'
	},
	author: {
		...theme.typography.quote,
		color: '#6f73ff',
		letterSpacing: 'normal',
		textAlign: 'right',
		padding: '3% 23%'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container justify="center" alignItems="center" className={classes.container}>
			<Grid className={classes.section} item xs={12} md={4}>
				<div className={classes.quote}>“A clever person solves a problem.</div>
				<div className={classes.quote}>A wise person avoids it.”</div>
				<div className={classes.author}>— Albert Einstein</div>
			</Grid>
		</Grid>
	);
});
