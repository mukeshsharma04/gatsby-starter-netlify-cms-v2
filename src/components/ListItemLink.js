import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const ListItemLink = (props) => {
	const { primary, to, style } = props;
	return (
		<li>
			<ListItem button component={Link} to={to}>
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

export default ListItemLink;
