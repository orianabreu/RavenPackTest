import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <Home />
    </ ThemeProvider>
  );
}

export default App;
