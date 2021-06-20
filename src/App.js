import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

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
        <Grid container spacing={2} justify='center'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
    </ ThemeProvider>
  );
}

export default App;
