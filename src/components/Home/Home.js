import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import homeImage from '../../assets/homeimg.png';

import useStyles from './styles';

export default function Home() {

    const { homeContainer } = useStyles();
    return (
        <div>
            <img src={homeImage} alt='homeimage'/>
        </div>
    )
}