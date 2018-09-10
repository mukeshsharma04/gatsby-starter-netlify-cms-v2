import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import TabBar from '../../components/TabBar';
import { thePrimokoDiffernceFields } from '../../metadata';
import Quotes from '../../components/Quotes';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: '40px 30px'
		},
		[theme.breakpoints.up('md')]: {
			padding: '60px 60px'
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
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: '30px'
	},
	space2: {
		marginTop: '60px'
	},
	bold: {
		fontWeight: 'bold'
	},
	textBlue: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#4198ff',
			fontWeight: '900'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#4198ff',
			fontWeight: '900'
		},
		'&:hover': {
			color: '#4198ff',
			fontWeight: '900',
			textDecoration: 'underline'
		}
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<TabBar fields={thePrimokoDiffernceFields} />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={7}>
					<Typography className={classes.title}>The Primoko Process</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						Every company has its process. Here’s ours.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						<span className={classes.bold}>Step 1: Kickoff. </span>During the kickoff meeting, we’ll get
						acquainted, and then discuss your requirements, possible technology stack, business goals, time
						to market, scalability, security, success metrics, and anything else that matters. Both of our
						teams will leave the meeting knowing that we’re all on the same page.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						<span className={classes.bold}>Step 2: Project. </span>During this phase, we’ll establish a
						schedule and milestones that account for what needs to happen, when, considering account
						complexities and your budget. We will also work with your technical team to see what skills you
						might have available to pull into the project. For instance, we might propose an architecture
						and 10 engineers to complete it. If you have 3 engineers available at 50% capacity, we’ll
						augment your team with 8 of our own engineers.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						<span className={classes.bold}>Step 3: Plan. </span>During step three, we’ll create a detailed
						plan for the first few iterations.
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						<span className={classes.bold}>Step 4: Go. </span>Next, we’ll begin implementing, testing, and
						releasing iteratively, according to plan. We prefer to release production-ready code with every
						one- or two-week cycles, or sprints. As we gather feedback, we’ll work with you to tweak the
						plan as needed or as you require, reprioritize, and get ready for the next iteration. We’re also
						able to speed up or slow down on a project should the need arise.
					</Typography>
				</Grid>

				<Grid item xs={12} md={4}>
					<img
						src={withPrefix('/img/illustration-dev-ops.png')}
						className={classNames(classes.logo, classes.space)}
					/>
				</Grid>

				<Grid item xs={12} md={7}>
					<Typography className={classNames(classes.title, classes.space2)}>Peace of Mind</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						We’ll provide detailed, daily reports so you know every day where your money is going. You won’t
						have to wait three weeks, or six months, for such insights. You’ll know daily. Not only that but
						we also bake in DevOps tools and practices in to the environment, so you get the benefit of
						automated and real-time notifications as code moves from development to build to deployment. As
						features and bugs from “to-do” to “done” in real-time. How’s that for peace of mind?
					</Typography>
					<Typography className={classNames(classes.paragraph, classes.space)}>
						Questions? Comments Concerns?
					</Typography>
					<a href="/letstalk" className={classes.textBlue}>
						<div className={classes.space}>Please let us know.</div>
					</a>
				</Grid>
			</Grid>

			<Quotes quote="Excellence is a continuous process and not an accident." author="A.P.J. Abdul Kalam" />
		</React.Fragment>
	);
});
