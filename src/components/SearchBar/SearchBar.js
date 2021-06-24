import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { 
  InputBase,
  Container
} from '@material-ui/core';

import useStyles from './styles';

export default function SearchBar() {

    const { search, searchIcon, inputRoot, inputInput } = useStyles();

    return (
      <Container maxWidth='lg'>
        <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
      </Container>
    )
}