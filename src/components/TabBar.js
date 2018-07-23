import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
		...theme.typography.tabLink,
		minWidth: 'unset'
	},
	tabSelected: {}
});

class TabBar extends React.Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes, data } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<Tabs
					value={value}
					onChange={this.handleChange}
					classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
					scrollable
					scrollButtons="on"
				>
					{data.map((v, k) => (
						<Tab
							key={k}
							disableRipple
							classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
							label={v}
						/>
					))}
				</Tabs>
			</div>
		);
	}
}

TabBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabBar);
