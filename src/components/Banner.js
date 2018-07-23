import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
	...theme.typography,
	container: {
		position: 'absolute',
		top: '40%'
	}
});

export default withStyles(styles)(({ classes, text, banner, height }) => {
	return (
		<div>
			<img src={banner} style={{height: height, width: '100%'}}/>
			<Grid className={classes.container} direction="row" justify="center" alignItems="center" container>
				<Grid item>{text}</Grid>
			</Grid>
		</div>
	);
});
