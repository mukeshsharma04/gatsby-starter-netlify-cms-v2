import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = (theme) => ({
	button: {
		...theme.typography.button,
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5,
		marginTop: theme.spacing.unit * 2,
		borderRadius: '19.5px',
		background: `linear-gradient(to right, #4B96FC, #6F77FB)`,
		textTransform: 'initial'
	}
});

export default withStyles(styles)((props) => {
	const { classes, text, styles, fullWidth, to, component, onClick} = props;
	return (
		<Button className={classNames(classes.button, styles)} fullWidth={fullWidth} to={to} component={component} onClick={onClick}>
			{text}
		</Button>
	);
});
