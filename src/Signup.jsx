// eslint-disable-next-line
import React,{useState} from "react";
import  { useNavigate }  from "react-router-dom"
import axios from "axios";
import "./pageSignup.css"
function Signup() {
const navigate=useNavigate()
const [user3,setUser]=useState({
  name:"",
  email:"",
  password:"",
  repassword:""
})

function handleChange(event){
  const newuser={...user3}
  newuser[event.target.id]=event.target.value
  setUser(newuser)
 // console.log(newuser);
}

function handlebtn(event){
    event.preventDefault();
    const{name,email,password,repassword} =user3;
    if(name &&email && password && (password === repassword)){
        axios.post("https://gahuja-clubs-united-updated.herokuapp.com/signup",user3)
        .then(res=>{
            alert(res.data.message)
        navigate("/login")})
    }
    else{
        alert("Invalid Input");
    }
    
  }

return (
    <div>
        <section className="box">
      
      <h1 className="text-center">Sign Up</h1>
      <div className="form1 fluid-container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handlebtn}>
              <div className="form-group">
              <label>Enter your Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={user3.name}
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleChange}
                />
                <label>Enter your Email id</label>
                <input
                  type="email"
                  id="email"
                  value={user3.email}
                  className="form-control"
                  placeholder="Email id"
                  name="email"
                  onChange={handleChange}
                />
                <label>Enter your Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user3.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <label>Re-enter your Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="repassword"
                  name="repassword"
                  value={user3.repassword}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary last">
                Submit
              </button>
            </form>
            
          </div>
          
        </div>
        <p>Already a member? <a href="/login">Log in</a></p>
      </div>
      
      </section>
      
    </div>
  );              
}
export default Signup;
