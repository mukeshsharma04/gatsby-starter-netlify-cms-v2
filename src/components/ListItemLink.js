import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	hyperLink: {
		paddingTop: '0',
		paddingBottom: '0'
	}
};

const ListItemLink = (props) => {
	const { primary, to, style, subLink, classes } = props;
	return subLink ? (
		<li>
			<a href={to}>
				<p className={style}>{primary}</p>
			</a>
		</li>
	) : (
		<li>
			<ListItem button component={Link} to={to} className={classes.hyperLink}>
				<p className={style}>{primary}</p>
			</ListItem>
		</li>
	);
};

ListItemLink.propTypes = {
	primary: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired
};

export default withStyles(styles)(ListItemLink);
