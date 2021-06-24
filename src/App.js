import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PostCard from './components/PostCard/PostCard';
import SinglePost from './components/SinglePost/SinglePost';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';

function App(pst) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  const [showPost, setShowPost] = useState(20);
  const loadedPosts = posts.slice(0, showPost);

    function loadMore(){
        if(showPost < 100){
            setShowPost (showPost + 20);
        }else{
            alert('No new Post');
        }
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
              <SearchBar />
              <Grid container spacing={2} justify='center'>
                {loadedPosts.map((pst) => (
                  <PostCard pst={pst} key={pst.id}/>
                ))}
              </Grid>
            </Route>
            <Route exact path='/singlePost/:postId' component={SinglePost} />
            <Route exact path='/PostList'>
              <PostList pst={pst}/>
            </Route>
          </Switch>
      </Router>
    </ ThemeProvider>
  );
}

export default App;

