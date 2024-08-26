import "./projectsCard.css";
import { useState } from "react";
import Button from "../button/Button";

function ProjectsCard({ project, index }) {
  const [selectedProjectImage, setSelectedProjectImage] = useState("");
  const [isImageClicked, setIsImageClicked] = useState(false);

  const openLightbox = (clickedImg) => {
    setSelectedProjectImage(clickedImg);
    setIsImageClicked(true);
  };

  const closeLightbox = () => {
    setIsImageClicked(false);
  };

  return (
    <article
      className={`projects-card__article displayed${index}`}
      index={index}
      key={project.id}
    >
      <div
        className={isImageClicked ? "lightbox open" : "lightbox"}
        onClick={closeLightbox}
      >
        <img
          className="lightbox-content"
          src={project.fullImg || selectedProjectImage}
          alt="Enlarged project"
        />
        <span className="close" onClick={closeLightbox}>
          {" "}
          &times;{" "}
        </span>
      </div>

      <section className="projects-card__info-container">
        <h2 className="projects-card__title"> {project.title} </h2>
        <h2 className="projects-card__skills"> {project.skills} </h2>
        <ul className="projects-card__desc-ul">
          {project.desc.map((item, index) => (
            <li className="projects-card__desc-list" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
        <section className="projects-card__link-section">
          <Button url={project.url} text={"Länk till projekt"} />
        </section>
      </section>
      <figure className="projects-card__img-container">
        <img
          className="projects-card__img"
          src={project.img}
          alt="Photo of my project"
          onClick={() => openLightbox(project.img)}
        />
      </figure>
    </article>
  );
}

export default ProjectsCard;

// <>
//     <div className={isImageClicked ? 'lightbox open' : 'lightbox'} onClick={closeLightbox}>
//         <img className='lightbox-content' src={selectedProjectImage} alt="Enlarged project" />
//         <span className="close" onClick={closeLightbox}>&times;</span>
//     </div>

//     {
//         projects.map((project) => (
//             <article className='project-card__article' key={project.id}>
//                 <h2 className='project-card__title'>{project.title}</h2>
//                 <div className='project-card__img-container' >
//                     <img className='project-card__img' src={project.img} alt="Photo of my project" onClick={() => openLightbox(project.img)} />
//                 </div>
//                 <h2 className='project-card__skills'><span className='skills'>Skills: </span> {project.skills}</h2>
//                 <a href={project.url} target='_blank' className='project-card__url'>Länk till projekt</a>
//             </article>
//         ))
//     }
// </>
