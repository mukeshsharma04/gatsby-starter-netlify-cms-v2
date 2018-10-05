import React from 'react';
import PropTypes from 'prop-types';
import { ResultsPageTemplate } from '../../templates/results-page';

const ResultsPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
	const entryMobileImages = entry.getIn([ 'data', 'mobileImages' ]);
	const mobileImages = entryMobileImages ? entryMobileImages.toJS() : [];
	const entryDesktopImages = entry.getIn([ 'data', 'desktopImages' ]);
	const desktopImages = entryDesktopImages ? entryDesktopImages.toJS() : [];
	
	return (
		<ResultsPageTemplate
			title={entry.getIn([ 'data', 'title' ])}
			description={entry.getIn([ 'data', 'description' ])}
			mobileImages={mobileImages}
			desktopImages={desktopImages}
			testimonials={testimonials}
		/>
	);
};

ResultsPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ResultsPagePreview;
