import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 110px;

    background-color: #FFFFFF;

    padding: 20px 53px;

    border-bottom: 1px solid #d2d2d2;

    & > div {
        display: flex;

        width: 268px;
        
        & > div {
            margin-left: 24.02px;
        }
    }
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