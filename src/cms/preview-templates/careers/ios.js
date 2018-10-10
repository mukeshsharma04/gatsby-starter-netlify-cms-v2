import React from 'react';
import PropTypes from 'prop-types';
import CareersIosPageTemplate from '../../../templates/careers/ios';

const CareersIosPagePreview = ({ entry }) => {
	
	return (
		<CareersIosPageTemplate
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
		/>
	);
};

CareersIosPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default CareersIosPagePreview;
