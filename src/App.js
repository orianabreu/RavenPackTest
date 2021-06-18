import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
       <h1>Hello World</h1>
    </ ThemeProvider>
  );
}

export default App;
