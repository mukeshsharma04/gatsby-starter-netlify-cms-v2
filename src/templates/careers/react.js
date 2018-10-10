import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Button from '../../components/Button';

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
		marginTop: '50px'
	},
	space2: {
		marginTop: '40px'
	},
	subTitle: {
		...theme.typography.subheading,
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		marginTop: '20px'
	},
	button: {
		width: '260px',
		height: '39px'
	},
	list: {
		marginLeft: theme.spacing.unit * 2,
		paddingLeft: theme.spacing.unit * 2,
		listStyle: 'disc'
	}
});

const CareersReactPageTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between" spacing={40}>
				<Grid item xs={12}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.react.title}
					</Typography>
					<Typography className={classes.subTitle}>{frontmatter.react.heading}</Typography>
					{frontmatter.react.description.split('<br />').map((v, k) => (
						<Typography key={k} className={classNames(classes.space2, classes.paragraph)} gutterBottom>
							{v}
						</Typography>
					))}
					<ul className={classNames(classes.list, classes.space2)}>
						{frontmatter.react.description.split('*').map((v, k) => k > 0 && <li key={k}>{v}</li>)}
					</ul>
					<Button text={frontmatter.react.button} styles={classNames(classes.button, classes.space2)} />
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default withStyles(styles)(CareersReactPageTemplate);

export const careerReactPageQuery = graphql`
	query CareersReactPageTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
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
