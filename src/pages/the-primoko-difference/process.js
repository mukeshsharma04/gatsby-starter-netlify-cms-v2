import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import TabBar from '../../components/TabBar';
import { thePrimokoDiffernceFields } from '../../metadata';
import Quotes from '../../components/Quotes';

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
		marginTop: theme.spacing.unit * 1.5
	},
	bold: {
		fontWeight: 'bold'
	},
	link: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtabLink
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.tabLink
		}
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={thePrimokoDiffernceFields} />
			<Grid container className={classes.container} justify="space-between" spacing={40}>
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom>
						The Primoko Process
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						Every company has its process. Here’s ours.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						<span className={classes.bold}>Step 1: Kickoff. </span>During the kickoff meeting, we’ll get
						acquainted, and then discuss your requirements, possible technology stack, business goals, time
						to market, scalability, security, success metrics, and anything else that matters. Both of our
						teams will leave the meeting knowing that we’re all on the same page.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						<span className={classes.bold}>Step 2: Project. </span>During this phase, we’ll establish a
						schedule and milestones that account for what needs to happen, when, considering account
						complexities and your budget. We will also work with your technical team to see what skills you
						might have available to pull into the project. For instance, we might propose an architecture
						and 10 engineers to complete it. If you have 3 engineers available at 50% capacity, we’ll
						augment your team with 8 of our own engineers.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						<span className={classes.bold}>Step 3: Plan. </span>During step three, we’ll create a detailed
						plan for the first few iterations.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						<span className={classes.bold}>Step 4: Go. </span>Next, we’ll begin implementing, testing, and
						releasing iteratively, according to plan. We prefer to release production-ready code with every
						one- or two-week cycles, or sprints. As we gather feedback, we’ll work with you to tweak the
						plan as needed or as you require, reprioritize, and get ready for the next iteration. We’re also
						able to speed up or slow down on a project should the need arise.
					</Typography>
					<Typography className={classes.title} gutterBottom>
						Peace of Mind
					</Typography>
					<Typography className={classes.paragraph} gutterBottom>
						We’ll provide detailed, daily reports so you know every day where your money is going. You won’t
						have to wait three weeks, or six months, for such insights. You’ll know daily. Not only that but
						we also bake in DevOps tools and practices in to the environment, so you get the benefit of
						automated and real-time notifications as code moves from development to build to deployment. As
						features and bugs from “to-do” to “done” in real-time. How’s that for peace of mind?
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom>
						Questions? Comments Concerns?
					</Typography>
					<Typography className={classNames(classes.link, classes.space)} gutterBottom>
						Please let us know.
					</Typography>
				</Grid>
			</Grid>
			<Quotes quote="Excellence is a continuous process and not an accident." author="A.P.J. Abdul Kalam" />
		</React.Fragment>
	);
});
