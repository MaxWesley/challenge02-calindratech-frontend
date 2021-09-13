import styled from 'styled-components';

export const Container = styled.footer`
    height: 226px;

    background-color: #E9E9E9;

    display: flex;

    padding: 47px 0  0 151px;

    section {
        &:first-of-type {
            margin-right: 259.07px;
        }

        h2 {
            color: #716565;
            
            font-size: 27.2px;
            
            line-height: 31.88px;
        }

        p {
            margin-top: 15px;

            color: #716565;

            font-size: 16.2px;
            line-height: 18.98px;
        }

        div {
            padding-top: 15.7px;
 
            img {
                width: 42.91px;
                height: 42.91px;

                cursor: pointer;
                
                transition: transform 0.3s;

                &:hover {
                    transform: translateY(-0.2rem);
                }
            }
                        
            img:not(:first-of-type) {
                margin-left: 24.3px;
            }
        }
    }
`;