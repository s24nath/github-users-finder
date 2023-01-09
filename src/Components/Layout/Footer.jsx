const Footer = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  return (
    <footer className="footer py-2 bg-gray-700 text-primary-content footer-center">
      <p className="">{dd}-{mm}-{yyyy}</p>
    </footer>
  );
};

export default Footer;
