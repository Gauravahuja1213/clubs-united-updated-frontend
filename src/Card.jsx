import React from "react";
import "./pageClubs.css";
function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img className="card-img-top" src={props.imgsr} alt={props.imgsr}></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
         <a href={props.insta}><i className="social-icon fa-brands fa-instagram fa-2xl"></i></a>
        </div>
      </div>
    </div>
  );
}
export default Card;