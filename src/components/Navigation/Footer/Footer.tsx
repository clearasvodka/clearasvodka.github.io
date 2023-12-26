function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; clearasvodka {currentYear}</p>
    </footer>
  );
}

export default Footer;
