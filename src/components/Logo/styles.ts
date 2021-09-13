import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    & > div {
        margin-left: 24.02px;
    }
`;

export const LogoImage = styled.img`
    width: 71px;
    height: 70px;
`;

export const LogoTypography = styled.h1`
    text-transform: lowercase;

    color: #846219;

    font-size: 41.2px;
    line-height: 48px;
`;


export const Slogan = styled.p`
    color: #846219;

    font-size: 16.2px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 5.4px;
`;
