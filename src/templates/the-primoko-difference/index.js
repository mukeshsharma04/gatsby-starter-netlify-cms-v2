import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';
import { thePrimokoDiffernceFields } from '../../metadata';
import Link, { withPrefix } from 'gatsby-link';
import { Hidden } from '@material-ui/core';

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
	paragraph: {
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
	space2: {
		marginTop: '40px'
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
	list: {
		display: 'list-item'
	},
	unordered: {
		paddingLeft: theme.spacing.unit * 3
	},
	block: {
		width: '260px',
		height: '206px',
		background: `linear-gradient(to right, #4198ff, #6f73ff)`
	},
	logo: {
		width: '153.5px',
		height: '31px'
	},
	blockade: {
		height: '210px'
	},
	readButton: {
		marginTop: '40px'
	},
	button: {
		width: 'max-content'
	},
	gridItem: {
		[theme.breakpoints.up('sm')]: {
			paddingRight: '40px'
		}
	}
});

const ThePrimokoDifferenceIndexPagePreviewTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;

	const tag = (
		<Typography className={classes.text} align="center">
			{frontmatter.title}
		</Typography>
	);

	return (
		<React.Fragment>
			<TabBar fields={thePrimokoDiffernceFields} />
			<Banner banner={withPrefix(frontmatter.image)} tag={tag} height="425px" />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={8} className={classes.gridItem}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.heading}
					</Typography>
					{frontmatter.description.split('<br />').map((v, k) => (
						<Typography key={k} className={classNames(classes.paragraph, classes.space2)} gutterBottom>
							{v}
						</Typography>
					))}
					<div className={classes.unordered}>
						{frontmatter.list.map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space, classes.list)}>
								{v}
							</Typography>
						))}
					</div>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						{frontmatter.others}
					</Typography>
					{/* <Grid item xs={12} md={4} className={classes.readButton}>
						<Button
							text="Read our manifesto"
							fullWidth
							to="/the-primoko-difference/manifesto"
							styles={classes.button}
							component={Link}
						/>
					</Grid> */}
				</Grid>
				<Hidden smDown>
					<Grid item xs={12} md={4}>
						<div className={classes.block}>
							<Grid container className={classes.blockade} justify="center" alignItems="center">
								<img src={withPrefix(frontmatter.logo)} className={classes.logo} />
							</Grid>
						</div>
					</Grid>
				</Hidden>
			</Grid>
		</React.Fragment>
	);
};

export default withStyles(styles)(ThePrimokoDifferenceIndexPagePreviewTemplate);

export const pageQuery = graphql`
	query ThePrimokoDifferenceIndexPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				heading
				description
				list
				others
				logo
			}
		}
	}
`;
