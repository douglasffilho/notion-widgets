import { contactURL } from '../constants';
import Link from './Link';

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <Link href="/">
          <p>GCampos</p>
          <p>Construtora e Engenharia</p>
        </Link>
        <div className="info-wrapper">
          <div>
            <p>Sede</p>
            <p>Av. República do Líbano, 251 - Pina, Recife - PE, 51110-160</p>
            <p>Rua Riomar, Trade Center, Torre 2, Sala 2404</p>
            <div className="redirect">
              <a href="https://ul.waze.com/ul?ll=-8.08694376%2C-34.89111900&navigate=yes&zoom=17">
                <img alt="waze" src="/images/waze.png" />
              </a>
              <a href="https://maps.app.goo.gl/i54ca4Gw79s81HTB7">
                <img alt="waze" src="/images/google.png" />
              </a>
            </div>
          </div>

          <div>
            <p>Redes Sociais</p>
            <Link href="https://www.linkedin.com/company/gcampos-construtora-e-engenharia/">
              <p>LinkedIn</p>
            </Link>
            <Link href="https://www.instagram.com/gcamposeng/">
              <p>Instagram</p>
            </Link>
            <Link href={contactURL}>
              <p>Whatsapp</p>
            </Link>
          </div>
        </div>
        <Link href="/contato">
          <p>Fale conosco</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
