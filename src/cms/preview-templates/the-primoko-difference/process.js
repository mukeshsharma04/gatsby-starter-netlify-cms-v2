import React from 'react';
import PropTypes from 'prop-types';
import ThePrimokoDifferenceProcessPagePreviewTemplate from '../../../templates/the-primoko-difference/process';

const ThePrimokoDifferenceProcessPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	return (
		<ThePrimokoDifferenceProcessPagePreviewTemplate
			content={widgetFor('body')}
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			peace={entry.getIn([ 'data', 'peace' ])}
			testimonials={testimonials}
		/>
	);
};

ThePrimokoDifferenceProcessPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
  widgetFor: PropTypes.func,
};

export default ThePrimokoDifferenceProcessPagePreview;
