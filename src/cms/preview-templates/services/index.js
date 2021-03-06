import React from 'react';
import PropTypes from 'prop-types';
import ServicesIndexPagePreviewTemplate from '../../../templates/services';

const ServicesIndexPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
	const entryTechnologies = entry.getIn([ 'data', 'technologies' ]);
	const technologies = entryTechnologies ? entryTechnologies.toJS() : [];

	return (
		<ServicesIndexPagePreviewTemplate
			sepratorImage={entry.getIn([ 'data', 'sepratorImage' ])}
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			humanoko={{
				heading: entry.getIn([ 'data', 'humanoko', 'heading' ]),
				description: entry.getIn([ 'data', 'humanoko', 'description' ])
			}}
			testimonials={testimonials}
			technologies={technologies}
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
