export default function Main() {
  return (
    <main className="content">
      <section className="staff" id="staff">
        <h2 className="staff__title">Los preferidos de nuestro staff</h2>
        <p className="staff__subtitle">Que nuestros lectores y lectoras aman</p>
        <ul className="staff__cards">
          <li className="card">
            <div className="card__content">
              <h3 className="card__title">Introducción a los algoritmos</h3>
              <p className="card__text">
                El nombre de este libro se explica por sí solo; ¡es una buena
                Introducción a los algoritmos! Introducción a los algoritmos, o
                CLRS, en referencia a los apellidos de los autores, profundiza y
                abarca una serie de algoritmos a lo largo de varios capítulos
                independientes.
              </p>
              <p className="card__footer">
                Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest,
                Clifford Stein
              </p>
            </div>
          </li>

          <li className="card">
            <div className="card__content">
              <h3 className="card__title">
                La estructura e interpretación de los programas computacionales
                (SICP)
              </h3>
              <p className="card__text">
                Este es uno de los mejores libros para aprender los conceptos
                básicos de la programación. Incluido por el MIT en uno de sus
                cursos básicos de programación, SICP es un libro de programación
                de carácter general que utiliza Scheme para ilustrar diversos
                conceptos de programación.
              </p>
              <p className="card__footer">
                Harold Abelson, Gerald Jay Sussman, Julie Sussman
              </p>
            </div>
          </li>

          <li className="card">
            <div className="card__content">
              <h3 className="card__title">
                El programador limpio: un código de conducta para programadores
                profesionales
              </h3>
              <p className="card__text">
                Compilado por el experimentado ingeniero de software y autor
                Robert C. Martin (también conocido como "Tío Bob"), este libro
                abarca las técnicas y herramientas de la verdadera artesanía de
                software. Explica cómo escribir código limpio y muestra cómo
                cultivar la actitud de un programador experto y profesional.
              </p>
              <p className="card__footer">Steve McConnell</p>
            </div>
          </li>

          <li className="card">
            <div className="card__content">
              <h3 className="card__title">
                Código completo: un manual práctico de construcción de software
              </h3>
              <p className="card__text">
                ¿Te gustaría saber cómo escribir un buen código al margen de la
                arquitectura del lenguaje de programación que hayas elegido?
                Podrías leer "Código completo: un práctico manual sobre creación
                de software". Este aborda de manera exhaustiva todo lo
                relacionado con la buena estructura de código.
              </p>
              <p className="card__footer">Steve McConnell</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="events" id="events">
        <div className="events__content">
          <h2 className="events__heading">Próximos eventos:</h2>
          <h3 className="events__title">
            En honor de Joan Feynman: mujeres en la astrofísica
          </h3>
          <div className="event-info events__info-section">
            <div className="event-info__item">
              <img
                src="./images/icon_calendar.svg"
                alt="Calendar icon"
                className="event-info__icon"
              />
              <p className="event-info__text">Lunes 12 de enero</p>
            </div>
            <div className="event-info__item">
              <img
                src="./images/icon_pin.svg"
                alt="Pin icon"
                className="event-info__icon"
              />
              <p className="event-info__text">
                Sala de conferencias y virtual de la biblioteca Triple Peaks
              </p>
            </div>
          </div>
          <p className="events__description">
            En este evento, en el que celebramos el nombre de nuestra
            biblioteca, nuestra invitada nos llevará a través de un viaje para
            conocer a algunas de las mujeres investigadoras más importantes en
            el mundo de la ciencia espacial. Es fácil caer en la falsa idea de
            que este campo está principalmente dominado por hombres, pero
            nuestra conferencia busca cambiar esa noción y probar que no ha sido
            así desde, al menos, el siglo XVII.
          </p>
          <a href="#" class="events__more">
            Más eventos &rarr;
          </a>
        </div>

        <div className="events__cover">
          <img
            src="./images/cafe.png"
            alt="ilustración de un cafe"
            className="events__image"
          />

          <div className="person person_name_feynman">
            <p className="person__caption">Joan Feynman</p>
            <img
              src="./images/person_feynman.png"
              alt="imagen de Joan Feynman"
              class="person__image person__image_size_l"
            />
          </div>

          <div className="person person_name_burbidge">
            <p className="person__caption">Margaret Burbidge</p>
            <img
              src="./images/person_burbidge.png"
              alt="imagen de Margaret Burbidge"
              className="person__image person__image_size_m"
            />
          </div>

          <div className="person person_name_cannon">
            <img
              src="./images/person_cannon.png"
              alt="imagen de Annie Cannon"
              className="person__image person__image_size_m"
            />
            <p className="person__caption">Annie Jump Cannon</p>
          </div>

          <div className="person person_name_mitchell">
            <img
              src="./images/person_mitchell.png"
              alt="imagen de Maria Mitchell"
              className="person__image person__image_size_s"
            />
            <p className="person__caption">Maria Mitchell</p>
          </div>

          <div className="person person_name_tarter">
            <p className="person__caption">Jill Tarter</p>
            <img
              src="./images/person_tarter.png"
              alt="imagen de Jill Tarter"
              className="person__image person__image_size_m"
            />
          </div>
        </div>
      </section>

      <section className="membership" id="membership">
        <h2 className="membership__title">
          ¡Convertirse en miembro es muy fácil!
        </h2>
        <ul className="membership__steps">
          <li className="step">
            <h3 className="step__title">
              Paso 1
              <img
                src="./images/icon_step_forward.svg"
                alt="icon forward"
                className="step__icon"
              />
            </h3>
            <p className="step__description">
              Completa el formulario de afiliación en línea o en persona.
            </p>
          </li>

          <li className="step">
            <h3 className="step__title">
              Paso 2
              <img
                src="./images/icon_step_forward.svg"
                alt="icon forward"
                className="step__icon"
              />
            </h3>
            <p className="step__description">
              Ven y recoge tu credencial de la biblioteca en la recepción.
            </p>
          </li>

          <li className="step">
            <h3 className="step__title">
              Paso 3
              <img
                src="./images/icon_step_forward.svg"
                alt="icon forward"
                className="step__icon"
              />
            </h3>
            <p className="step__description">Firma el envés de la tarjeta.</p>
          </li>

          <li className="step">
            <h3 className="step__title">
              Paso 4
              <img
                src="./images/icon_step_finish.svg"
                alt="icon finish"
                className="step__icon"
              />
            </h3>
            <p className="step__description">
              ¡Disfruta de los increíbles beneficios de nuestra membresía!
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
