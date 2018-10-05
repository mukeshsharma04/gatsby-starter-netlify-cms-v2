import React from 'react';
import PropTypes from 'prop-types';
import ServicesPricingPagePreviewTemplate from '../../../templates/services/pricing';

const ServicesPricingPagePreview = ({ entry }) => {
	const entryPricingPlans = entry.getIn([ 'data', 'pricing', 'plans' ]);
	const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : [];
	return (
		<ServicesPricingPagePreviewTemplate
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			pricing={{
				heading: entry.getIn([ 'data', 'pricing', 'heading' ]),
				description: entry.getIn([ 'data', 'pricing', 'description' ]),
				plans: pricingPlans
			}}
		/>
	);
};

ServicesPricingPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ServicesPricingPagePreview;
