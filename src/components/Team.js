import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

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
		},
		maxWidth: '526px',
		paddingBottom: '70px'
	},
	teamTitle: {
		paddingTop: '5%',
		[theme.breakpoints.down('sm')]: {
			...theme.typography.msubheading
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.subheading
		},
		textAlign: 'center'
	},
	avatarDefault: {
		margin: 'auto',
		backgroundColor: '#f8f8f8',
		[theme.breakpoints.down('sm')]: {
			width: '150px',
			height: '150px'
		},
		[theme.breakpoints.up('md')]: {
			width: '200px',
			height: '200px'
		}
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid id="team" container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.title} gutterBottom={true}>
					Meet the team
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					Our band of hardcore engineers also happens to be good at the soft stuff, like planning, managing,
					and serving our clients.
				</Typography>
			</Grid>
			<Grid container justify="center" spacing={24} alignItems="center">
				<Grid className={classes.section} xs={6} md={3} item>
					<Avatar className={classes.avatarDefault} />
					<Typography className={classes.teamTitle}>
						First Lastname <br /> Role
					</Typography>
				</Grid>
				<Grid className={classes.section} xs={6} md={3} item>
					<Avatar className={classes.avatarDefault} />
					<Typography className={classes.teamTitle}>
						First Lastname <br /> Role
					</Typography>
				</Grid>
				<Grid className={classes.section} xs={6} md={3} item>
					<Avatar className={classes.avatarDefault} />
					<Typography className={classes.teamTitle}>
						First Lastname <br /> Role
					</Typography>
				</Grid>
				<Grid className={classes.section} xs={6} md={3} item>
					<Avatar className={classes.avatarDefault} />
					<Typography className={classes.teamTitle}>
						First Lastname <br /> Role
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
});
