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

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 5
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		}
	},
	text: {
		...theme.typography.hero,
		width: 'fit-content',
		color: 'white',
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		padding: '10px'
	},
	title: {
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	divider: {
		marginTop: theme.spacing.unit * 8,
		marginBottom: theme.spacing.unit * 8,
		backgroundColor: '#d1d1d1'
	},
	blueText: {
		...theme.typography.paragraph,
		color: '#6f73ff'
	},
	chip: {
		color: '#6f73ff',
		border: 'solid 2px #6f73ff',
		backgroundColor: 'white',
		marginRight: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	}
});

export default withStyles(styles)(
	class index extends Component {
		render() {
			const { classes } = this.props;

			const text = (
				<Typography className={classes.text} align="center">
					Services
				</Typography>
			);

			const mobile = [ 'iOS', 'Android', 'React Native', 'Swift', 'Objetive-C', 'Xcode' ];
			const web = [
				'Mongo DB',
				'Express JS',
				'Angular',
				'Node JS',
				'Linux',
				'Apache',
				'MySQL',
				'PHP',
				'JQuery',
				'React',
				'AWS',
				'Firebase'
			];
			const devOps = [ 'Jenkins', 'CruiseControl', 'AWS', 'Docker', 'Maven', 'Ant', 'Git', 'SVN' ];

			return (
				<React.Fragment>
					<TabBar />
					<Banner text={text} height="425px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title}>
								Custom software development for even the most persistent and seemingly impossible
								difficulties.
							</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Software engineering is the fuel that makes your business growth and innovation
								possible. But it can also be a roadblock, especially if your team isn’t familiar with
								the technologies you need to move your project from idea to reality, and more so if your
								team members don’t know what they don’t know.
							</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								We at Primoko DO know what others don’t. And our expert and elite engineers with various
								specialties are standing by to act as the fuel that will make your project go.
							</Typography>
							<Divider className={classes.divider} />
						</Grid>

						<Grid item xs={12} md={5}>
							<Typography className={classes.title}>Mobile</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								We use React Native and other mobile technologies to develop must-have mobile apps for
								iOS and Android—including for Apple Watch and WearOS.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{mobile.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Button text="See mobile services" />
						</Grid>
						<Grid item xs={12} md={5}>
							<Typography className={classes.title}>Web</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Need web development and design? We have you covered, especially on the JavaScript
								stack—NodeJS, React, Angular, AWS, and Firebase.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{web.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Button text="See web services" />
						</Grid>

						<Grid className={classes.space} item xs={12} md={5}>
							<Typography className={classes.title}>DevOps</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Merge your delivery pipeline and customer feedback loop for development at high
								velocity.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								{devOps.map((v, k) => <Chip key={k} label={v} className={classes.chip} />)}
							</div>
							<Button text="See mobile services" />
						</Grid>
						<Grid className={classes.space} item xs={12} md={5}>
							<Typography className={classes.title}>Salesforce</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								Merge your delivery pipeline and customer feedback loop for development at high
								velocity.
							</Typography>
							<Typography className={classNames(classes.blueText, classes.space)}>
								Technology we’ve worked with:
							</Typography>
							<div className={classes.space}>
								<Chip label="Salesforce commerce" className={classes.chip} />
							</div>
							<Button text="See web services" />
						</Grid>
					</Grid>
					<Banner height="322px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title}>Pricing</Typography>
							<Typography className={classes.paragraph} gutterBottom>
								“How much does it cost?” That’s the big question we’re asked most often. And although we
								can’t say for certainty without exploring the scope and nature of your project, we can
								give you an idea.
							</Typography>
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
