import styles from "./page.module.css";
// import Header from "@/components/Layout/Header";

export default function Page() {
  return (
    <>
      <section className={styles["book-section"]}>
        <div className="header">
          <h1>Rack</h1>
          <p>
            The collection of chunks somehow shaped the way I think, work and
            behave on day-to-day basis.
          </p>
        </div>
        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            Printing &#38; piety. An essay on life and works in the England of
            1931, &#38; particularly typography
          </div>
          <div className={styles["book-authors"]}>Eric Gill</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            Dieter Rams: The Complete Works
          </div>
          <div className={styles["book-authors"]}>Klaus Klemp</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            The Art of Game Design: A Book of Lenses
          </div>
          <div className={styles["book-authors"]}>Jesse Schell</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>Design, Form, and Chaos</div>
          <div className={styles["book-authors"]}>Paul Rand</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>The New Typography</div>
          <div className={styles["book-authors"]}>Jan Tschichold</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            Grid Systems in Graphic Design
          </div>
          <div className={styles["book-authors"]}>Josef Müller-Brockmann</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>The Trial</div>
          <div className={styles["book-authors"]}>Franz Kafka</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            Information Architecture: For the Web and Beyond
          </div>
          <div className={styles["book-authors"]}>
            Louis Rosenfeld
            <br /> Peter Morville
            <br /> Jorge Arango
          </div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>Think Like a UX Researcher</div>
          <div className={styles["book-authors"]}>
            David Travis
            <br />
            Philip Hodgson
          </div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>
            Fundamentals of Software Architecture: An Engineering Approach
          </div>
          <div className={styles["book-authors"]}>
            Mark Richards
            <br />
            Neal Ford
          </div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>🗯️</div>
          <div className={styles["book-name"]}>Watchmen</div>
          <div className={styles["book-authors"]}>
            Alan Moore
            <br /> Dave Gibbons
            <br /> John Higgins
          </div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>What Is Life?</div>
          <div className={styles["book-authors"]}>Erwin Schrödinger</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>📖</div>
          <div className={styles["book-name"]}>Dune. Complete Series Set</div>
          <div className={styles["book-authors"]}>Frank Herbert</div>
        </div>

        <div className={styles["book-item"]}>
          <div className={styles["book-category"]}>🎬</div>
          <div className={styles["book-name"]}>Jodorowsky's Dune</div>
          <div className={styles["book-authors"]}>Frank Pavich</div>
        </div>
      </section>
    </>
  );
}
