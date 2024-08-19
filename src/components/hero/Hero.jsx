import './hero.css'
import profileImg from '../../assets/profile.png'
import ContactLogos from '../contactLogos/ContactLogos'

function Hero() {



  return (
    <section className='section__wrapper'>
      <main className='hero'>
        <div className='profile-picture__container'>
          <img className='profile-picture' src={profileImg} alt="ME" />
        </div>
        <h1 className='heading-name'>
          ADRÉAN RODRIGUEZ
        </h1>
        <p className='heading-desciption'>
          Jag studerar för närvarande front-end utveckling med fokus på moderna tekniker och verktyg för att skapa engagerande användarupplevelser. Med en stark passion för design och funktionalitet, strävar jag efter att bygga webbplatser som är både estetiskt tilltalande och användarvänliga.
        </p>

        <hr className='line-break' />
        <ContactLogos />
      </main>
    </section>
  )
}

export default Hero