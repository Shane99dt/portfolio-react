import React, { Component } from "react";

class Main extends Component {




  render(){
    return(
      <>
        <section className="sec-title pt-6 d-flex justify-content-center align-items-center justify-content-md-start">
          <article className="col-md-6 col-9 d-flex flex-column">
            <h1 className="text-wrap">
              Hello! <br/>
              I'm <span>Dushen</span>, a Junior web developer in Paris.
            </h1>
            <a href="#about" className="text-end text-success pb-2">Background {">>"}</a>
            <button className="btn btn-outline-success col-md-auto">Work with me</button>
          </article>
        </section>
      </>
    )
  }
}

export default Main;