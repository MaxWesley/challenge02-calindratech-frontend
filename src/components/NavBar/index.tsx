import { 
    Container, 
    Logo,
    LogoTypography,
    Slogan,
    MenuItem
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
            <div className="container-links">
                <MenuItem href="#about-us">About us</MenuItem>
                <MenuItem href="#models">Models</MenuItem>
                <MenuItem href="#guarantee">Guarantee</MenuItem>
            </div>
        </Container>
    );
}

export { NavBar };