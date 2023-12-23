function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Clear as Vodka {currentYear}</p>
    </footer>
  );
}

export default Footer;
