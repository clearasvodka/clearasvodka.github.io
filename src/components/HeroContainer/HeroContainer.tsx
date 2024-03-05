import "./heroContainer.css";
import Image from "next/image";
import cavSymbol3D from "../../../public/img/img_hero_cav.png";

const heroImageStyle = {
  maxWidth: "80%",
  height: "auto",
  filter: "blur(0.2px)",
};

export default function HeroContainer() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>clearasvodka</h1>
            <span className="text-beta">BETA</span>
          </div>
          <div className="hero-image">
            <Image
              style={heroImageStyle}
              placeholder="empty"
              quality={75}
              loading="lazy"
              src={cavSymbol3D}
              alt="clearasvodka logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
