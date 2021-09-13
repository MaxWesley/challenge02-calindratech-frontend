import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: calc(100vh - 110px);

    background-color: #E9E9E9;

    padding-left: 1rem;

    h1 {
        font-size: 82.2px;
        margin-right: 27px;

        color: #716565;

        @media screen and (max-width: 1080px) {
            font-size: 70px;
        }

        @media screen and (max-width: 840px) {
            font-size: 53.2px;
        }
    }

    img {
        width: 682px;

        mix-blend-mode: multiply;

        @media screen and (max-width: 1080px) {
            width: 500px;
        }
        
        @media screen and (max-width: 840px) {
            width: 285px;
            height: 140px;

            margin-top: 28px;
        }
    }

    @media screen and (max-width: 840px) {
        flex-direction: column;

        height: calc(100vh - 57px);
    }
`;