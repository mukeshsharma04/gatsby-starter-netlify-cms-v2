import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ paddingTop: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	tabsRoot: {
		borderBottom: '1px solid #e8e8e8'
	},
	tabsIndicator: {
		backgroundColor: '#1890ff'
	},
	tabRoot: {
		fontFamily: 'Lato',
		fontSize: '16px',
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontStretch: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#333333',
		textTransform: 'initial',
		minWidth: 100,
		marginRight: theme.spacing.unit * 4,
		'&:hover': {
			color: '#40a9ff',
			opacity: 1,
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: 'bold'
		},
		'&$tabSelected': {
			color: '#1890ff',
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: 'bold'
		},
		'&:focus': {
			color: '#40a9ff',
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: 'bold'
		}
	},
	tabSelected: {},
	typography: {
		padding: theme.spacing.unit * 3
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	link: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtabLink
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.tabLink
		}
	},
	right: {
		fontFamily: 'Lato',
		fontSize: '16px',
		fontWeight: '500',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'right',
		color: '#4198ff'
	}
});

class CustomizedTabs extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<Tabs
					value={value}
					onChange={this.handleChange}
					classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
				>
					<Tab disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="HQ" />
					<Tab
						disableRipple
						classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						label="Office 2"
					/>
					<Tab
						disableRipple
						classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						label="Office 3"
					/>
				</Tabs>
				{value === 0 && (
					<TabContainer>
						<Grid direction="row" justify="space-between" container>
							<Grid item xs={6} md={6}>
								<Typography className={classes.paragraph} gutterBottom>
									231 Clarksville Rd
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Suite 3
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									West Windsor, NJ - 08550
								</Typography>
							</Grid>
							<Grid item xs={6} md={6}>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									(413) 248-7626
								</Typography>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									hello@primoko.com
								</Typography>
							</Grid>
							&#160;
							<Grid item xs={12}>
								<iframe
									width="100%"
									height="298"
									src="https://maps.google.com/maps?width=400&amp;height=298&amp;hl=en&amp;q=231%20Clarksville%20Rd%20Suite%203%20West%20Windsor%2C%20NJ%20-%2008550+(Primoko)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								/>
							</Grid>
						</Grid>
					</TabContainer>
				)}
				{value === 1 && (
					<TabContainer>
						<Grid direction="row" justify="space-between" container>
							<Grid item xs={6} md={6}>
								<Typography className={classes.paragraph} gutterBottom>
									Plot 23,
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Maruti Industrial Area,
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Sector 18, Gurugram, Haryana 122015, India
								</Typography>
							</Grid>
							<Grid item xs={6} md={6}>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									(413) 248-7626
								</Typography>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									hello@primoko.com
								</Typography>
							</Grid>
							&#160;
							<Grid item xs={12}>
								<iframe
									width="100%"
									height="298"
									src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.48971,77.062282&amp;q=Plot%2023%2C%20Maruti%20Industrial%20Area%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122015%2C%20India+(Primoko%20Softwares%20Pvt%20Ltd)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								/>
							</Grid>
						</Grid>
					</TabContainer>
				)}
				{value === 2 && (
					<TabContainer>
						<Grid direction="row" justify="space-between" container>
							<Grid item xs={6} md={6}>
								<Typography className={classes.paragraph} gutterBottom>
									Marin Preda
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Street No. 10-12,
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Cluj-Napoca, Romania, 400502
								</Typography>
							</Grid>
							<Grid item xs={6} md={6}>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									(413) 248-7626
								</Typography>
								<Typography className={classNames(classes.link, classes.right)} gutterBottom>
									hello@primoko.com
								</Typography>
							</Grid>
							&#160;
							<Grid item xs={12}>
								<iframe
									width="100%"
									height="298"
									src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=46.747056,23.596989&amp;q=Marin%20Preda%20Street%20No.%2010-12%2C%20Cluj-Napoca%2C%20Romania%2C%20400502+(Primoko%20Softwares%20Pvt%20Ltd)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								/>
							</Grid>
						</Grid>
					</TabContainer>
				)}
			</div>
		);
	}
}

CustomizedTabs.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTabs);
