import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Check from '@material-ui/icons/Check';

const styles = (theme) => ({
	subheading: {
		...theme.typography.subheading
	},
	space1: {
		marginTop: '38px'
	},
	space2: {
		marginTop: '15px'
	},
	space3: {
		marginTop: '10px'
	},
	space4: {
		marginBottom: '25px'
	},
	space5: {
		marginBottom: '21px'
	},
	block: {
		[theme.breakpoints.up('sm')]: {
			width: '258px'
		},
		height: '238px',
		boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.05)',
		border: 'solid 1px #6f73ff',
		padding: '0 6%'
	},
	divider: {
		borderBottom: 'solid 2px #6f73ff',
		paddingBottom: '4%'
	},
	icon: {
		width: '14px',
		fill: '#6f73ff'
	},
	subpara: {
		fontFamily: 'Lato',
		fontSize: '12px',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '1.67',
		letterSpacing: 'normal',
		color: '#666666'
	},
	textGroup: {
		display: 'flex'
	},
	left: {
		textAlign: 'left'
	}
});

export default withStyles(styles)(({ classes, main, menu, subMenu, bottom, className }) => {
	return (
		<div className={classNames(classes.block, ...className)}>
			<Typography className={classNames(classes.subheading, classes.space1, classes.left)}>
				<span className={classes.divider}>{main.substring(0, 3)}</span>
				{main.substring(3)}
			</Typography>
			{menu &&
				menu.map((v, k) => (
					<div key={k} className={classNames(classes.textGroup, k === 0 && classes.space1)}>
						<div className={classNames(classes.subpara)}>{v}</div>
					</div>
				))}
			{subMenu &&
				subMenu.map((v, k) => (
					<div
						key={k}
						className={classNames(classes.textGroup, k === 0 && !menu ? classes.space2 : classes.space3)}
					>
						<Check className={classes.icon} /> &#160;
						<div className={classNames(classes.subpara)}>{v}</div>
					</div>
				))}
			{bottom &&
				bottom.map((v, k) => (
					<div key={k} className={classNames(classes.textGroup)}>
						<div className={classNames(classes.subpara, classes.space4)}>{v}</div>
					</div>
				))}
		</div>
	);
});
