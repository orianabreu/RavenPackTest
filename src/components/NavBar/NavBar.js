import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar() {
  const {container, title, MuiAppBar} = useStyles();

  return (
    <div className={container}>
      <AppBar position="static" className={MuiAppBar}>
        <Toolbar>
          <Typography className={title}>
            My Blog
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
