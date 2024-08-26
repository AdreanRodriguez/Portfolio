import "./hero.css";
import profileImg from "../../assets/profile.png";
import ContactLogos from "../contactLogos/ContactLogos";

function Hero() {
  return (
    <section className="hero">
      <figure className="profile-picture__container">
        <img className="profile-picture" src={profileImg} alt="ME" />
      </figure>
      <h1 className="heading-name">ADRÉAN RODRIGUEZ</h1>
      <p className="heading-desciption">
        Jag studerar för närvarande front-end utveckling med fokus på moderna
        tekniker och verktyg för att skapa engagerande användarupplevelser. Med
        en stark passion för design och funktionalitet, strävar jag efter att
        bygga webbplatser som är både estetiskt tilltalande och användarvänliga.
      </p>
      <ContactLogos />
      <hr className="line-break" />
    </section>
  );
}

export default Hero;
