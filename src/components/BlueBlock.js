import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withPrefix } from 'gatsby-link';

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
	space5: {
		marginBottom: '21px'
	},
	block: {
		[theme.breakpoints.up('sm')]: {
			width: '100%'
		},
		boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.05)',
		border: 'solid 1px #6f73ff',
		padding: '25px 30px'
	},
	divider: {
		borderBottom: 'solid 2px #6f73ff',
		paddingBottom: '15px'
	},
	icon: {
		width: '12px',
		height: '11px',
		backgroundColor: '#ffffff'
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
	},
	middle: {
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	textBlock: {
		minHeight: '20px'
	}
});

export default withStyles(styles)(({ classes, main, menu, subMenu, bottom1, bottom2, className }) => {
	return (
		<div className={classNames(classes.block, ...className)}>
			<Typography className={classNames(classes.subheading, classes.left)}>
				<span className={classes.divider}>{main.substring(0, 3)}</span>
				{main.substring(3)}
			</Typography>
			<div className={classNames(classes.textGroup, menu && classes.space1)}>
				<div className={classNames(classes.subpara)}>{menu}</div>
			</div>
			{subMenu &&
				subMenu.map((v, k) => (
					<div
						key={k}
						className={classNames(
							classes.textGroup,
							k === 0 && !menu ? classes.space1 : classes.space3,
							classes.textBlock
						)}
					>
						<img
							src={withPrefix('/icons/' + v.icon + '.png')}
							className={classNames(classes.middle, classes.icon)}
						/>{' '}
						&#160;
						<div className={classNames(classes.middle, classes.subpara)}>{v.label}</div>
					</div>
				))}
			<div className={classNames(classes.textGroup)}>
				<div className={classNames(classes.subpara, classes.space3)}>
					Need a different technology? <a href="/letstalk">Contact us;</a> it may be part of our current
					portfolio.
				</div>
			</div>
		</div>
	);
});
