import FooterBanner from "@/components/Banners/FooterBanner";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {/* <FooterBanner /> */}
        <div className="footer-content">&copy; clearasvodka {currentYear}</div>
      </footer>
    </>
  );
}

export default Footer;
