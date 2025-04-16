export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">
          Bienvenidos a la biblioteca{" "}
          <i style={{ fontWeight: 500 }}>Triple Peaks</i>
        </h1>
        <p className="header__description">
          ¡Nos complace abrir las puertas de nuestra biblioteca a todos! Ven y
          amplía tus conocimientos sobre desarrollo, o simplemente ven a
          trabajar o estudiar con nosotros. ¡Este es un lugar genial para
          estudiantes!
        </p>
        <img
          src="./images/inside_the_library.png"
          alt="Ilustración 'Dentro de la biblioteca'"
          className="header__image"
        />
      </div>
      <div className="header__footer">
        <p className="header__address">Triple Peaks, 200 Success Avenue</p>
      </div>
    </header>
  );
}
