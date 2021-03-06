import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '../components/Button';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Quotes from '../components/Quotes';
import CustomizedTabs from '../components/CustomizedTabs';

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

class LetsTalkPage extends React.Component {
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
		const { data, classes } = this.props;
		const { frontmatter } = data.markdownRemark;

		return (
			<React.Fragment>
				<Grid container className={classes.container} justify="space-between" spacing={40}>
					<Grid item xs={12} md={7} lg={7}>
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
					<Grid item xs={12} md={4} lg={4}>
						<Typography className={classes.title} gutterBottom>
							{frontmatter.title}
						</Typography>
						<CustomizedTabs data={frontmatter.office} />
					</Grid>
				</Grid>
				{frontmatter.testimonials.map((v, k) => <Quotes key={k} author={v.author} quote={v.quote} />)}
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(LetsTalkPage);

export const pageQuery = graphql`
	query LetsTalkPageQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				office {
					heading
					description
					phone
					email
					map
				}
				testimonials {
					author
					quote
				}
			}
		}
	}
`;
