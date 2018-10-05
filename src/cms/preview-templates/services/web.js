import React from 'react';
import PropTypes from 'prop-types';
import ServicesWebPagePreviewTemplate from '../../../templates/services/web';

const ServicesWebPagePreview = ({ entry }) => {
	return (
		<ServicesWebPagePreviewTemplate
      title={entry.getIn([ 'data', 'title' ])}
      image={entry.getIn([ 'data', 'image' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			rightList={entry.getIn([ 'data', 'rightList' ])}
			leftList={entry.getIn([ 'data', 'leftList' ])}
			others={entry.getIn([ 'data', 'others' ])}
			description={entry.getIn([ 'data', 'description' ])}
		/>
	);
};

ServicesWebPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ServicesWebPagePreview;
