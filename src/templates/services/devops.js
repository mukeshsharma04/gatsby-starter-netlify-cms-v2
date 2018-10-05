import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
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
	outerBox: {
		backgroundImage: `url(${withPrefix('/img/illustration-dev-ops.png')})`,
		position: 'relative',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		margin: 'auto',
		marginTop: '60px',
		[theme.breakpoints.up('sm')]: {
			width: '459.6px'
		},
		[theme.breakpoints.up('md')]: {
			width: '459.6px'
		}
	},
	block: {
		width: '100%',
		height: 'auto'
	}
});

const ServicesDevOpsPagePreviewTemplate = ({data,classes}) => {
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
				</Grid>
				<Grid item xs={12} md={5}>
					<BlueBlock
						className={classes.block}
						main="We speak DevOps"
						menu="Recent projects have used"
						subMenu={[
							{ label: 'CMake, Make, MSBuild, Ant, Maven, Grunt, Gradle', icon: 'check' },
							{ label: 'Jmeter, Junit, Jasmine, Jenkins, Cucumber', icon: 'check' },
							{ label: 'TeamCity, Jenkins, Bamboo, CodeShip, Visual Studio', icon: 'check' },
							{ label: 'SmartFrog, RapidDeploy, CodeDeploy, Otto', icon: 'check' },
							{ label: 'Git, GitHub, BitBucket, SubVersion', icon: 'check' },
							{ label: 'Nomad, Docker', icon: 'check' }
						]}
						bottom={[ 'Need a different technology? Contact us; it may be part of our current portfolio.' ]}
					/>
					<div className={classes.outerBox} />
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

export default withStyles(styles)(ServicesDevOpsPagePreviewTemplate);

export const pageQuery = graphql`
	query ServicesDevOpsPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				heading
				description
			}
		}
	}
`;
