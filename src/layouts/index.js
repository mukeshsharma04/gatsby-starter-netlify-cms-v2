import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './../theme';
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Helmet title="Primoko" />
    <Navbar />
    <div>{children()}</div>
		<Footer />
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
