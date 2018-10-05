import React from 'react';
import PropTypes from 'prop-types';
import ThePrimokoDifferenceIndexPagePreviewTemplate from '../../../templates/the-primoko-difference';

const ThePrimokoDifferenceIndexPagePreview = ({ entry }) => {

	return (
		<ThePrimokoDifferenceIndexPagePreviewTemplate
			image={entry.getIn([ 'data', 'image' ])}
			logo={entry.getIn([ 'data', 'logo' ])}
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			list={entry.getIn([ 'data', 'list' ])}
			others={entry.getIn([ 'data', 'others' ])}
		/>
	);
};

ThePrimokoDifferenceIndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ThePrimokoDifferenceIndexPagePreview;
