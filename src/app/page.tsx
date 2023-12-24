import styles from "./page.module.css";
import HeroContainer from "@/components/HeroContainer";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <div className="main-content"></div>
    </>
  );
}
