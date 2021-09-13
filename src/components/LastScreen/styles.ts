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

        h1 {
            font-size: 69.2px;

            color: #FFFFFF; 

            br#mobile {
                display: none;
            }

            br#desktop {
                display: block;
            }

            @media screen and (max-width: 840px) {
                font-size: 41.2px;

                br#mobile {
                    display: block;
                }

                br#desktop {
                    display: none;
                }
            }
        }

        p {
            font-weight: 300;
            font-size: 48.2px;
            line-height: 56px;

            color: #FFFFFF;

            margin-top: 26px;

            @media screen and (max-width: 840px) {
                font-size: 26.2px;

                margin-top: 22px;

                line-height: 31px;
            }
        }

        @media screen and (max-width: 840px) {
            margin: 0;
        }
    }

    @media screen and (max-width: 1024px) {
        background-size: 259px 172px;
        background-position-y: 316px;
        background-position-x: right;

        flex-direction: column;
        
        padding: 76px 18px 0 16px;
    }

    @media screen and (max-width: 320px) {
        background-position-x: 77px;
    }
`;