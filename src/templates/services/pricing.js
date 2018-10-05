import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';

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
	row: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	},
	divider: {
		[theme.breakpoints.up('sm')]: {
			borderRight: 'solid 1px #d1d1d1'
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
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	listItem: {
		display: 'flex'
	},
	space: {
		marginTop: theme.spacing.unit * 2
	},
	rangeButton: {
		height: '52px',
		backgroundColor: '#f8f8f8',
		textAlign: 'center',
		padding: theme.spacing.unit * 2,
		margin: 'auto'
	},
	pricing: {
		height: '69px',
		marginBottom: '45px'
	},
	quoteButton: {
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			position: 'fixed',
			top: '90%',
			left: '0',
			width: '100%',
			backgroundColor: 'white',
			height: '10%',
			borderTop: '1px solid #d1d1d1',
			padding: '0 30px',
			zIndex: '100'
		}
	},
	button: {
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	spacing: {
		marginTop: '40px',
		marginBottom: '40px'
	},
	bullet: {
		marginRight: '15px'
	}
});

const ServicesPricingPagePreviewTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;
	const { plans } = frontmatter.pricing;
	console.log(frontmatter);
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container}>
				{plans &&
					plans.map((v, k) => (
						<Grid
							key={k}
							className={classNames(classes.row, classes.divider, classes.spacing)}
							item
							xs={12}
							sm={4}
						>
							<Grid
								container
								className={classes.pricing}
								direction="row"
								justify="center"
								alignItems="center"
							>
								<img src={withPrefix(v.image)} />
							</Grid>
							<Typography className={classes.title} align="center">
								{v.plan}
							</Typography>
							<div className={classes.space} />
							<div className={classes.rangeButton}>{v.price}</div>
							<Typography className={classNames(classes.paragraph, classes.space)}>
								{v.description}
							</Typography>
							{v.items.map((val, key) => (
								<Typography
									key={key}
									className={classNames(classes.paragraph, classes.listItem, classes.space)}
									gutterBottom
								>
									<span className={classes.bullet}>&#8226;</span>
									{val}
								</Typography>
							))}
							{v.note && (
								<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
									{v.note}
								</Typography>
							)}
							<Typography className={classNames(classes.paragraph, classes.space)}>
								{v.project}
							</Typography>
							{v.examples.map((val, key) => (
								<Typography
									key={key}
									className={classNames(classes.paragraph, classes.listItem, classes.space)}
									gutterBottom
								>
									<span className={classes.bullet}>&#8226;</span>Mobile applications with no
									{val}
								</Typography>
							))}
						</Grid>
					))}
				<Grid container direction="row" alignItems="center" justify="center" className={classes.space}>
					<Grid className={classes.quoteButton} item xs={12} sm={4}>
						<Button text="Get a quote" styles={classes.button} />
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default withStyles(styles)(ServicesPricingPagePreviewTemplate);

export const pageQuery = graphql`
	query ServicesPricingPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
				pricing {
					heading
					description
					plans {
						description
						items
						plan
						price
						note
						image
						examples
						project
					}
				}
			}
		}
	}
`;
