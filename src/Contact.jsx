// eslint-disable-next-line
import React,{useState} from "react";
import  { Navigate }  from "react-router-dom"
import axios from "axios";
import "./pageContact.css"
function Contact() {

const [user,setUser]=useState({
  name:"",
  email:"",
  query:""
})

function handleChange(event){
  const newuser={...user}
  newuser[event.target.id]=event.target.value
  setUser(newuser)
 // console.log(newuser);
}

function handleClick(event){
  event.preventDefault();
  axios.post("http://localhost:9002/register",user)
  .then(res=>{
    //console.log(res)
    alert("Query Submitted "+user.name);
  })
  
}

return (
    <div className="contact-top contactcolor">
      
      <h1 className="text-center">Contact us</h1>
      <div className="form1 fluid-container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleClick}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={user.name}
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
                <label>Your Query</label>
                <textarea
                  className="form-control"
                  id="query"
                  value={user.query}
                  name="query"
                  cols="100"
                  rows="5"
                  placeholder="Query"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary last">
                Submit
              </button>
            </form>
          </div>
        </div>
        <footer className="foot text-center">
          <p>© Copyright 2022 Clubs United</p>
          <p>
            Made with <i className="fa-solid fa-heart"></i> by Gaurav Ahuja
          </p>
        </footer>
      </div>
    </div>
  );
}
export default Contact;
