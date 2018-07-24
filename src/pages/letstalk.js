import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../components/Banner';
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
		...theme.typography.title
	},
	paragraph: {
		...theme.typography.paragraph
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	link: {
		...theme.typography.tabLink
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

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Banner height="500px" />
			<Grid container className={classes.container} justify="space-between" spacing={40}>
				<Grid item xs={12} md={7}>
					<Typography className={classes.title} gutterBottom={true}>Contact us</Typography>
					<form>
						<Grid container justify="space-between" spacing={40}>
							<Grid item xs={12} md={6}>
								<label className={classes.label}>Name</label>
								<input className={classes.input} name="name" />
							</Grid>
							<Grid item xs={12} md={6}>
								<label className={classes.label}>Email address</label>
								<input className={classes.input} name="email" />
							</Grid>
						</Grid>
						<Grid container justify="space-between" spacing={40}>
							<Grid item xs={12} md={6}>
								<label className={classes.label}>Phone number (optional)</label>
								<input className={classes.input} name="phone" />
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
								<input className={classes.input} name="subject" />
							</Grid>
						</Grid>

						<Grid container justify="space-between" spacing={40}>
							<Grid item xs={12} md={12}>
								<label className={classes.label}>Message</label>
								<textarea className={classes.textfield} name="message"></textarea>
							</Grid>
						</Grid>
            <Button text="Send message"/>
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
});
