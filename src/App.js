import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
       <h1>Hello World</h1>
    </ ThemeProvider>
  );
}

export default App;
