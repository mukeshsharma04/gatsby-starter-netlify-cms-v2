import React from 'react';
import PropTypes from 'prop-types';
import CareersPageTemplate from '../../../templates/careers/index';

const CareersPagePreview = ({ entry }) => {
	
	return (
		<CareersPageTemplate
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			ios={entry.getIn([ 'data', 'ios' ])}
			react={entry.getIn([ 'data', 'react' ])}
		/>
	);
};

CareersPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	})
};

export default CareersPagePreview;
