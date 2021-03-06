import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';
import Hidden from '@material-ui/core/Hidden';
import BlueBlock from '../../components/BlueBlock';

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
	list: {
		paddingLeft: theme.spacing.unit * 2,
		listStyle: 'disc'
	},
	outerBox: {
		backgroundImage: `url(${withPrefix('/img/we-know-web.png')})`,
		position: 'relative',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		margin: 'auto',
		[theme.breakpoints.up('sm')]: {
			width: '459.6px'
		},
		height: '300.5px'
	}
});

const ServicesWebPagePreviewTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;
	
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.heading}
					</Typography>
					{frontmatter.description &&
						frontmatter.description.split('<br />').map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space)} gutterBottom>
								{v}
							</Typography>
						))}
					<Grid container className={classes.space} justify="space-between">
						<Grid item xs={6} md={6}>
							<ul className={classes.list}>
								{frontmatter.rightList &&
									frontmatter.rightList.split(',').map((v, k) => <li key={k}>{v}</li>)}
							</ul>
						</Grid>
						<Grid item xs={6} md={5}>
							<ul className={classes.list}>
								{frontmatter.leftList &&
									frontmatter.leftList.split(',').map((v, k) => <li key={k}>{v}</li>)}
							</ul>
						</Grid>
					</Grid>
					{frontmatter.others &&
						frontmatter.others.split('<br />').map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space)} gutterBottom>
								{v}
							</Typography>
						))}
				</Grid>
				<Grid item xs={12} md={4}>
					<BlueBlock
						main="We speak web"
						menu="Recent projects have used:"
						subMenu={[
							{ label: 'NodeJS', icon: 'node' },
							{ label: 'React', icon: 'react' },
							{ label: 'Angular', icon: 'angular' },
							{ label: 'AWS', icon: 'aws' },
							{ label: 'Firebase', icon: 'firebase' }
						]}
					/>
				</Grid>
			</Grid>
			<Hidden mdUp>
				<Banner banner={withPrefix(frontmatter.image)} height="200px" />
			</Hidden>
			<Hidden smDown>
				<Banner banner={withPrefix(frontmatter.image)} height="440px" />
			</Hidden>
		</React.Fragment>
	);
};

export default withStyles(styles)(ServicesWebPagePreviewTemplate);

export const pageQuery = graphql`
	query ServicesWebPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				image
				heading
				description
				rightList
				leftList
				others
			}
		}
	}
`;
