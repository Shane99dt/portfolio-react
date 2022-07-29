import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"




class App extends React.Component {


  render(){
    return (
      <>
      <Header/>
      <section className="px-md-5">
        <Main/>
        <Background/>
        <Skills/>
        <Projects/>
        <Contact/>
      </section>
      </>
    )
  }
}

export default App;