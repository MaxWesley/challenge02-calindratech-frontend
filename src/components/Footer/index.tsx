import { Container } from './styles';

import iconFacebookPNG from '../../assets/icons/icon-facebook.png';
import iconTwitterPNG from '../../assets/icons/icon-twitter.png';
import iconYoutubePNG from '../../assets/icons/icon-youtube.png';

function Footer() {
    return(
        <Container>
            <section>
                <h2>Follow Us</h2>
                <div>
                    <img src={iconYoutubePNG} alt="Icon Youtube" />
                    <img src={iconFacebookPNG} alt="Icon Facebook" />
                    <img src={iconTwitterPNG} alt="Icon Twitter" />
                </div>
            </section>
            <section>
                <h2>Contact</h2>
                <p>
                    2490 Leisure Lane<br /> 
                    San Luis Obispo<br />
                    California
                </p>
            </section>
        </Container>
    );
}

export { Footer };