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

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={servicesFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={6}>
					<Typography className={classes.title} gutterBottom>
						Reach and engage with your audiences where they live—<span className={classes.subparagraph}>on mobile.</span>
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						A high percent of your prospects and customers are online, chatting and emailing, playing games,
						watching videos, and conducting business using smartphones, tablets, and wearables like the
						Apple Watch.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Primoko specializes in creating complex yet usable iOS and Android applications that will
						connect you with your market in new and future-forward ways.
					</Typography>
					<Grid container className={classes.space}>
						<Grid item xs={6} md={6}>
							<ul className={classes.list}>
								<li>Games</li>
								<li>Education apps</li>
								<li>Shopping &amp; E-Commerce apps</li>
								<li>Luxury brand and experience apps</li>
								<li>Loyalty apps</li>
								<li>Booking apps</li>
							</ul>
						</Grid>
						<Grid item xs={6} md={6}>
							<ul className={classes.list}>
								<li>Calendar apps</li>
								<li>Design apps</li>
								<li>Travel guide apps</li>
								<li>Health and wellness apps</li>
								<li>Marketplace apps</li>
								<li>Productivity apps</li>
							</ul>
						</Grid>
					</Grid>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						The list goes on.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Contact Primoko today. Tell us what you’d like to create, and we’ll tell you how we can bring it
						to life.
					</Typography>
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
			<Quotes
				quote="Mobile is becoming not only the new digital hub, but also the bridge to the physical world. 
				That’s why mobile will affect more than just your digital operations - it will transorm your entire business."
				author="Thomas Husson,"
				authorRole="VP and Principal Analyst at Forrester Research"
			/>
		</React.Fragment>
	);
});
