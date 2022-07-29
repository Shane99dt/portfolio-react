import React, { Component } from "react";

class Skills extends Component {




  render(){
    return(
      <>
        <section className="sec-skills py-5 ps-5">
          <article className="my-skills d-flex flex-md-row justify-content-center my-5 flex-column-reverse align-items-center align-items-sm-center">
            <div className="d-flex flex-row flex-wrap col-md-5 col-9">
              <div className="pe-5">
                <img src="./images/html-5.png" alt="html/css"/>
                <p>HTML/CSS</p>
              </div>
              <div className="pe-5">
                <img src="./images/js.png" alt="Js"/>
                <p>JavaScript</p>
              </div>
            </div>
            <h5 className="skills-title col-md-3 pb-sm-2 pb-3">My skills</h5>
          </article>
          <article className="skills-learning d-flex flex-md-row justify-content-center flex-column justify-content-center align-items-center flex-sm-column pt-5 align-items-sm-center">
            <h5 className="col-md-3 col-9 me-md-5 skills-title  pb-sm-2 pb-3">
              Skills I'm still learning
            </h5>
            <div className="col-md-5 col-9 d-flex flex-row flex-wrap">
              <div className="pe-5">
                <img src="./images/react.png" alt="react"/>
                <p>
                  React JS
                </p>
              </div>
              <div className="pe-5">
                <img src="./images/node-js.png" alt="node"/>
                <p>
                  Node JS
                </p>
              </div>
              <div className="pe-5">
                <img src="./images/icons8-github-30.png" alt="git"/>
                <p>
                  Github
                </p>
              </div>
              <div className="pe-5">
                <img src="./images/mongo.png" alt="mongo" height="64px"/>
                <p>
                  Mongo DB
                </p>
              </div>
              <div className="pe-5">
                <img src="./images/sql-server.png" alt="sql"/>
                <p>
                  SQL
                </p>
              </div>
            </div>
          </article>
        </section>
      </>
    )
  }
}

export default Skills