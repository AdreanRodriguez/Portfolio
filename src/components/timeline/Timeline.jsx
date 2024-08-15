import './timeline.css'
import ContactLogo from '../contactLogos/ContactLogos.jsx'

import Employments from '../../employments/Employments.jsx';
import employments from '../../data/employments.js';

import Educations from '../../educations/Educations.jsx';
import education from '../../data/education.js'



function Timeline() {

    console.log(education[0].url);


    return (
        <>
            <section className='timeline__wrapper'>
                <article className='timeline__section'>
                    <h2 className='timeline__heading'>Anställningar</h2>
                    {<Employments employments={employments} />}
                </article>
                <article className='timeline__section'>
                    <h2 className='timeline__heading'>Utbildningar</h2>
                    <Educations education={education} />
                </article>
                <section className='timeline__logo-container'>
                    <ContactLogo />
                </section>
            </section>
        </>
    )
}

export default Timeline