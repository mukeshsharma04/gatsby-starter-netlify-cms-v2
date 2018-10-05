import React from 'react';
import PropTypes from 'prop-types';
import ServicesWebPagePreviewTemplate from '../../../templates/services/web';

const ServicesWebPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	return (
		<ServicesWebPagePreviewTemplate
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			testimonials={testimonials}
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
