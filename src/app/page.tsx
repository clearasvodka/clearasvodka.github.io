import styles from "./page.module.css";
import HeroContainer from "@/components/HeroContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <div className={styles["info-container"]}>
        <div className={styles["content-section"]}>
          <div className={styles["section-title"]}>
            <div className={styles["title-block"]}>
              <h2>Work</h2>
              <Image
                className={styles["title-icon"]}
                src="/icons/icon_content-01.svg"
                width={40}
                height={40}
                alt="works"
              />
            </div>
          </div>
          <div className={styles["content-items"]}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large-inactive"]}
                  href="#"
                >
                  Index
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://lab.clearasvodka.com/"
                >
                  Lab &#38; artifacts
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://sketch.clearasvodka.com/"
                >
                  Sketchbook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["content-section"]}>
          <div className={styles["section-title"]}>
            <div className={styles["title-block"]}>
              <h2>Projects</h2>
              <Image
                className={styles["title-icon"]}
                src="/icons/icon_content-02.svg"
                width={40}
                height={40}
                alt="projects"
              />
            </div>
          </div>
          <div className={styles["content-items"]}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://www.roopor.com/"
                >
                  Roopor
                </a>
              </li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles["link-large-inactive"]}
                href="#"
              >
                LND
              </a>
            </ul>
          </div>
        </div>

        <div className={styles["content-section"]}>
          <div className={styles["section-title"]}>
            <div className={styles["title-block"]}>
              <h2>Social</h2>

              <Image
                className={styles["title-icon"]}
                src="/icons/icon_content-03.svg"
                width={40}
                height={40}
                alt="social links"
              />
            </div>
          </div>
          <div className={styles["content-items"]}>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://www.linkedin.com/in/rost-osipov"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://github.com/clearasvodka"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://instagram.com/clearasvodka"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large-inactive"]}
                  href="#"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["content-section"]}>
          <div className={styles["section-title"]}>
            <div className={styles["title-block"]}>
              <h2>Contact</h2>
              <Image
                className={styles["title-icon"]}
                src="/icons/icon_content-04.svg"
                width={40}
                height={40}
                alt="works"
              />
            </div>
          </div>
          <div className={styles["content-items"]}>
            <a
              className={styles["link-large"]}
              href="mailto:hello@clearas.vodka"
            >
              hello@clearas.vodka
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
