import React from 'react';
import PropTypes from 'prop-types';
import LetsTalkPage from '../../templates/letstalk-page';

const LetsTalkPagePreview = ({ entry }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

	const entryOffice = entry.getIn([ 'data', 'office' ]);
	const office = entryOffice ? entryOffice.toJS() : [];

	return (
		<LetsTalkPage
			title={entry.getIn([ 'data', 'title' ])}
			office={office}
			testimonials={testimonials}
		/>
	);
};

LetsTalkPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	})
};

export default LetsTalkPagePreview;
