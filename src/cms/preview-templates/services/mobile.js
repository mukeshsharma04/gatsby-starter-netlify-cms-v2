import React from 'react';
import PropTypes from 'prop-types';
import ServicesMobilePagePreviewTemplate from '../../../templates/services/mobile';

const ServicesMobilePagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	return (
		<ServicesMobilePagePreviewTemplate
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			rightList={entry.getIn([ 'data', 'rightList' ])}
			leftList={entry.getIn([ 'data', 'leftList' ])}
			others={entry.getIn([ 'data', 'others' ])}
			description={entry.getIn([ 'data', 'description' ])}
			testimonials={testimonials}
		/>
	);
};

ServicesMobilePagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ServicesMobilePagePreview;
