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
			fontSize: '30px',
			fontWeight: 500,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#333333'
		},

		mtitle: {
			fontSize: '25px',
			fontWeight: 500,
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#333333'
		},

		subheading: {
			fontSize: '18px',
			fontWeight: 900,
			color: '#666666',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal'
		},

		paragraph: {
			fontSize: '16px',
			fontWeight: 500,
			color: '#333333',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			lineHeight: 1.5
		},

		mparagraph: {
			fontSize: '14px',
			fontWeight: 500,
			color: '#333333',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			lineHeight: 1.5
		},

		tabLink: {
			fontSize: '16px',
			fontWeight: 500,
			color: '#4198ff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal'
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
			lineHeight: 'normal',
			letterSpacing: 'normal'
		},

		mhero: {
			fontSize: '25px',
			fontWeight: 900,
			color: '#ffffff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal'
		},

		button: {
			fontSize: '14px',
			fontWeight: 500,
			color: '#ffffff',
			textAlign: 'center'
		},

		quote: {
			fontSize: '20px',
			fontWeight: 900,
			color: '#6f73ff',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			lineHeight: 2
		},

		link: {
			fontFamily: 'Lato',
			fontSize: '25px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#ffffff'
		},

		mlink: {
			fontFamily: 'Lato',
			fontSize: '20px',
			fontWeight: '900',
			fontStyle: 'normal',
			fontStretch: 'normal',
			lineHeight: 'normal',
			letterSpacing: 'normal',
			color: '#ffffff'
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
