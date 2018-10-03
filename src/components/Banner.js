import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	...theme.typography,
	container: {
		margin: 'auto',
		position: 'absolute',
		top: '0',
		left: '0',
		bottom: '0',
		right: '0'
	},
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		color: 'white',
		margin: '25px auto',
		padding: '7px 0',
		maxWidth: '90%'
	},
	textMultiline: {
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		display: 'inline',
		padding: '0.85rem',
		boxDecorationBreak: 'clone',
		WebkitBoxDecorationBreak: 'clone'
	}
});

export default withStyles(styles)(({ classes, text, tag, banner, height }) => {
	return (
		<div
			style={{
				position: 'relative',
				backgroundImage: `url(${withPrefix(banner)})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				width: '100%',
				height: height
			}}
		>
			<Grid className={classes.container} direction="row" justify="center" alignItems="center" container>
				{text ? (
					<Grid item xs={12} md={6} lg={6}>
						<Typography className={classes.text}>
							<span className={classes.textMultiline}>{text}</span>
						</Typography>
					</Grid>
				) : (
					tag
				)}
			</Grid>
		</div>
	);
});
