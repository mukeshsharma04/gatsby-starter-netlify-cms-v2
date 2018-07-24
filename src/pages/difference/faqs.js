import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 2
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 5
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
		marginTop: theme.spacing.unit * 1.5
	},
	link: {
		...theme.typography.tabLink
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between" spacing={40}>
				<Grid item xs={12} md={12}>
					<Typography className={classes.paragraph} gutterBottom>
						You have questions? We have answers. (But if you don’t see your question here, let’s talk.)
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classNames(classes.title, classes.space)}>Project</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Can we do a pilot project?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						How many development resources do you assign for different types of projects?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						We have change requests. How will you handle them?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						We want to develop a mobile app. What’s our first step?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						I have an idea for a product. Can you help?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						How can I make my first contact with you most effective?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Do you have a minimum project size?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Who is your ideal client?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Why should we choose Primoko over anyone else?
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Typography className={classNames(classes.title, classes.space)}>Process</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Will you work on-site, or virtually?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						We’re serious about confidentiality. Are you?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Where are your team members based?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						How do you handle version control?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Do you provide system and end-user documentation?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						We have change requests. How will you handle them?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						How do you decide on a software stack?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Do you follow Agile development principles?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Do you develop demos or prototypes as part of your process?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Will you provide us with a free quote?
					</Typography>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography className={classNames(classes.title, classes.space)}>Timeline</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						We’re on a tight deadline. Can you guarantee delivery?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						Do you follow Agile development principles?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)}>
						What is your typical lead time?
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
