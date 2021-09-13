import styled from 'styled-components';

export const Container = styled.nav`
    width: 100%;
    height: 110px;

    background-color: #FFFFFF;

    padding: 20px 64px 20px 53px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 840px) {
        justify-content: center;
        height: 57px;
    }
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

    @media screen and (max-width: 1080px) {
        &:not(:first-of-type) {
            margin-left: 64px;
        }
    }

    @media screen and (max-width: 840px) {
        display: none;
    }
`;

export const MenuMobileIcon = styled.img`
    position: absolute;
    left: 22px;
    top: 14px;
    bottom: 17px;

    cursor: pointer;

    transition: filter 0.3s;

    &:hover {
        filter: brightness(0.8);
    }
`;