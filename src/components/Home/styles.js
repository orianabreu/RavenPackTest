import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    max-height: 90vh;
    max-width: 100%;  
`;

export const HomeImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const TextOverlay = styled.div`
    position:absolute;
    left:0;
    top:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100vh;
`;

export const HomeText = styled.h1`
    font-weight: 500;
    font-size: 6rem;
`;