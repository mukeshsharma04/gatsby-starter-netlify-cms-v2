import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const ListItemLink = (props) => {
	const { primary, to, style, subLink } = props;
	return subLink ? (
		<li>
			<a href={to}>
				<p className={style}>{primary}</p>
			</a>
		</li>
	) : (
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
