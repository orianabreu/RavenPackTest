import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography,
  Menu,
  MenuItem
} from '@material-ui/core';

import useStyles from './styles';
import Button from '../Button/Button';

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

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
