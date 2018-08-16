import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Link, { withPrefix } from 'gatsby-link';
import classNames from 'classnames';

import Button from './Button';

const styles = (theme) => ({
	root: {
		...theme.typography.footerSection,
		backgroundColor: '#333333',
		flexGrow: 1,
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		},
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
		...theme.typography.footerLinks,
		textDecoration: 'none',
		color: 'inherit',
		'&:hover': {
			textDecoration: 'none',
			color: 'inherit'
		}
	},
	tooltip: {
		marginLeft: '5%',
		padding: '1px',
		position: 'relative',
		background: '#6f73ff',
		borderRadius: '5px',
		'&::after': {
			right: '100%',
			top: '50%',
			border: 'solid transparent',
			content: '" "',
			height: '0',
			width: '0',
			position: 'absolute',
			pointerEvents: 'none',
			borderColor: 'rgba(111, 115, 255, 0)',
			borderRightColor: '#6f73ff',
			borderWidth: '5px',
			marginTop: '-5px'
		}
	},
	flex: {
		display: 'flex'
	},
	client: {
		height: '25px'
	}
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Grid className={classes.row} container>
				<Grid item xs={6} md={6}>
					<Link to="/">
						<img className={classes.logo} src={withPrefix('/img/primoko-logo-white.png')} alt="primoko" />
					</Link>
				</Grid>
				<Grid item xs={6} md={6} className={classes.right}>
					<Link className={classes.link} to="/">
						<Typography
							variant="subheading"
							align="right"
							className={classes.client}
							color="inherit"
							gutterBottom
						>
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
									align="left"
									gutterBottom
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img
										className={classes.linkedin}
										src={withPrefix('/img/linkedin.png')}
										alt="primoko"
									/>
								</Link>
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										align="left"
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
										align="left"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message" />
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Mobile End*/}

				{/*First Column Start*/}
				<Grid item xs={12} md={5}>
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
											align="left"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/#team">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Team
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/#career">
										<Typography
											variant="subheading"
											align="left"
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
											align="left"
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
											align="left"
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
									<Link className={classes.link} to="/services">
										<Typography
											variant="subheading"
											align="left"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/mobile">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Mobile
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/web">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Web
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/devops">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											DevOps
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/recruitment-staffing">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Recruitment & Staffing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/salesforce">
										<Typography
											variant="subheading"
											align="left"
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
									<Link className={classes.link} to="/the-primoko-difference">
										<Typography
											variant="subheading"
											align="left"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-primoko-difference/process">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Process
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-primoko-difference/manifesto">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Manifesto
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/pricing">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Pricing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-primoko-difference/faqs">
										<Typography
											variant="subheading"
											align="left"
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
				</Grid>
				{/*First Column End*/}
				<Hidden smUp>
					<div className={classes.space}>&#160;</div>
				</Hidden>
				{/* Client Part Start */}
				<Grid item xs={12} md={3}>
					<Grid container>
						<Grid item xs={12} md={12}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12} className={classes.client}>
									<Typography
										variant="headline"
										className={classNames(classes.heading, classes.flex)}
										color="inherit"
										gutterBottom
									>
										Careers<div className={classNames(classes.tooltip, classes.paragraph)}>
											100% Remote work available
										</div>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/career">
										<Typography
											variant="subheading"
											align="left"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom
										>
											Sr. Software Engineer (iOS)
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/career">
										<Typography
											variant="subheading"
											align="left"
											className={classes.paragraph}
											color="inherit"
											gutterBottom
										>
											Sr. Software Engineer (React)
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* Client Part End */}

				{/*Second Column For Desktop* Start*/}
				<Hidden xsDown>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography
									variant="subheading"
									align="left"
									className={classes.client}
									color="inherit"
									gutterBottom
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img
										className={classes.linkedin}
										src={withPrefix('/img/linkedin.png')}
										alt="primoko"
									/>
								</Link>
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										align="left"
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
										align="left"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message" />
							</div>
							<Button text="Send Message" />
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Desktop End*/}

				<Grid container className={classes.margin}>
					<Typography
						variant="subheading"
						align="left"
						className={classes.paragraph}
						color="inherit"
						gutterBottom
					>
						Copyright © 2018 Primoko Inc and respective clients. All rights reserved.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(Footer);
