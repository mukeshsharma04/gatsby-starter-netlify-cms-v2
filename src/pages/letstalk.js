import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '../components/Button';

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
	state = {
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	};

	handleSubmit = (e) => {
console.log("Hello");
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	};

	render() {
		const { classes } = this.props;
		const { name, email, phone, subject, message } = this.state;
		return (
			<React.Fragment>
				<div style={{ width: '100%', height: '500' }}>
					<iframe
						width="100%"
						height="600"
						src="https://maps.google.com/maps?width=100%&height=500&hl=en&coord=28.494747,77.0773577,17z&q=Primoko%20Softwares%20pvt%20ltd+(Primoko)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
					/>
				</div>
				<Grid container className={classes.container} justify="space-between" spacing={40}>
					<Grid item xs={12} md={7}>
						<Typography className={classes.title} gutterBottom={true}>
							Contact us
						</Typography>
						<form>
							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Name</label>
									<input
										onChange={this.handleChange}
										required
										value={name}
										className={classes.input}
										name="name"
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Email address</label>
									<input
										onChange={this.handleChange}
										required
										value={email}
										className={classes.input}
										name="email"
									/>
								</Grid>
							</Grid>
							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={6}>
									<label className={classes.label}>Phone number (optional)</label>
									<input
										onChange={this.handleChange}
										required
										value={phone}
										className={classes.input}
										name="phone"
									/>
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
										onChange={this.handleChange}
										required
										value={subject}
										className={classes.input}
										name="subject"
									/>
								</Grid>
							</Grid>

							<Grid container justify="space-between" spacing={40}>
								<Grid item xs={12} md={12}>
									<label className={classes.label}>Message</label>
									<textarea
										onChange={this.handleChange}
										required
										value={message}
										className={classes.textfield}
										name="message"
									/>
								</Grid>
							</Grid>
							<Grid item xs={12} md={4}>
								<Button onClick={this.handleSubmit} text="Send message" />
							</Grid>
						</form>
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography className={classes.title} gutterBottom={true}>
							Our office
						</Typography>
						<Typography className={classes.paragraph} gutterBottom={true}>
							231 Clarksville Rd
						</Typography>
						<Typography className={classes.paragraph} gutterBottom={true}>
							Suite 3
						</Typography>
						<Typography className={classes.paragraph} gutterBottom={true}>
							West Windsor, NJ - 08550
						</Typography>
						<Typography className={classes.link} gutterBottom={true}>
							(413) 248-7626
						</Typography>
						<Typography className={classes.link} gutterBottom={true}>
							hello@primoko.com
						</Typography>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(LetsTalk);
