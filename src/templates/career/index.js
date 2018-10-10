import React from 'react';
import Banner from '../../components/Banner';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
import Button from '../../components/Button';
import classNames from 'classnames';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px'
		},
		[theme.breakpoints.up('md')]: {
			padding: '86px 60px'
		},
		[theme.breakpoints.up('lg')]: {
			padding: '86px'
		}
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		}
	},
	subheading: {
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '34px',
		[theme.breakpoints.down('sm')]: {
			...theme.typography.subheading
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.subheading
		}
	},
	paragraph: {
		position: 'relative',
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	button: {
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		},
		[theme.breakpoints.up('md')]: {
			width: '260px'
		},
		marginBottom: '7%'
	},
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
	},
	row: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '50px',
		backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 2%, #ffffff)'
	},
	space: {
		marginTop: '30px'
	}
});

const CareerPage = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;

	const tag = (
		<Typography className={classes.text} align="center">
			{frontmatter.title}
		</Typography>
	);

	return (
		<React.Fragment>
			<Banner banner={withPrefix(frontmatter.image)} tag={tag} height="425px" />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={5}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.ios.title}
					</Typography>
					<Typography className={classes.subheading} gutterBottom>
						{frontmatter.ios.heading}
					</Typography>
					<div style={{ position: 'relative' }}>
						{frontmatter.ios.description.split('<br />').map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space)} gutterBottom>
								{v}
							</Typography>
						))}
						<span className={classes.row}>&#160;</span>
					</div>
					<Button
						styles={classNames(classes.button, classes.space)}
						to={'/careers/ios'}
						component={Link}
						text="Apply now"
					/>
				</Grid>
				<Grid item xs={12} md={5}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.react.title}
					</Typography>
					<Typography className={classes.subheading} gutterBottom>
						{frontmatter.react.heading}
					</Typography>
					<div style={{ position: 'relative' }}>
						{frontmatter.react.description.split('<br />').map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space)} gutterBottom>
								{v}
							</Typography>
						))}
						<span className={classes.row}>&#160;</span>
					</div>
					<Button
						styles={classNames(classes.button, classes.space)}
						to={'/careers/react'}
						component={Link}
						text="Apply now"
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

CareerPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default withStyles(styles)(CareerPage);

export const careerPageQuery = graphql`
	query CareerPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				ios {
					title
					heading
					button
					description
				}
				react {
					title
					heading
					button
					description
				}
			}
		}
	}
`;
