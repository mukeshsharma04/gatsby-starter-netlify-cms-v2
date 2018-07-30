import React from 'react';
import Banner from '../components/Banner';
import TextImageWidget from '../components/TextImageWidget';
import Team from '../components/Team';
import JoinTeam from '../components/JoinTeam';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Quote from '../components/Quotes';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	divider: {
		backgroundColor: '#d1d1d1',
		margin: '0 5%'
	}
});

const About = ({ classes }) => {
	return (
		<div>
			<TextImageWidget />
			<Banner banner={withPrefix('/img/typing.png')} height="348px" />
			<Team />
			<Divider className={classes.divider} />
			<JoinTeam />
			<Quote
				author="Martin Fowler"
				quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
			/>
		</div>
	);
};

export default withStyles(styles)(About);
