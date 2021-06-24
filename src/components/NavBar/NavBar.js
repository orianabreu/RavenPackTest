import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

import useStyles from './styles';

export default function NavBar() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {container, title, MuiAppBar } = useStyles();

  return (
    <div className={container}>
      <AppBar position="static" className={MuiAppBar}>
        <Toolbar>
            <Typography className={title}>
              Blog
            </Typography>

            <MenuIcon onClick={handleClick} color='primary'/>
               
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <Link exact to='/' style={{ textDecoration: 'none', color: '#000'}}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>

              <Link exact to='/PostList' style={{ textDecoration: 'none', color: '#000'}}>
                <MenuItem onClick={handleClose}>List of posts</MenuItem>
              </Link>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
