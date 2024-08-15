import './carousel.css'
import ProjectsCard from '../projectsCard/ProjectsCard'
import { projects } from '../../data/projects.js'
import { useState } from 'react'

function Carousel() {

    const [item, setItem] = useState(projects)

    function slideLeft() {
        const copyItem = [...item]
        const movedItem = copyItem.pop()
        copyItem.unshift(movedItem)
        setItem(copyItem)
    }

    // Ha visible hidden på "ALLA ANDRA" sen köra nth:child() på 0, 1, 2 så visar man bara dom

    function slideRight() {
        const copyItem = [...item]
        const movedItem = copyItem.shift()
        copyItem.push(movedItem)
        setItem(copyItem)
    }


    return (
        <section className='carousel-container'>
            <button
                onClick={slideLeft}
                className='nav-btn nav-btn--left'>
                &#8249;
            </button>
            <section className='carousel-card'>
                {
                    item.map((project, index) => (
                        <ProjectsCard
                            key={project.id}
                            index={index}
                            project={project}
                        />
                    ))
                }
            </section>

            <button
                onClick={slideRight}
                className='nav-btn nav-btn--right'>
                &#8250;
            </button>
        </section>
    )
}

export default Carousel
