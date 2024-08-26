import "./contactLogos.css";
import likedIn from "../../assets/logo/LinkedIn.svg";
import gitHub from "../../assets/logo/GitHub.svg";
import outlook from "../../assets/logo/Outlook.svg";

function ContactLogo() {
  return (
    <nav className="logo-container">
      <a
        href="https://www.linkedin.com/in/adréan-rodriguez-60aa3b28a"
        target="_blank"
        className="logo-div"
      >
        <img className="logo" src={likedIn} alt="Logo LinkedIn" />
      </a>

      <a
        href="https://github.com/AdreanRodriguez"
        target="_blank"
        className="logo-div"
      >
        <img className="logo" src={gitHub} alt="Logo GitHub" />
      </a>

      <a
        href="mailto:Adrean.R@hotmail.com"
        target="_blank"
        className="logo-div"
      >
        <img className="logo" src={outlook} alt="Logo Outlook" />
      </a>
    </nav>
  );
}

export default ContactLogo;
