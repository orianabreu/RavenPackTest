import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default function NavBar() {
  const {container, title, MuiAppBar } = useStyles();

  return (
    <div className={container}>
      <AppBar position="static" className={MuiAppBar}>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none'}}>
            <Typography className={title}>
              Blog
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
