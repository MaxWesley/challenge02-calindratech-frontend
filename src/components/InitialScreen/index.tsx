import { Container } from './styles';

import MeasuringTapePNG from '../../assets/images/measuring-tape.png';

function InitialScreen() {
    return (
        <Container id="screen-1">
            <h1>
                Measuring<br />
                everything
            </h1>
            <img src={MeasuringTapePNG} alt="Measuring tape" />
        </Container>
    );
}

export { InitialScreen };