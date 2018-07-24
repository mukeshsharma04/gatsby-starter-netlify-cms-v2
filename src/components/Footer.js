import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Link from 'gatsby-link';
import classNames from 'classnames';

import logo from '../img/primoko-logo-white.png';
import linkedin from '../img/linkedin.png';

const styles = (theme) => ({
	root: {
		backgroundColor: '#333333',
		flexGrow: 1,
		padding: theme.spacing.unit * 7,
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
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
		'&:hover': {
			textDecoration: 'none',
			color: 'inherit'
		}
	}
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Grid className={classes.row} container>
				<Grid item xs={6} md={6}>
					<Link to="/"><img className={classes.logo} src={logo} alt="primoko" /></Link>
				</Grid>
				<Grid item xs={6} md={6} className={classes.right}>
					<Link className={classes.link} to="/">
						<Typography variant="subheading" className={classes.client} color="inherit" gutterBottom>
							Client Login
						</Typography>
					</Link>
				</Grid>
			</Grid>

			<Divider className={classes.divider} />

			<Grid justify="space-between" className={classes.row} container>
				{/*Second Column For Mobile Start*/}
				<Hidden smUp>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography
									variant="subheading"
									className={classes.client}
									color="inherit"
									gutterBottom
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img className={classes.linkedin} src={linkedin} alt="primoko" />
								</Link>
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
										gutterBottom
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
										gutterBottom
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message"></textarea>
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Mobile End*/}

				{/*First Column Start*/}
				<Grid item xs={12} md={6}>
					{/*First Row*/}
					<Grid container>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about">
										<Typography
											variant="headline"
											className={classes.heading}
											color="inherit"
											gutterBottom
										>
											About Primoko
									</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/team">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Team
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/careers">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Careers
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom
									>
										Results
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Clients &amp; Testimonials
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Select Case Studies
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/*Second Row*/}
					<Grid container className={classes.space}>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom
									>
										Services
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Mobile
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Web
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											DevOps
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Recruitment & Staffing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Salesforce
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom
									>
										The Primoko Difference
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Process
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Manifesto
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Pricing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											FAQs
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/*Third Row*/}
					<Grid container className={classes.space}>
						<Typography variant="subheading" className={classes.paragraph} color="inherit" gutterBottom>
							Copyright © 2018 Primoko Inc and respective clients. All rights reserved.
						</Typography>
					</Grid>
				</Grid>
				{/*First Column End*/}

				{/*Second Column For Desktop* Start*/}
				<Hidden xsDown>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography
									variant="subheading"
									className={classes.client}
									color="inherit"
									gutterBottom
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img className={classes.linkedin} src={linkedin} alt="primoko" />
								</Link>
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
										gutterBottom
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
										gutterBottom
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message"></textarea>
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Desktop End*/}
			</Grid>
		</div>
	);
};

export default withStyles(styles)(Footer);
