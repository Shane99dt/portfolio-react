import React, { Component } from "react";

class Header extends Component {




  render(){
    return(
      <>
        <header>
      <div class="navigation d-flex justify-content-center">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="https://shane99dt.github.io/portfolio-dushen/">Dushen M</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active fw-semibold fs-5" aria-current="page" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active fw-semibold fs-5" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active fw-semibold fs-5" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  </header>
      </>
    )
  }
}

export default Header