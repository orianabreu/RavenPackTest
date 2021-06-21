import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4A26AB',
            dark: '#21244D',
            light: '#9543A7 '
        },
        secondary: {
            main: '#EDE6E3'
        },
        black: {
            main: '#151515',
        }
    },
    typography: {
        fontFamily: "Roboto",
    },
    overrides: {
        MuiCssBaseline: {
          "@global": {
            body: {
              margin: 0,
              padding: 0,
            },
          },
        },
    },
})

export default theme;