import { Logo } from '../Logo';

import { 
    Container,
    MenuItem,
    MenuMobileIcon
} from './styles';

import menuMobilePNG from '../../assets/images/menu-mobile.png';

function NavBar() {
    return (
        <Container>
            <MenuMobileIcon src={menuMobilePNG} alt="Icon menu mobile"/>
            <Logo />
            <div className="container-links">
                <MenuItem href="#about-us">About us</MenuItem>
                <MenuItem href="#models">Models</MenuItem>
                <MenuItem href="#guarantee">Guarantee</MenuItem>
            </div>
        </Container>
    );
}

export { NavBar };