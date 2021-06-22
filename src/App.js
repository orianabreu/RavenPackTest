import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

import theme from './styles/theme';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import PostCard from './components/PostCard/PostCard';
import SinglePost from './components/SinglePost/SinglePost';

function App() {

  const [posts, setPosts] = useState([]);

  const [postIsOpen, setPostIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
        <NavBar />
        {!postIsOpen && <Home />}
        {!postIsOpen && <Grid container spacing={2} justify='center'>
          {loadedPosts.map(({id, ...rest}) => (
            <PostCard {...rest} setPostIsOpen={setPostIsOpen} key={id}/>
          ))}
        </Grid>}
        {postIsOpen && <SinglePost postIsOpen={postIsOpen}/>}
    </ ThemeProvider>
  );
}

export default App;

//create a button to access a list of all post (just the title) and then add a search bar to filter by name 
// divide the components (image, comments, post, user) so each one of them can hold a fetch and url
