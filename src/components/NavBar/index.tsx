import { 
    Container, 
    Logo,
    LogoTypography,
    Slogan
} from './styles';

import logoPNG from '../../assets/images/logo.png';

function NavBar() {
    return (
        <Container>
            <div className="container-logo">
                <Logo src={logoPNG} />
                <div>
                    <LogoTypography>zutterman</LogoTypography>
                    <Slogan>Measure Tapes</Slogan>
                </div>
            </div>
        </Container>
    );
}

export { NavBar };