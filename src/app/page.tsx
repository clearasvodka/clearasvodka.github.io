import styles from "./page.module.css";
import HeroContainer from "@/components/HeroContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <div className={styles["main-content"]}>
        <div className={styles["content-section"]}>
          <div className={styles["content-block-name"]}>
            <div className={styles["content-title-icon"]}>
              <h2>Work</h2>
              <Image
                className={styles["content-icon"]}
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
                  className={styles["link-large"]}
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
                  href="#"
                >
                  Lab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["content-section"]}>
          <div className={styles["content-block-name"]}>
            <div className={styles["content-title-icon"]}>
              <h2>Projects</h2>
              <Image
                className={styles["content-icon"]}
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
                className={styles["link-large"]}
                href="#"
              >
                LND
              </a>
            </ul>
          </div>
        </div>

        <div className={styles["content-section"]}>
          <div className={styles["content-block-name"]}>
            <div className={styles["content-title-icon"]}>
              <h2>Social</h2>

              <Image
                className={styles["content-icon"]}
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
                  className={styles["link-large"]}
                  href="#"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["content-section"]}>
          <div className={styles["content-block-name"]}>
            <div className={styles["content-title-icon"]}>
              <h2>Contact</h2>
              <Image
                className={styles["content-icon"]}
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
