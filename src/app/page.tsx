import styles from "./page.module.css";
import HeroContainer from "@/components/HeroContainer";
import Image from "next/image";
import HoloSticker from "@/components/Stickers";

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
                <span className={styles["content-number"]}>01</span>
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
                <span className={styles["content-number"]}>02</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large-inactive"]}
                  href="#"
                >
                  Lab
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
                <span className={styles["content-number"]}>03</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://www.roopor.com/"
                >
                  Roopor
                </a>
              </li>

              <li>
                <span className={styles["content-number"]}>04</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large-inactive"]}
                  href="#"
                >
                  LND
                </a>
              </li>

              <li>
                <span className={styles["content-number"]}>05</span>
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
                <span className={styles["content-number"]}>06</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://dribbble.com/emelman"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <span className={styles["content-number"]}>07</span>
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
                <span className={styles["content-number"]}>08</span>
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
                <span className={styles["content-number"]}>09</span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["link-large"]}
                  href="https://instagram.com/clearasvodka"
                >
                  Instagram
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
            <span className={styles["content-number"]}>10</span>
            <a className={styles["link-large"]} href="mailto:hi@clearas.vodka">
              hi@clearas.vodka
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
