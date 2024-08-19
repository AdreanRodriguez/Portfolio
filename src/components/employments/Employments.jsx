import './employments.css'

function Employments({ employments }) {
    return (
        <>
            {
                employments.map((item) => (
                    <div className="employments" key={item.id}>
                        <div className='employments__info-wrapper'>
                            <p className='employments__company'> {item.company}</p>
                            <h3 className='employments__title'>{item.title}</h3>
                            <p className='employments__year'>{item.yearFrom} - {item.yearTo}</p>
                            <p className='employments__description'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Employments