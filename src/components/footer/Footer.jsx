
import './footer.css'

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
      <footer className='footer'>
        Adréan Rodriguez {thisYear}
      </footer>
  )
}

export default Footer