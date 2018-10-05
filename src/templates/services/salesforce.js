import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../../components/Quotes';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
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
	subheading: {
		...theme.typography.subheading
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	block: {
		[theme.breakpoints.up('sm')]: {
			width: '258px'
		},
		height: '238px',
		boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.05)',
		border: 'solid 1px #6f73ff',
		padding: '0 6%'
	},
	divider: {
		borderBottom: 'solid 2px #6f73ff',
		paddingBottom: '4%'
	},
	icon: {
		width: '14px',
		fill: '#6f73ff'
	},
	subpara: {
		fontFamily: 'Lato',
		fontSize: '12px',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: '1.67',
		letterSpacing: 'normal',
		color: '#666666'
	},
	textGroup: {
		display: 'flex',
		paddingBottom: '5%'
	},
	left: {
		textAlign: 'left'
	}
});

const ServicesSalesForcePagePreviewTemplate = ({ data, classes }) => {
	const { frontmatter } = data.markdownRemark;

	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography className={classes.title} gutterBottom>
						{frontmatter.heading}
					</Typography>
					{frontmatter.description &&
						frontmatter.description.split('<br />').map((v, k) => (
							<Typography key={k} className={classNames(classes.paragraph, classes.space)} gutterBottom>
								{v}
							</Typography>
						))}
				</Grid>
				<Grid item xs={12} md={4}>
					<BlueBlock
						main="We speak Salesforce"
						subMenu={[
							{ label: 'Visualforce, Javascript Remoting, Heroku', icon: 'heroku' },
							{ label: 'CRM, Calendar, Commerce Cloud, Einstein', icon: 'crm' }
						]}
					/>
				</Grid>
			</Grid>
			{frontmatter.testimonials.map((v, k) => <Quotes key={k} author={v.author} quote={v.quote} />)}
		</React.Fragment>
	);
};

export default withStyles(styles)(ServicesSalesForcePagePreviewTemplate);

export const pageQuery = graphql`
	query ServicesSalesForcePage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
				testimonials {
					author
					authorRole
					quote
				}
			}
		}
	}
`;
