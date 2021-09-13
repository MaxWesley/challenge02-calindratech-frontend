import styled from 'styled-components';

import bgLastScreen from '../../assets/images/measuring-tape2.png';

export const Container = styled.section`
    background: #506FA9 url(${bgLastScreen}) no-repeat;

    background-size: 1038px 689px;
    background-blend-mode: multiply;

    background-position-y: 83px;
    background-position-x: right;

    height: 100vh;

    display: flex;
    flex-direction: column-reverse;


    div {
        margin-left: 159px;
        margin-bottom: 216px;
    }

    h1 {
        font-size: 69.2px;

        color: #FFFFFF; 
    }

    p {
        font-weight: 300;
        font-size: 48.2px;
        line-height: 56px;

        color: #FFFFFF;

        margin-top: 26px;
    }
`;