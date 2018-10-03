import React from 'react';
import PropTypes from 'prop-types';
import HomePagePreview from '../../templates/home-page';

const ProductPagePreview = ({ entry, getAsset }) => {
	const entryTestimonials = entry.getIn([ 'data', 'testimonials' ]);
	const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
	console.log(entry.getIn([ 'data' ]));

	return (
		<HomePagePreview
			image={entry.getIn([ 'data', 'image' ])}
			title={entry.getIn([ 'data', 'title' ])}
			firstSection={{
				heading: entry.getIn([ 'data', 'firstSection', 'heading' ]),
				description: entry.getIn([ 'data', 'firstSection', 'description' ]),
				image: entry.getIn([ 'data', 'firstSection', 'image' ]),
				linkText: entry.getIn([ 'data', 'firstSection', 'linkText' ])
			}}
			secondSection={{
				heading: entry.getIn([ 'data', 'secondSection', 'heading' ]),
				description: entry.getIn([ 'data', 'secondSection', 'description' ]),
				image: entry.getIn([ 'data', 'secondSection', 'image' ]),
			}}
			testimonials={testimonials}
		/>
	);
};

ProductPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ProductPagePreview;
