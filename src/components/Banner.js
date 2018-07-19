import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import banner from '../img/banner.jpg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	...theme.typography,
	banner: {
		backgroundImage: `url(${banner})`,
		height: '600px',
		backgroundPosition: 'bottom',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: 'relative'
	},
	text: {
		...theme.typography.hero,
		width: 'fit-content',
		color: 'white',
    background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
    padding: '10px'
	},
	container: {
		position: 'absolute',
		top: '40%'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<div className={classes.banner}>
			<Grid className={classes.container} direction="row" justify="center" alignItems="center" container>
				<Grid item>
					<Typography className={classes.text} align="left">
						If you can dream it,
					</Typography>
					<Typography className={classes.text} align="left">
						our software engineers can build it.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
});
