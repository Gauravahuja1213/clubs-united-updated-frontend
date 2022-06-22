import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./pageClubs.css";
function Clubs() {
  return (
    <div>
    <div className="container-fluid clubcolor">
      <div className="row">
        <div className="col-10 mx-auto">
        <h1 className="text-center  ">SVNIT's Student Chapters</h1>
      <div className="row">
          {
            Sdata.map((val,ind)=>{
                return <Card 
                imgsr={val.imgsr}
                title={val.title}
                content={val.content}
                insta={val.insta}
                />
            })
          }
        </div>
        
      </div>
      </div>
      </div>
      <div className="base">
        <h1 className="worry">Do you still have any Query?</h1>
        <h4>Don't Worry!! </h4>
        <h4>Feel free to contact us!!</h4>
      <a className="btn btn-primary btn-rounded rounded" href="/contact">Contact Us</a>
      </div>
      </div>
  );
}
export default Clubs;
