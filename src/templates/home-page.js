import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import LetsBuild from '../components/LetsBuild';
import BlueSection from '../components/BlueSection';
import Quotes from '../components/Quotes';
import { withStyles } from '@material-ui/core/styles';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		width: 'fit-content',
		color: 'white',
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		padding: '10px'
	}
});

class IndexPage extends React.Component {
	render() {
		const { data, classes } = this.props;
		const { frontmatter } = data.markdownRemark;
		console.log(frontmatter);

		return (
			<React.Fragment>
				<Banner
					text={
						"Hi. We're Primoko. Elite team of engineers and artists. And we are ready to move you from idea to launch."
					}
					banner={withPrefix('/img/banner.jpg')}
					height="600px"
				/>
				<LetsBuild />
				<BlueSection />
				<Quotes quote="A clever person solves a problem. A wise person avoids it." author="Albert Einstein" />
			</React.Fragment>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export const pageQuery = graphql`
	query HomePage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				firstSection {
					heading
					description
					image
					linkText
				}
				secondSection {
					heading
					description
					image
				}
				testimonials {
					author
					quote
				}
			}
		}
	}
`;

export default withStyles(styles)(IndexPage);
