import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../../components/Quotes';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';
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
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		},
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '8px'
	},
	outerBox: {
		width: '281px',
		height: '569px'
	},
	subparagraph: {
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '6px'
	},
	mobile: {
		backgroundImage: `url(${withPrefix('/img/we-know-mobile.png')})`,
		position: 'relative',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'auto',
		margin: 'auto',
		[theme.breakpoints.up('xs')]: {
			height: '280px',
			width: '286px'
		},
		[theme.breakpoints.up('md')]: {
			height: '569px',
			width: '286px'
		}
	}
});

export default withStyles(styles)(({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;
	const heading = frontmatter.heading.split('—');

	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom>
						{heading[0]}—<span className={classes.subparagraph}>{heading[1]}</span>
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
						main="We speak mobile"
						menu="Recent projects have used:"
						subMenu={[
							{ label: 'iOS, including Apple Watch', icon: 'ios' },
							{ label: 'Android, including Wear OS', icon: 'android' },
							{ label: 'React Native', icon: 'react' }
						]}
					/>
				</Grid>
			</Grid>
			{frontmatter.testimonials.map((v, k) => (
				<Quotes key={k} author={v.author} quote={v.quote} authorRole={v.authorRole} />
			))}
		</React.Fragment>
	);
});

export const pageQuery = graphql`
	query ServicesMobilePage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
				rightList
				leftList
				others
				testimonials {
					author
					authorRole
					quote
				}
			}
		}
	}
`;
