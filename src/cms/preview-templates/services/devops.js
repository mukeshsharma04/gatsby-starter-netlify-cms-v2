import React from 'react';
import PropTypes from 'prop-types';
import ServicesDevOpsPagePreviewTemplate from '../../../templates/services/devops';

const ServicesDevOpsPagePreview = ({ entry }) => {
	return (
		<ServicesDevOpsPagePreviewTemplate
      title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
		/>
	);
};

ServicesDevOpsPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ServicesDevOpsPagePreview;
