import { Container } from './styles';

function LastScreen() {
    return (
        <Container id="screen-2">
            <div className="container-text">
                <h1>
                    We are Leader&nbsp;<br id="desktop"/>in&nbsp; 
                    <br id="mobile"/>Measure Tapes
                </h1>
                <p>There are 5x the<br /> circumference of planet<br /> earth in metric tapes.</p>
            </div>
        </Container>
    );
}

export { LastScreen };