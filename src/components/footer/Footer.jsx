import ContactLogo from "../contactLogos/ContactLogos";
import "./footer.css";

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <section className="footer__contact-section">
        <p className="footer__contact-text">
          Hör av dig så tar vi en virtuell kaffe!
          <br />
          Du kan nå mig på något av följande sätt
        </p>
        <ContactLogo />
      </section>
      <p className="footer__created-by">Adréan Rodriguez {thisYear}</p>
    </footer>
  );
}

export default Footer;
