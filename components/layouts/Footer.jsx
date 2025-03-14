const Footer = () => {
  return (
    <footer className="py-1 ">
    <div className="container-fluid px-4">
      <div className="d-flex align-items-center justify-content-between small">
        <div className="text-muted">Copyright &copy; {process.env.APP_NAME} {new Date().getFullYear()}</div>
        <div>
          <a href="#">Privacy Policy</a>
          &middot;
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;