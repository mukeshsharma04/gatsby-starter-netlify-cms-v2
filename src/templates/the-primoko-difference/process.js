import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import TabBar from '../../components/TabBar';
import { thePrimokoDiffernceFields } from '../../metadata';
import Quotes from '../../components/Quotes';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px'
		},
		[theme.breakpoints.up('md')]: {
			padding: '60px 60px'
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
		},
		'& p': {
			marginTop: '30px'
		}
	},
	space: {
		marginTop: '30px'
	},
	space2: {
		marginTop: '60px'
	},
	bold: {
		fontWeight: 'bold'
	},
	textBlue: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#4198ff',
			fontWeight: '900'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#4198ff',
			fontWeight: '900'
		},
		'&:hover': {
			color: '#4198ff',
			fontWeight: '900',
			textDecoration: 'underline'
		}
	}
});

const ThePrimokoDifferenceProcessPagePreviewTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<React.Fragment>
			<TabBar fields={thePrimokoDiffernceFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography className={classes.title}>{frontmatter.title}</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						{frontmatter.heading}
					</Typography>
					{frontmatter.list.map((v, k) => (
						<div
							key={k}
							className={classNames(classes.paragraph, classes.space)}
							dangerouslySetInnerHTML={{ __html: v }}
						/>
					))}
				</Grid>

				<Grid item xs={12} md={4}>
					<img src={withPrefix(frontmatter.image)} className={classNames(classes.logo, classes.space)} />
				</Grid>

				<Grid item xs={12} md={7}>
					<Typography className={classNames(classes.title, classes.space2)}>
						{frontmatter.peace.heading}
					</Typography>
					{frontmatter.peace.description.split('<br />').map((v, k) => (
						<Typography key={k} className={classNames(classes.paragraph, classes.space)}>
							{v}
						</Typography>
					))}
					<a href="/letstalk" className={classes.textBlue}>
						<div className={classes.space}>Please let us know.</div>
					</a>
				</Grid>
			</Grid>

			{frontmatter.testimonials.map((v, k) => <Quotes key={k} author={v.author} quote={v.quote} />)}
		</React.Fragment>
	);
};

export default withStyles(styles)(ThePrimokoDifferenceProcessPagePreviewTemplate);

export const pageQuery = graphql`
	query ThePrimokoDifferenceProcessPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image
				heading
				description
				list
				peace {
					heading
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
