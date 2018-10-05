import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quotes from '../components/Quotes';
import { withPrefix } from 'gatsby-link';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '30px 40px'
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: '81px',
			paddingLeft: '149px',
			paddingRight: '128px'
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
	paragraph: {
		paddingTop: '30px',
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	right: {
		textAlign: 'right'
	},
	center: {
		textAlign: 'center'
	},
	gridItem: {
		padding: '20px 0'
	},
	opacity: {
		opacity: '0.75'
	}
});

const ResultsPageTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;
	const desktops = frontmatter.desktop.desktopImages;
	const mobiles = frontmatter.mobile.mobileImages;
	
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.title}
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						{frontmatter.description}
					</Typography>
				</Grid>
				<Grid item xs={12} md={12} className={classes.space}>
					<Hidden xsDown>
						<Grid container justify="flex-start" alignItems="center">
							{desktops.map((v, k) => (
								<React.Fragment key={k}>
									{v.left && (
										<Grid item xs={5} className={classes.gridItem}>
											<img src={withPrefix(v.left[0].image)} width={v.left[0].width} />
										</Grid>
									)}
									{v.center && (
										<Grid item xs={4} className={classes.gridItem}>
											<img src={withPrefix(v.center[0].image)} width={v.center[0].width} />
										</Grid>
									)}
									{v.right && (
										<Grid item xs={3} className={classNames(classes.right, classes.gridItem)}>
											<img
												className={
													v.right[0].image.indexOf('Philips') > 0 ? classes.opacity : null
												}
												src={withPrefix(v.right[0].image)}
												width={v.right[0].width}
											/>
										</Grid>
									)}
								</React.Fragment>
							))}
						</Grid>
					</Hidden>
				</Grid>
				<Grid item xs={12} md={12}>
					<Hidden smUp>
						<Grid container justify="center" alignItems="center">
							{mobiles &&
								mobiles.map((v, k) => (
									<React.Fragment key={k}>
										{v.left && (
											<Grid item xs={6} className={classes.gridItem}>
												<img src={withPrefix(v.left[0].image)} width={v.left[0].width} />
											</Grid>
										)}
										{v.center && (
											<Grid item xs={12} className={classNames(classes.center, classes.gridItem)}>
												<img src={withPrefix(v.center[0].image)} width={v.center[0].width} />
											</Grid>
										)}
										{v.right && (
											<Grid item xs={6} className={classNames(classes.right, classes.gridItem)}>
												<img
													className={
														v.right[0].image.indexOf('Philips') > 0 ? classes.opacity : null
													}
													src={withPrefix(v.right[0].image)}
													width={v.right[0].width}
												/>
											</Grid>
										)}
									</React.Fragment>
								))}
						</Grid>
					</Hidden>
				</Grid>
				<div className={classes.space} />
			</Grid>
			{frontmatter.testimonials.map((v, k) => (
				<Quotes key={k} author={v.author} quote={v.quote} authorRole={v.authorRole} />
			))}
		</React.Fragment>
	);
};

export default withStyles(styles)(ResultsPageTemplate);

export const aboutPageQuery = graphql`
	query ResultsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				description
				mobile {
					mobileImages {
						left {
							image
							width
						}
						center {
							image
							width
						}
						right {
							image
							width
						}
					}
				}
				desktop {
					desktopImages {
						left {
							image
							width
						}
						center {
							image
							width
						}
						right {
							image
							width
						}
					}
				}
				testimonials {
					author
					quote
				}
			}
		}
	}
`;
