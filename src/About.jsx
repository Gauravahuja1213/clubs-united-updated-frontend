import React from "react";
import "./pageAbout.css"
import Navbar from "./Navbar";
function About() {
  return (
    <div><Navbar />
    <div className="container-fluid definition aboutcolor">
    <div className="row">
      <div className="col-10 mx-auto">
      <h1 className="q">What is a Student Chapter?</h1>
      <h4>
        The development of a Student Chapter provides an opportunity to bring
        students from a university or college, interested faculty, and
        mechanical contractors together in a formalized group to learn more
        about career opportunities and the benefits that are available through
        the mechanical contracting industry. Student Chapters assist to further
        a student’s professional development.
      </h4>
      <h4>
        Activities of the student chapter can include lunch discussions,
        community volunteer projects, lectures given by guest speakers, team
        projects such as competitions, social functions, and field trips to
        construction sites.
      </h4>
      <br></br>
      <h3>There are many Student Chapters in SVNIT</h3>
      <ul>
        <li>ACM</li>
        <li>CEV</li>
        <li>Ches</li>
        <li>LAC</li>
        <li>Scosh</li>
        <li>SAE</li>
        <li>CHRD</li>
        <li>Madhatters</li>
        <li>EES</li>
        <li>CES</li>
        <li>Drishti</li>
        <li>Spicmacy</li>
        <li>NSS</li>
        <li>ISF</li>
        <li>Tech Converge</li>
        <li>MLSA</li>
        <li>Physics Club</li>
        <li>Hindi Cell</li>
      </ul>
      <h1>Want to know more about them?</h1>
      <a className="btn btn-primary btn-rounded rounded" href="/clubs">Know more</a>
    </div>
    </div>
    </div>
    </div>
  );
}
export default About;
