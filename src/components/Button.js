import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	button: {
		cursor: 'pointer',
		marginTop: theme.spacing.unit * 3,
		marginBottom: theme.spacing.unit * 5,
		paddingTop: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit*4,
		paddingRight: theme.spacing.unit*4,
		width: 'fit-content',
		borderRadius: '19.5px',
		background: `linear-gradient(to right, #4B96FC, #6F77FB)`
	},
	buttonText: {
		fontSize: '14px',
		fontWeight: '500',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#ffffff'
	}
});

export default withStyles(styles)((props) => {
	const { classes, text } = props;
	return (
		<div className={classes.button}>
			<p className={classes.buttonText}>{text}</p>
		</div>
	);
});
