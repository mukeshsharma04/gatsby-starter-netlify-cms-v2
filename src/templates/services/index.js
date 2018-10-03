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
import { mobile, web, devOps, servicesFields } from '../../metadata';
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
		backgroundImage: `url(${withPrefix('/img/concept.jpg')})`,
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
			console.log(data);

			const tag = (
				<Typography className={classes.text} align="center">
					Services
				</Typography>
			);

			return (
				<React.Fragment>
					<TabBar fields={servicesFields} />
					<Banner banner={withPrefix('/img/agency.jpg')} tag={tag} height="425px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title} gutterBottom>
								Custom software development for even the most persistent and seemingly impossible
								difficulties.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								Software engineering is the magic that makes business growth and innovation possible.
								But it can also be a roadblock, especially if your team isn’t familiar with the
								technologies you need to move your project from idea to reality, and more so if your
								team members don’t know what they don’t know.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								We at Primoko DO know what others don’t. And our engineers with various specialties are
								standing by to act as the fuel that will make your project go.
							</Typography>
							<Divider className={classes.divider} />
						</Grid>

						<Grid item className={classes.space} xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								Mobile
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								Stay ahead of the curve by adapting tomorrow’s technology for your mobile application.
								Experience includes work in the banking and luxury ecommerce domains.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{mobile.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Grid item xs={10} md={8}>
								<Button text="See mobile services" to="/services/mobile" component={Link} />
							</Grid>
						</Grid>
						<Grid className={classes.space} item xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								Web
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								Web apps that work will differentiate and drive your business. From coding specific
								solutions and solving technical problems to holding full ownership—from design and
								development to testing and ongoing maintenance—Primoko has you covered.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{web.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Grid item xs={10} md={8}>
								<Button text="See web services" to="/services/web" component={Link} />
							</Grid>
						</Grid>
						<Grid className={classes.space} item xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								DevOps
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								Imagine feedback cycles measured in hours instead of weeks. Imagine simplicity,
								performance, and speed. Imagine automation wherever it fits. We are big fans of DevOps,
								especially of automating it as much as possible.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{devOps.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Grid item xs={10} md={8}>
								<Button text="See DevOps services" to="/services/devops" component={Link} />
							</Grid>
						</Grid>
						<Grid className={classes.space} item xs={12} md={5}>
							<Typography className={classes.title} gutterBottom>
								Salesforce
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
								Build a unified view of your customer with a new Salesforce integration and
								implementation. Or, breath new life into an existing implementation.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								<Chip label="Salesforce commerce" className={classes.chip} />
							</div>
							<Grid item xs={10} md={8}>
								<Button text="See Salesforce services" to="/services/salesforce" component={Link} />
							</Grid>
						</Grid>
					</Grid>
					<Banner banner={withPrefix('/img/code.jpg')} height="322px" />
					<Grid container justify="space-between" id="recruitment-staffing" ref={this.myRef}>
						<Grid className={classes.recruitment} item xs={12} md={6}>
							<Typography className={classes.title} gutterBottom>
								Elite Engineer Recruitment
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space2)} gutterBottom>
								Need brilliant talent for your organization? Find elite software engineers the same
								caliber as those that work for Primoko by connecting with the same recruiters we use at
								our sister company, Humanoko.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space2)} gutterBottom>
								Backstory: we created Humanoko after our clients, who had been bombarding us with
								requests to find elite engineers, began trying to poach ours! That’s when we knew it was
								time to create a recruitment firm specializing in bringing forward-thinking companies
								and brilliant software engineers together; that’s when we launched Humanoko.
							</Typography>
							<Button text="HUMANOKO" to="#" component={Link} styles={classes.humanokoButton} />
						</Grid>
						<Grid item xs={12} md={6}>
							<div className={classes.block} />
						</Grid>
					</Grid>
					<Quotes
						quote="The best way to get a project done faster is to start sooner [like now]."
						author="Jim Highsmith,"
						authorRole="with our parenthetical and emphasis"
					/>
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
				main {
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
