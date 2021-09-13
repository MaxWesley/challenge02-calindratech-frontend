import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: calc(100vh - 110px);

    background-color: #E9E9E9;

    h1 {
        font-size: 82.2px;
        margin-right: 27px;

        color: #716565;
    }

    img {
        width: 682px;
        height: 335px;

        mix-blend-mode: multiply;
    }
`;