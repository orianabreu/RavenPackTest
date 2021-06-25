import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { 
  InputBase,
  Container,
  Typography
} from '@material-ui/core';

import useStyles from './styles';

export default function SearchBar(props) {

    const { search, searchIcon, inputRoot, inputInput, searchContainer } = useStyles();

    return (
      <Container className={searchContainer}>
        <Typography>Search user posts:</Typography>
        <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              {...props}
            />
        </div>
      </Container>
    )
}