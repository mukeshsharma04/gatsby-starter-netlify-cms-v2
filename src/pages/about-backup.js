import React from 'react';
import TextImageWidget from '../components/TextImageWidget';
import { withStyles } from '@material-ui/core/styles';
import Quote from '../components/Quotes';
import { withPrefix } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '../components/Button';
import Hidden from '@material-ui/core/Hidden';
import JoinTeam from '../components/JoinTeam';
import Link from 'gatsby-link';

const styles = (theme) => ({
	banner: {
		position: 'relative',
		backgroundImage: `url(${withPrefix('/img/typing.png')})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			height: '200px'
		},
		[theme.breakpoints.up('sm')]: {
			height: '348px'
		}
	},
	block: {
		width: '380px',
		height: '280px',
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		top: theme.spacing.unit * 4,
		right: theme.spacing.unit * 2
	},
	subTitle: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		},
		marginTop: theme.spacing.unit * 3
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		},
		marginTop: theme.spacing.unit * 2,
		padding: '0 5%'
	},
	button: {
		width: '260px',
		height: '39px',
		borderRadius: '19.5px',
		marginTop: theme.spacing.unit * 3,
		'&:hover': {
			color: '#ffffff'
		}
	}
});

const About = ({ classes }) => {
	return (
		<div>
			<TextImageWidget />
			<div className={classes.banner}>
				<Hidden xsDown>
					<Grid container direction="row" justify="flex-end" alignItems="center" className={classes.block}>
						<Grid container justify="center" alignItems="center">
							<Grid item>
								<Typography className={classes.subTitle} align="center">
									Join the team
								</Typography>
								<Typography className={classes.paragraph} align="center">
									Are you a nerd looking for home? Or a nerd looking to work from home? Checkout our
									current opportunities.
								</Typography>
								<div style={{ width: '100%', textAlign: 'center' }}>
									<Button
										styles={classes.button}
										text="See career opportunities"
										to="/careers"
										component={Link}
									/>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			</div>
			<Hidden smUp>
				<JoinTeam />
			</Hidden>
			<Quote
				author="Martin Fowler"
				quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
			/>
		</div>
	);
};

export default withStyles(styles)(About);
