import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Container } from '@material-ui/core';

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PostCard from './components/PostCard/PostCard';
import SinglePost from './components/SinglePost/SinglePost';
import PostList from './components/PostList/PostList';
import SearchBar from './components/SearchBar/SearchBar';
import Button from './components/Button/Button';

function App(pst) {

  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(parseInt(event.target.value, 10))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  useEffect(() => {
    setFilteredPosts(posts.filter((pst) => pst.userId === searchValue));
  }, [posts, searchValue]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
              <SearchBar
              min={0} 
              type='number'
              value={searchValue}
              onChange={handleSearchChange}
              />
              <Grid container spacing={2} justify='center'>
                {searchValue === 0 ? posts.map((pst) => (
                  <PostCard pst={pst} key={pst.id}/>
                )) : filteredPosts.map((pst) => (
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

