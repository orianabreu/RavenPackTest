import React from 'react';

import homeImg from '../../assets/backgroundimg.png';

import * as S from './styles';

export default function Home() {

    return (
        <S.Container>
            <S.HomeImage src={homeImg} alt='homeimage'/>
            <S.TextOverlay>
                <S.HomeText>
                    welcome to my blog
                </S.HomeText>
            </S.TextOverlay>
        </S.Container>
    )
}