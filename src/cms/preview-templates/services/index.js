import React from 'react';
import PropTypes from 'prop-types';
import ServicesIndexPagePreviewTemplate from '../../../templates/services';

const ServicesIndexPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	return (
		<ServicesIndexPagePreviewTemplate
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			main={{
				heading: entry.getIn([ 'data', 'main', 'heading' ]),
				description: entry.getIn([ 'data', 'main', 'description' ])
			}}
			testimonials={testimonials}
		/>
	);
};

ServicesIndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ServicesIndexPagePreview;
