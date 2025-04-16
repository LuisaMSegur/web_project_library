import logo from "../../images/logo.svg";
export default function Nav() {
  return (
    <nav className="nav">
      <img
        src={logo}
        alt="Logotipo de la Biblioteca Triple Peaks"
        className="nav__logo"
      />
      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#staff">
            Los preferidos de nuestro staff
          </a>
        </li>
        <li>
          <a className="nav__link" href="#events">
            Eventos
          </a>
        </li>
        <li>
          <a className="nav__link" href="#membership">
            Conviértete en miembro
          </a>
        </li>
        <li>
          <a className="nav__link" href="#footer">
            Contactos
          </a>
        </li>
      </ul>
    </nav>
  );
}
