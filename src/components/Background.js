import React, { Component } from "react";

class Background extends Component {

  render(){
    return(
      <>
        <section className="sec-about d-flex flex-md-row justify-content-md-center align-items-md-center flex-column flex-sm-column justify-content-center justify-content-sm-center align-items-center align-items-sm-center" id="about">
          <h5 className="col-md-3">
            Background
          </h5>
          <article className="col-sm-5 col-9">
            <p className="text-wrap">
              I'm Dushen, currently a student studying <span className="">fullstack web developing</span> at Konexio in Paris. I've done my advanced level examinations in Sri lanka and moved to France in 2019. Since then i've studied web developing in my leasure time and i found it very interesting. <br/>
              So I kept learning more {"&"} more. <br/>
              Apart from that I'm a good cricketer. <img src="./images/cricket.png" alt="cricket" height="40px"/>
            </p>
            <a href="./images/Dushen CV 10-05-2022 IX.pdf" target="_blank">View my resume</a>
          </article>
        </section>
      </>
    )
  }
}

export default Background