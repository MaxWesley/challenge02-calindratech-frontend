import {
    Container,
    LogoImage,
    LogoTypography,
    Slogan,
} from './styles';

import logoPNG from '../../assets/images/logo.png';

function Logo() {
    return (
        <Container>
            <LogoImage src={logoPNG} />

            <div>
                <LogoTypography>zutterman</LogoTypography>
                <Slogan>Measure Tapes</Slogan>
            </div>
        </Container>
    );
}

export { Logo };