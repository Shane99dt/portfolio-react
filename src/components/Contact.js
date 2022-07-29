import React, { Component } from "react";

class Contact extends Component {




  render(){
    return(
      <>
        <section className="sec-contact d-flex flex-md-row flex-column-reverse flex-sm-column-reverse justify-content-center align-items-center py-sm-5 pb-5" id="contact">
          <div className="d-flex gap-3 flex-column justify">
            <form action="get" className="d-flex flex-column me-5">
              <div className="d-inline-flex flex-row justify-content-center align-items-sm-start align-items-center">
                <div className="labels-contact d-none d-sm-flex flex-column justify-content-start align-items-start gap-4">
                  <label for="name" className="pe-5">Name</label>
                  <label for="email" className="pe-5">E-mail</label>
                  <label for="reason" className="align-self-start pe-5 ">So what is this about</label>
                </div>
                <div className="input-boxes d-flex flex-column justify-content-sm-start justify-content-center align-items-sm-start gap-3 align-items-center">
                  <input type="text" id="name" className="" required placeholder="Your name..."/>
                  <input type="email" id="email" required placeholder="E-mail..."/>
                  <textarea name="reason" id="reason" cols="30" rows="5" required placeholder="Tell me what is this about..."></textarea>
                </div>
              </div>
              <button className="btn btn-secondary align-self-center my-3 px-5">Send</button>
            </form>
            <div className="px-5 p-sm-0">
              <h5>Tired of filling out forms? Send me an <a href="mailto:dushen1999thilaksha@gmail.com">e-mail</a>.</h5>
            </div>
            <div className="d-inline-flex gap-3 justify-content-center justify-content-sm-start">
              <a href="https://github.com/Shane99dt" target="_blank"><img src="./images/icons8-github-30.png" alt="github" height="30px"/></a>
              <a href="https://www.linkedin.com/in/dushen-manikbowe-1b72571b9/" target="_blank"><img src="./images/linkedin.png" height="30px" alt="linkedin"/></a>
            </div>
          </div>
          <h5 className="contact-title py-3 p-sm-0">Contact me</h5>
        </section>
      </>
    )
  }
}

export default Contact