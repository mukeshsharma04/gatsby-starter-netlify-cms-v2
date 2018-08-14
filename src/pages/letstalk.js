import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '../components/Button';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Quotes from '../components/Quotes';

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
	link: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtabLink
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.tabLink
		}
	},
	label: {
		fontSize: '12px',
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		color: '#333333'
	},
	input: {
		width: '100%',
		height: '33px',
		borderRadius: '4px',
		backgroundColor: '#f8f8f8',
		border: 'solid 1px #d1d1d1'
	},
	textfield: {
		width: '100%',
		height: '121px',
		borderRadius: '4px',
		backgroundColor: '#f8f8f8',
		border: 'solid 1px #d1d1d1'
	},
	divider: {
		marginTop: '1.5%',
		marginBottom: '1.5%',
		backgroundColor: '#d1d1d1'
	}
});

class LetsTalk extends React.Component {
	constructor() {
		super();
		this.state = {
			name: ``,
			email: ``,
			phone: ``,
			subject: ``,
			message: ``,
			status: ``
		};
	}

	// Update state each time user edits their email address
	_handleEmailChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	_postEmailToMailchimp = (email, attributes) => {
		addToMailchimp(email, attributes)
			.then((result) => {
				// Mailchimp always returns a 200 response
				// So we check the result for MC errors & failures
				if (result.result !== `success`) {
					this.setState({
						status: `error`,
						msg: result.msg
					});
				} else {
					// Email address succesfully subcribed to Mailchimp
					this.setState({
						status: `success`,
						msg: result.msg
					});
				}
			})
			.catch((err) => {
				// Network failures, timeouts, etc
				this.setState({
					status: `error`,
					msg: err
				});
			});
	};

	_handleFormSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();

		this.setState(
			{
				status: `sending`,
				msg: null
			},
			// setState callback (subscribe email to MC)
			this._postEmailToMailchimp(this.state.email, {
				FNAME: this.state.name,
				EMAIL: this.state.email,
				PHONE: this.state.phone,
				SUBJECT: this.state.subject,
				MESSAGE: this.state.message
			})
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Grid container className={classes.container} justify="space-between" spacing={40}>
					<Grid item xs={12} md={12} lg={7}>
						<Typography className={classes.title} gutterBottom>
							Contact us
						</Typography>
						<form id="email-capture" method="post" noValidate>
							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Name</label>
									<input onChange={this._handleEmailChange} className={classes.input} name="name" />
								</Grid>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Email address</label>
									<input onChange={this._handleEmailChange} className={classes.input} name="email" />
								</Grid>
							</Grid>
							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Phone number (optional)</label>
									<input onChange={this._handleEmailChange} className={classes.input} name="phone" />
								</Grid>
							</Grid>

							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={12}>
									<Divider className={classes.divider} />
								</Grid>
							</Grid>

							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Subject</label>
									<input
										onChange={this._handleEmailChange}
										className={classes.input}
										name="subject"
									/>
								</Grid>
							</Grid>

							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={12}>
									<label className={classes.label}>Message</label>
									<textarea
										onChange={this._handleEmailChange}
										className={classes.textfield}
										name="message"
									/>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4}>
								<Button onClick={this._handleFormSubmit} text="Send message" />
							</Grid>
						</form>
					</Grid>
					<Grid item xs={12} md={12} lg={4}>
						<Grid direction="row" justify="center" container>
							<Grid item xs={12} sm={5} md={5} lg={12}>
								<Typography className={classes.title} gutterBottom>
									Our office
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									231 Clarksville Rd
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									Suite 3
								</Typography>
								<Typography className={classes.paragraph} gutterBottom>
									West Windsor, NJ - 08550
								</Typography>
								<Typography className={classes.link} gutterBottom>
									(413) 248-7626
								</Typography>
								<Typography className={classes.link} gutterBottom>
									hello@primoko.com
								</Typography>
							</Grid>
							&#160;
							<Grid item xs={12} sm={7} md={7} lg={12}>
								<iframe
									width="350"
									height="298"
									src="https://maps.google.com/maps?width=400&amp;height=298&amp;hl=en&amp;q=231%20Clarksville%20Rd%20Suite%203%20West%20Windsor%2C%20NJ%20-%2008550+(Primoko)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
									frameBorder="0"
									scrolling="no"
									marginHeight="0"
									marginWidth="0"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={12}>
						<Typography className={classes.paragraph} gutterBottom>
							Have questions? Want to run an idea by us? Ready for a quote?
						</Typography>
						<Typography className={classes.paragraph} gutterBottom>
							We’d love to hear from you.
						</Typography>
						<Typography className={classes.paragraph} gutterBottom>
							Please call us, or complete the form that follows
						</Typography>
					</Grid>
				</Grid>
				<Quotes
					author="David Guterson"
					quote="Everybody has a world, and that world is completely hidden until we begin to inquire. As soon as we do, that entire world opens to us and yields itself. And you see how full and complex it is."
				/>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(LetsTalk);
