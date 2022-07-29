import React, { Component } from "react";

class ProjectCard extends Component {




  render(){
    return(
      <>
        <div className="d-md-inline-flex flex-md-row justify-content-md-center">
          <img src={this.props.projectImage} alt={this.props.projectImageAlt} height="250px"/>
          <div className="ps-md-5 pt-sm-3 pt-3">
            <h6>{this.props.projectName}</h6>
            <p>{this.props.projectDesc}</p>
            <a href={this.props.projectLink} className="btn btn-secondary" target="_blank">Check out</a>
          </div>
        </div>
      </>
    )
  }
}

export default ProjectCard;