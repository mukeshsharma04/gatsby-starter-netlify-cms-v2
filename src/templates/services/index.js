import React, { Component } from 'react';
import TabBar from '../../components/TabBar';
import Banner from '../../components/Banner';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
import Button from '../../components/Button';
import Quotes from '../../components/Quotes';
import { servicesFields } from '../../metadata';
import Link, { withPrefix } from 'gatsby-link';
import ReactDOM from 'react-dom';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		}
	},
	recruitment: {
		margin: 'auto',
		paddingLeft: '8%',
		paddingRight: '8%',
		[theme.breakpoints.down('sm')]: {
			marginTop: '40px'
		}
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
	title: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		}
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: '20px'
	},
	space2: {
		marginTop: '29px'
	},
	divider: {
		marginTop: theme.spacing.unit * 8,
		marginBottom: theme.spacing.unit * 8,
		backgroundColor: '#d1d1d1'
	},
	blueText: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#6f73ff'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#6f73ff'
		}
	},
	chip: {
		color: '#6f73ff',
		backgroundColor: '#f0f1ff',
		marginRight: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	block: {
		[theme.breakpoints.down('sm')]: {
			width: '-webkit-fill-available',
			height: '290px'
		},
		[theme.breakpoints.up('md')]: {
			width: '-webkit-fill-available',
			height: '455px'
		},
		float: 'right',
		position: 'relative',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		width: '100%'
	},
	logo: {
		width: '153.5px',
		height: '31px'
	},
	client: {
		color: 'white',
		fontSize: '16px',
		fontWeight: '500'
	},
	humanokoButton: {
		width: '260px',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			marginBottom: '40px'
		}
	}
});

export default withStyles(styles)(
	class ServicesIndexPagePreviewTemplate extends Component {
		constructor(props) {
			super(props);
			this.myRef = React.createRef();
		}

		componentDidMount() {
			const domNode = ReactDOM.findDOMNode(this.myRef.current);
			domNode.scrollIntoView();
		}

		render() {
			const { data, classes } = this.props;
			const { frontmatter } = data.markdownRemark;
			console.log(frontmatter);

			const tag = (
				<Typography className={classes.text} align="center">
					{frontmatter.title}
				</Typography>
			);

			return (
				<React.Fragment>
					<TabBar fields={servicesFields} />
					<Banner banner={withPrefix(frontmatter.image)} tag={tag} height="425px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title} gutterBottom>
								{frontmatter.heading}
							</Typography>
							{frontmatter.description &&
								frontmatter.description.split('<br />').map((v, k) => (
									<div key={k}>
										<br />
										<Typography className={classes.paragraph} gutterBottom>
											{v}
										</Typography>
									</div>
								))}
							<Divider className={classes.divider} />
						</Grid>

						{frontmatter.technologies &&
							frontmatter.technologies.map((v, k) => (
								<Grid item key={k} className={classes.space} xs={12} md={5}>
									<Typography className={classes.title} gutterBottom>
										{v.heading}
									</Typography>
									<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
										{v.description}
									</Typography>
									<Typography className={classNames(classes.blueText, classes.space)}>
										{v.helperText}
									</Typography>
									<div className={classes.space}>
										{v.tags
											.split(',')
											.map((vlaue, key) => (
												<Chip key={key} label={vlaue} className={classes.chip} />
											))}
									</div>
									<Grid item xs={10} md={8}>
										<Button text={v.buttonText} to="/services/mobile" component={Link} />
									</Grid>
								</Grid>
							))}
					</Grid>
					<Banner banner={withPrefix(frontmatter.sepratorImage)} height="322px" />
					<Grid container justify="space-between" id="recruitment-staffing" ref={this.myRef}>
						<Grid className={classes.recruitment} item xs={12} md={6}>
							<Typography className={classes.title} gutterBottom>
								{frontmatter.humanoko.heading}
							</Typography>
							{frontmatter.humanoko.description &&
								frontmatter.humanoko.description.split('<br />').map((v, k) => (
									<div key={k}>
										<Typography
											className={classNames(classes.paragraph, classes.space2)}
											gutterBottom
										>
											{v}
										</Typography>
									</div>
								))}
							<Button
								text={frontmatter.humanoko.button}
								to="#"
								component={Link}
								styles={classes.humanokoButton}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<div
								className={classes.block}
								style={{ backgroundImage: `url(${withPrefix(frontmatter.humanoko.image)})` }}
							/>
						</Grid>
					</Grid>
					{frontmatter.testimonials.map((v, k) => (
						<Quotes key={k} author={v.author} quote={v.quote} authorRole={v.authorRole} />
					))}
				</React.Fragment>
			);
		}
	}
);

export const pageQuery = graphql`
	query ServicesIndexPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				sepratorImage
				heading
				description
				humanoko {
					heading
					button
					image
					description
				}
				testimonials {
					author
					authorRole
					quote
				}
				technologies {
					heading
					tags
					helperText
					buttonText
					description
				}
			}
		}
	}
`;
