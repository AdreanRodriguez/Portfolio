import Button from '../button/Button.jsx'
import './educations.css'

function Educations({ education }) {


    return (
        <>
            {
                education.map((item) => (
                    <div className="educations" key={item.id}>
                        <div className='educations__info-wrapper'>
                            <h3 className='educations__title'>{item.title}</h3>
                            <p className='educations__year'>{item.yearFrom} - {item.yearTo}</p>
                            {item.company && <p className='educations__company'>Företag: {item.company}</p>}
                            <p className='educations__education'> {item.institution}</p>
                            <p className='educations__description'>{item.description}</p>
                        </div>

                        {
                            item.url &&
                            <section className='button-section'>
                                <Button url={item.url} text={"Läs mer om utbildningen här"} />
                            </section>
                        }

                    </div>
                ))
            }
        </>
    )
}

export default Educations