import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
	
	return (
		<AboutPageTemplate
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			heading={entry.getIn([ 'data', 'heading' ])}
			description={entry.getIn([ 'data', 'description' ])}
			joinTeam={{
				heading: entry.getIn([ 'data', 'joinTeam', 'heading' ]),
				button: entry.getIn([ 'data', 'joinTeam', 'button' ]),
				description: entry.getIn([ 'data', 'joinTeam', 'description' ])
			}}
			testimonials={testimonials}
		/>
	);
};

AboutPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default AboutPagePreview;
