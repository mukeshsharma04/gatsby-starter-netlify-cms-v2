import React from 'react';
import PropTypes from 'prop-types';
import CareersReactPageTemplate from '../../../templates/careers/react';

const CareersReactPagePreview = ({ entry }) => {
	
	return (
		<CareersReactPageTemplate
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
		/>
	);
};

CareersReactPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default CareersReactPagePreview;
