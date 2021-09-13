import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 110px;

    background-color: #FFFFFF;

    padding: 20px 64px 20px 53px;

    & > div {
        display: flex;

        & > div {
            margin-left: 24.02px;
        }
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
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

export const MenuItem = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    
    font-size: 16.2px;
    font-weight: 300;
    
    line-height: 19px;
    letter-spacing: 5.4px;

    cursor: pointer;

    transition: filter 0.3s;

    color: #846219;
    
    &:not(:first-of-type) {
        margin-left: 128px;
    }

    &:hover {
        filter: brightness(1.2);
    }
`;