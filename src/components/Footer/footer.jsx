export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__columns">
        <div className="footer__column">
          <img
            src="/images/logo_white.svg"
            alt="logo tripleten"
            className="footer__logo"
          />
        </div>

        <div className="footer__column footer__column_content_hours">
          <h3 className="footer__column-heading">Horario de apertura</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <p>Lunes a viernes: 9 a.m. -- 8 p.m.</p>
            </li>
            <li className="footer__list-item">
              <p>Sábados y domingos: 10 a.m. -- 6 p.m.</p>
            </li>
          </ul>
        </div>

        <div className="footer__column footer__column_content_social">
          <h3 className="footer__column-heading">Redes sociales</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__column-link">
                <img
                  src="/images/facebook_white.svg"
                  alt="logo de facebook"
                  className="footer__social-icon"
                />
                Facebook
              </a>
            </li>
            <li className="footer__list-item" id="instagram">
              <a href="#" className="footer__column-link">
                <img
                  src="/images/instagram_white.svg"
                  alt="logo de instagram"
                  className="footer__social-icon"
                />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">© 2024 Luisa Maria Seguro.</p>
    </footer>
  );
}
