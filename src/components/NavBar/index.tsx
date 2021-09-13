import { Logo } from '../Logo';

import { 
    Container,
    MenuItem
} from './styles';

function NavBar() {
    return (
        <Container>
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