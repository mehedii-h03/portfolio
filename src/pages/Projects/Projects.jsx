import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [modal, setModal] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handlerControlModal = (index) => {
    setModal(index);
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://server-five-inky-48.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  useEffect(() => { }, []);

  const modalCloseOutside = (e) => {
    console.log(modalRef.current);
    console.log(e.target);
    // if (!modalRef.current?.contain(e.target)) {
    //     handlerControlModal();
    // }
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">All of my projects</span>
      <div className="projects__container container grid">
        {projects.map((project, i) => (
          <div key={i + 1} onClick={modalCloseOutside} className="">
            <div
              className="projects__content card"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div className="card-image">
                <div className="image-container">
                  <img loading="lazy" src={project.image} alt="Project Image" />
                </div>
              </div>
              <div className="card-content">
                <h3 className="projects__title">{project.name}</h3>
                <p className="projects__modal-description">
                  {project.description} For more details click on more details.
                </p>
                <div className="btn-group">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.githubLink}
                    className="projects__btn bold"
                  >
                    Github <i className="uil uil-github projects__btn-icon"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.liveLink}
                    className="projects__btn bold"
                  >
                    Live Demo{" "}
                    <i className="uil uil-external-link-alt projects__btn-icon"></i>
                  </a>
                  <span
                    className="projects__btn bold"
                    onClick={() => handlerControlModal(i)}
                  >
                    View More{" "}
                    <i className="uil uil-arrow-right projects__btn-right-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div
              ref={modalRef}
              className={
                modal === i
                  ? "projects__modal active__modal"
                  : "projects__modal"
              }
            >
              <div className="projects__modal-content">
                <i
                  className="uil uil-times projects__modal-close"
                  onClick={() => handlerControlModal(null)}
                ></i>
                <h3 className="projects__modal-title center">{project.name}</h3>
                <p className="projects__modal-description center">
                  {project.description}
                </p>

                {/* Project technologies */}
                <div className="project_modal_techs">
                  {project.techs.map((tech, i) => (
                    <p key={i} className="project_modal_tech">
                      {tech}
                    </p>
                  ))}
                </div>

                <div className="modal-btn">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.githubLink}
                    className="projects__btn bold"
                  >
                    Github <i className="uil uil-github projects__btn-icon"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.liveLink}
                    className="projects__btn bold"
                  >
                    Live Demo{" "}
                    <i className="uil uil-github projects__btn-icon"></i>
                  </a>
                </div>
                <p className="projects__modal-feature-title">Features</p>
                <ul className="projects__modal-features grid">
                  {project.features.map((feature, index) => (
                    <li key={index} className="projects__modal-feature">
                      <p className="projects__feature-info">
                        {index + 1}. {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
