import React, { Component } from "react";
import ProjectCard from "./projects/ProjectCard";

class Projects extends Component {




  render(){
    return(
      <>
        <section className="sec-projects d-flex flex-sm-column flex-md-row justify-content-center align-items-center gap-md-5 gap-sm-3 py-md-5 justify-content-sm-center py-sm-5" id="projects">
              <h5 className="projects-title p-md-0 py-3">Projects</h5>
              <article className="d-flex flex-grow-md-0 flex-md-wrap gap-md-5 col-md-8 ps-md-5 gap-sm-3 gap-5 col-9 ps-5 gap-3">
                <div className="d-md-inline-flex flex-md-row justify-content-md-center">
                  <img src="./images/cuizine.jpg" alt="cuizine" height="250px"/>
                  <div className="ps-md-5 pt-sm-3 pt-3">
                    <h6>Cui'zine</h6>
                    <p>An assignment of the course</p>
                    <a href="https://arthurdelaunay.github.io/digitous-html-cuisine/" className="btn btn-secondary" target="_blank">Check out</a>
                  </div>
                </div>
                <ProjectCard
                  projectImage = ""
                  projectImageAlt="test"
                  projectName="Test React"
                  projectDesc="This is a test component"
                  projectLink="https://arthurdelaunay.github.io/digitous-html-cuisine/"
                />
                <div className="d-md-inline-flex flex-md-row justify-content-md-center">
                  <img src="./images/deezer1.jpg" alt="Deezer" height="250px"/>
                  <div className="ps-md-5 pt-sm-3 pt-3">
                    <h6>Deezer</h6>
                    <p>An assignment of the course</p>
                    <a href="https://shane99dt.github.io/deezer-v1/" className="btn btn-secondary" target="_blank">Check out</a>
                  </div>
                </div>
                <div className="d-md-inline-flex flex-md-row justify-content-md-center">
                  <img src="./images/CV.jpg" alt="CV" width="250px"/>
                  <div className="ps-md-5 pt-sm-3 pt-3">
                    <h6>Personal CV</h6>
                    <p>An assignment of the course</p>
                    <a href="https://shane99dt.github.io/CV-Dushen/" className="btn btn-secondary" target="_blank">Check out</a>
                  </div>
                </div>
                <div className="d-md-inline-flex flex-md-row justify-content-md-center">
                  <img src="./images/shifumi.jpg" alt="shifumi" width="250px"/>
                  <div className="ps-md-5 pt-sm-3 pt-3">
                    <h6>Shifumi - Rock/Paper/Scissor</h6>
                    <p>A JavaScript assignment of the course</p>
                    <a href="https://shane99dt.github.io/shifumi/" className="btn btn-secondary" target="_blank">Check out</a>
                  </div>
                </div>
              </article>
            </section>
      </>
    )
  }
}

export default Projects