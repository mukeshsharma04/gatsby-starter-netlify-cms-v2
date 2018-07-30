import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import LetsBuild from '../components/LetsBuild';
import BlueSection from '../components/BlueSection';
import Quotes from '../components/Quotes';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withPrefix } from 'gatsby-link'

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
		const { edges: posts } = data.allMarkdownRemark;
		const text = (
			<React.Fragment>
				<Typography className={classes.text} align="left">
					If you can dream it,
				</Typography>
				<Typography className={classes.text} align="left">
					our software engineers can build it.
				</Typography>
			</React.Fragment>
		);

		return (
			<React.Fragment>
				<Banner text={text} banner={withPrefix('/img/banner.jpg')} height="600px" />
				<LetsBuild />
				<BlueSection />
				<Quotes quote="A clever person solves a problem. A wise person avoids it." author="Albert Einstein" />
				{/* <section className="section">
					<div className="container">
						<div className="content">
							<h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
						</div>
						{posts.map(({ node: post }) => (
							<div
								className="content"
								style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
								key={post.id}
							>
								<p>
									<Link className="has-text-primary" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
									<span> &bull; </span>
									<small>{post.frontmatter.date}</small>
								</p>
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className="button is-small" to={post.fields.slug}>
										Keep Reading →
									</Link>
								</p>
							</div>
						))}
					</div>
				</section> */}
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
	query IndexQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
		) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;

export default withStyles(styles)(IndexPage);
