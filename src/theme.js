import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import 'typeface-lato';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: pink,
		error: red,
		// Used by `getContrastText()` to maximize the contrast between the background and
		// the text.
		contrastThreshold: 3,
		// Used to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	},

	typography: {
		fontFamily: [
			'"Lato"',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(','),

		title: {
			fontFamily: 'Lato',
			fontSize: '30px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#333333'
		},

		hamburgerSection: {
			fontFamily: 'Lato',
			fontSize: '25px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		mtitle: {
			fontFamily: 'Lato',
			fontSize: '25px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#333333'
		},

		quote: {
			fontFamily: 'Lato',
			fontSize: '20px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '2',
			letterSpacing: 'normal',
			color: '#6f73ff'
		},

		mHamburgerTitle: {
			fontFamily: 'Lato',
			fontSize: '20px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		dropdownLi: {
			fontFamily: 'Lato',
			fontSize: '20px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.35',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		subheading: {
			fontFamily: 'Lato',
			fontSize: '18px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			textAlign: 'center',
			color: '#666666'
		},

		footerSection: {
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		tabLink: {
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: 'bold',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.5',
			letterSpacing: 'normal',
			textAlign: 'center',
			color: '#333333'
		},

		paragraph: {
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.5',
			letterSpacing: 'normal',
			color: '#333333'
		},

		link: {
			fontFamily: 'Lato',
			fontSize: '16px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#4198ff'
		},

		mLink: {
			fontFamily: 'Lato',
			fontSize: '14px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#4198ff'
		},

		mDropdownLi: {
			fontFamily: 'Lato',
			fontSize: '14px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.71',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		mParagraph: {
			fontFamily: 'Lato',
			fontSize: '14px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.43',
			letterSpacing: 'normal',
			color: '#333333'
		},

		button: {
			fontFamily: 'Lato',
			fontSize: '14px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			textAlign: 'center',
			color: '#ffffff'
		},

		footerLinks: {
			fontFamily: 'Lato',
			fontSize: '12px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.33',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		mtabLink: {
			fontSize: '14px',
			fontWeight: 500,
			color: '#4198ff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal'
		},

		hero: {
			fontSize: '30px',
			fontWeight: 900,
			color: '#ffffff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '62px',
			letterSpacing: 'normal'
		},

		mhero: {
			fontSize: '25px',
			fontWeight: 900,
			color: '#ffffff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '55px',
			letterSpacing: 'normal'
		},

		subLink: {
			fontFamily: 'Lato',
			fontSize: '20px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.35',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		msubLink: {
			fontFamily: 'Lato',
			fontSize: '14px',
			fontWeight: '500',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: '1.35',
			letterSpacing: 'normal',
			color: '#ffffff'
		}
	}
});

export default theme;
