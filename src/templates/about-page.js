import React from 'react';
import PropTypes from 'prop-types';
import TextImageWidget from '../components/TextImageWidget';
import { withStyles } from '@material-ui/core/styles';
import Quotes from '../components/Quotes';
import { withPrefix } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '../components/Button';
import Hidden from '@material-ui/core/Hidden';
import JoinTeam from '../components/JoinTeam';
import Link from 'gatsby-link';
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

export const AboutPageTemplate = ({ title, heading, description, joinTeam, testimonials, image, classes }) => {
	classes = classes || {};

	return (
		<div>
			<TextImageWidget title={title} heading={heading} description={description} joinTeam={joinTeam} />
			<div className={classes.banner} style={{ backgroundImage: `url(${withPrefix(image)})` }}>
				<Hidden xsDown>
					<Grid container direction="row" justify="flex-end" alignItems="center" className={classes.block}>
						<Grid container justify="center" alignItems="center">
							<Grid item>
								<Typography className={classes.subTitle} align="center">
									{joinTeam.heading}
								</Typography>
								<Typography className={classes.paragraph} align="center">
									{joinTeam.description}
								</Typography>
								<div style={{ width: '100%', textAlign: 'center' }}>
									<Button
										styles={classes.button}
										text={joinTeam.button}
										to="/careers"
										component={Link}
									/>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			</div>
			<Hidden smUp>
				<JoinTeam />
			</Hidden>
			{testimonials.map((v, k) => <Quotes key={k} author={v.author} quote={v.quote} />)}
		</div>
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
			joinTeam={frontmatter.joinTeam}
			testimonials={frontmatter.testimonials}
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
				joinTeam {
					heading
					button
					description
				}
				testimonials {
					author
					quote
				}
			}
		}
	}
`;
