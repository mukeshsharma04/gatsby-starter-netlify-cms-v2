import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../../components/Quotes';
import TabBar from '../../components/TabBar';
import { servicesFields } from '../../metadata';
import { withPrefix } from 'gatsby-link';

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
	title: {
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	list: {
		paddingLeft: theme.spacing.unit * 2
	},
	subTitle: {
		...theme.typography.title,
		width: 'fit-content',
		borderBottom: '6px solid #6f73ff',
		paddingBottom: '8px'
	},
	outerBox: {
		width: '281px',
		height: '569px',
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields}/>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom={true}>If you can dream it, <span className={classes.subTitle}>we can build it.</span></Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						As you read these words, chances are that a high percent of your prospects and customers are
						online, doing email and chat, playing games, watching videos, and in general conducting
						business, managing life stuff, and having fun.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Primoko’s elite engineers who specialize in creating complex yet usable mobile applications will
						connect you with your market in new and creative ways.
					</Typography>
					<Grid container className={classes.space}>
						<Grid className={classes.list} item xs={6} md={6}>
							<ul>
								<li>• &#160; Games</li>
								<li>• &#160; Education apps</li>
								<li>• &#160; Loyalty apps</li>
								<li>• &#160; Booking apps</li>
								<li>• &#160; Calendar apps</li>
							</ul>
						</Grid>
						<Grid className={classes.list} item xs={6} md={6}>
							<ul>
								<li>• &#160; Design apps</li>
								<li>• &#160; Travel guide apps</li>
								<li>• &#160; Health and wellness apps</li>
								<li>• &#160; Marketplace apps</li>
								<li>• &#160; Productivity apps</li>
							</ul>
						</Grid>
					</Grid>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>The list goes on.</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						Contact Primoko today. Tell us what you’d like to create, and we’ll tell you how we can bring it
						to life.
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
				<img src={withPrefix('/img/we-know-mobile.png')} />
				</Grid>
			</Grid>
			<Quotes
				quote="Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations - it will transorm your entire business."
				author="Thomas Husson,"
				authorRole="VP and Principal Analyst at Forrester Research"
			/>
		</React.Fragment>
	);
});
