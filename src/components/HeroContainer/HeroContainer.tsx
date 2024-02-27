import "./heroContainer.css";
import Image from "next/image";
import cavSymbol3D from "../../../public/img/img_hero_cav.png";

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
              placeholder="blur"
              src={cavSymbol3D}
              alt="clearasvodka logo"
              style={{
                maxWidth: "80%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
