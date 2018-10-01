import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withPrefix } from 'gatsby-link';
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const styles = (theme) => ({
	banner: {
		position: 'relative',
		backgroundImage: `url(${withPrefix('/img/typing.png')})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			height: '200px'
		},
		[theme.breakpoints.up('sm')]: {
			height: '348px'
		}
	},
	block: {
		width: '380px',
		height: '280px',
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		top: theme.spacing.unit * 4,
		right: theme.spacing.unit * 2
	},
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		},
		marginTop: theme.spacing.unit * 3
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		},
		marginTop: theme.spacing.unit * 2,
		padding: '0 5%'
	},
	button: {
		width: '260px',
		height: '39px',
		borderRadius: '19.5px',
		marginTop: theme.spacing.unit * 3,
		'&:hover': {
			color: '#ffffff'
		}
	}
});

export const AboutPageTemplate = ({
	image,
	title,
	heading,
	description,
	intro,
	main,
	testimonials,
	fullImage,
	pricing,
	classes
}) => {
	classes = classes || {};

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-10 is-offset-1">
							<div className="content">
								<div
									className="full-width-image-container margin-top-0"
									style={{ backgroundImage: `url(${image})` }}
								>
									<h2
										className="has-text-weight-bold is-size-1"
										style={{
											boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
											backgroundColor: '#f40',
											color: 'white',
											padding: '1rem'
										}}
									>
										{title}
									</h2>
								</div>
								<div className="columns">
									<div className="column is-7">
										<h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
										<p>{description}</p>
									</div>
								</div>
								<Features gridItems={intro.blurbs} />
								<div className="columns">
									<div className="column is-7">
										<h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
										<p>{main.description}</p>
									</div>
								</div>
								<div className="tile is-ancestor">
									<div className="tile is-vertical">
										<div className="tile">
											<div className="tile is-parent is-vertical">
												<article className="tile is-child">
													<img
														style={{ borderRadius: '5px' }}
														src={main.image1.image}
														alt={main.image1.alt}
													/>
												</article>
											</div>
											<div className="tile is-parent">
												<article className="tile is-child">
													<img
														style={{ borderRadius: '5px' }}
														src={main.image2.image}
														alt={main.image2.alt}
													/>
												</article>
											</div>
										</div>
										<div className="tile is-parent">
											<article className="tile is-child">
												<img
													style={{ borderRadius: '5px' }}
													src={main.image3.image}
													alt={main.image3.alt}
												/>
											</article>
										</div>
									</div>
								</div>
								<Testimonials testimonials={testimonials} />
								<div
									className="full-width-image-container"
									style={{ backgroundImage: `url(${fullImage})` }}
								/>
								<h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
								<p className="is-size-5">{pricing.description}</p>
								<Pricing data={pricing.plans} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const AboutPage = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;
	return (
		<AboutPageTemplate
			image={frontmatter.image}
			title={frontmatter.title}
			heading={frontmatter.heading}
			description={frontmatter.description}
			intro={frontmatter.intro}
			main={frontmatter.main}
			testimonials={frontmatter.testimonials}
			fullImage={frontmatter.full_image}
			pricing={frontmatter.pricing}
			classes={classes}
		/>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutPage);

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				heading
				description
				intro {
					blurbs {
						image
						text
					}
					heading
					description
				}
				main {
					heading
					description
					image1 {
						alt
						image
					}
					image2 {
						alt
						image
					}
					image3 {
						alt
						image
					}
				}
				testimonials {
					author
					quote
				}
				full_image
				pricing {
					heading
					description
					plans {
						description
						items
						plan
						price
					}
				}
			}
		}
	}
`;
