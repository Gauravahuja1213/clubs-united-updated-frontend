import React from "react";
import svnit_logo from "./images/svnit logo.jpg";
import "./pageHome.css";
import Navbar from "./Navbar";
function Home() {
  
  return (
    <div>
    <Navbar />
    <div className="crimson">
    <section id="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row started">
              <div className="decr col-lg-6">
                <h1 className="c">
                  Want to know about<br></br>
                  <span className="a">
                    <strong> SVNIT's Student Chapters!!</strong>
                  </span>
                </h1>
                <a className="btn btn-primary btn-rounded rounded" href="/about">
                  Get Started
                </a>
              </div>
              <div className="photo col-lg-6">
                <img className="logo" src={svnit_logo} alt="SVNIT's logo"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
}
export default Home;
