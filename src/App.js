import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Post from './components/Post/Post';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar />
        <Home />
        <Post />
    </ ThemeProvider>
  );
}

export default App;
