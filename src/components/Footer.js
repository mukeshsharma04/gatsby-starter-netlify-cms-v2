import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import classNames from 'classnames';

import logo from '../img/primoko-logo-white.png';
import linkedin from '../img/linkedin.png';

const styles = (theme) => ({
	root: {
		backgroundColor: '#333333',
		flexGrow: 1,
		padding: theme.spacing.unit * 5,
		color: '#ffffff'
	},
	row: {
		width: '100%'
	},
	right: {
		textAlign: 'right'
	},
	logo: {
		width: '99px',
		height: '20px',
		objectFit: 'contain'
	},
	client: {
		fontSize: '16px',
		fontWeight: '500'
	},
	divider: {
		marginTop: '1.5%',
		marginBottom: '1.5%',
		backgroundColor: '#666666'
	},
	heading: {
		fontSize: '16px',
		fontWeight: '900',
		color: '#ffffff'
	},
	paragraph: {
		fontSize: '12px',
		fontWeight: '500',
		color: '#ffffff'
	},
	space: {
		marginTop: '10%'
	},
	linkedin: {
		width: '20px',
		height: '20px',
		backgroundColor: 'white',
		borderRadius: '2px'
	},
	spaceNormal: {
		marginTop: '5%'
	},
	input: {
		width: '100%',
		height: '35px',
		borderRadius: '4px',
		backgroundColor: '#ffffff',
		marginTop: '3%'
	},
	textBox: {
		width: '100%',
		height: '99px',
		borderRadius: '4px',
		backgroundColor: '#ffffff',
		border: 'solid 1px #979797',
		marginTop: '3%'
	},
	button: {
    cursor: 'pointer',
    marginBottom: '5%',
		width: '100%',
		height: '41px',
		borderRadius: '19.5px',
		background: `linear-gradient(to right, #4B96FC, #6F77FB)`
	},
	buttonText: {
		paddingTop: '10px',
		width: '260px',
		height: '19px',
		fontSize: '14px',
		fontWeight: '500',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#ffffff'
  },
  margin: {
    marginTop: '15px'
  }
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Grid className={classes.row} container>
				<Grid item xs={6} md={6}>
					<img className={classes.logo} src={logo} alt="primoko" />
				</Grid>
				<Grid item xs={6} md={6} className={classes.right}>
					<Typography variant="subheading" className={classes.client} color="inherit">
						Client Login
					</Typography>
				</Grid>
			</Grid>

			<Divider className={classes.divider} />

			<Grid justify="space-between" className={classes.row} container>
				{/*Third Column Start*/}
				<Hidden smUp>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography variant="subheading" className={classes.client} color="inherit">
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<img className={classes.linkedin} src={linkedin} alt="primoko" />
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
									>
										Email address
									</Typography>
								</Grid>
								<input className={classes.input} name="name" type="text" id="name" />
							</div>
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
									>
										Message
									</Typography>
								</Grid>
								<input className={classes.textBox} name="name" type="text" id="name" />
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Third Column End*/}

				{/*First Column Start*/}
				<Grid item xs={12} md={5}>
					{/*First Row*/}
					<Grid container>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography variant="headline" className={classes.heading} color="inherit">
										About Primoko
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classNames(classes.paragraph, classes.margin)} color="inherit">
										Overview
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Team
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Careers
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography variant="headline" className={classes.heading} color="inherit">
										Results
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classNames(classes.paragraph, classes.margin)} color="inherit">
										Clients &amp; Testimonials
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Select Case Studies
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/*Second Row*/}
					<Grid container className={classes.space}>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography variant="headline" className={classes.heading} color="inherit">
										Services
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classNames(classes.paragraph, classes.margin)} color="inherit">
										Overview
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Mobile
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Web
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										DevOps
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Recruitment & Staffing
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Salesforce
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography variant="headline" className={classes.heading} color="inherit">
										The Primoko Difference
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classNames(classes.paragraph, classes.margin)} color="inherit">
										Overview
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Process
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Manifesto
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										Pricing
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subheading" className={classes.paragraph} color="inherit">
										FAQs
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/*Third Row*/}
					<Grid container className={classes.space}>
						<Typography variant="subheading" className={classes.paragraph} color="inherit">
							Copyright © 2018 Primoko Inc and respective clients. All rights reserved.
						</Typography>
					</Grid>
				</Grid>
				{/*First Column End*/}

				{/*Second Column Start*/}
				<Hidden xsDown>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography variant="subheading" className={classes.client} color="inherit">
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<img className={classes.linkedin} src={linkedin} alt="primoko" />
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
									>
										Email address
									</Typography>
								</Grid>
								<input className={classes.input} name="name" type="text" id="name" />
							</div>
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
									>
										Message
									</Typography>
								</Grid>
								<input className={classes.textBox} name="name" type="text" id="name" />
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Second Column End*/}
			</Grid>
		</div>
	);
};

export default withStyles(styles)(Footer);
