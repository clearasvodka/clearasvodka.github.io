export default function Home() {
  return (
    <>
      <main>
        <div className="grid-layout">
          <div className="grid-column"></div>
          <div className="grid-column"></div>
        </div>
        <section className="hero">
          <h1>
            Clear
            <wbr />
            asvodka
          </h1>
        </section>
        <div className="info">
          <h2>Work</h2>
          <ul>
            <li>Index</li>
            <li>
              <a
                href="https://lab.clearasvodka.com/"
                target="_blank"
                rel="noreferrer"
                title="roopor"
              >
                Lab
              </a>
            </li>
          </ul>
          <h2>Projects</h2>
          <ul>
            <li>
              <a
                href="http://roopor.com/"
                target="_blank"
                rel="noreferrer"
                title="Roopor"
              >
                Roopor
              </a>
            </li>
            <li className="inactive">&#91;F&#38;O&#93;</li>
            <li className="inactive">&#91;LND&#93;</li>
          </ul>
          <h2>Social</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/rost-osipov"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/clearasvodka"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/rost_oso"
                target="_blank"
                rel="noreferrer"
                title="Twitter"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/clearasvodka"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                Instagram
              </a>
            </li>
            <li className="inactive">YouTube</li>
          </ul>
          <h2>Contacts</h2>
          <ul>
            <li>
              <a href="mailto:hello@clearasvodka.com">hello@clearasvodka.com</a>
            </li>
          </ul>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
