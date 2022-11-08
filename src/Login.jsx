// eslint-disable-next-line
import React,{useState} from "react";
import  { useNavigate }  from "react-router-dom"
import axios from "axios";
import "./pageLogin.css"

function Login({setLoginUser}) {
const navigate=useNavigate()
const [user2,setUser]=useState({
  email:"",
  password:""
})

function handleChange(event){
  const newuser={...user2}
  newuser[event.target.id]=event.target.value
  setUser(newuser)
  console.log(newuser);
}

function handlebutton(event){
  event.preventDefault();
  axios.post("http://localhost:9002/login",user2)
  .then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user5)
    navigate("/")
    })
  
}

return (
    <div className="abc fluid-container">
        <section className="box2">
      
      <h1 className="text-center">Log in</h1>
      <div className="form1 fluid-container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handlebutton}>
              <div className="form-group">
                <label>Enter your Email id</label>
                <input
                  type="email"
                  id="email"
                  value={user2.email}
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                <label for="exampleInputEmail1">Enter your Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={user2.password}
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
        <p>Not a member yet? <a href="/signup">Create account</a></p>
        <p> Login as <a href="/administrator">Administrator</a></p>
      </div>
      
      </section>
      
    </div>
  );              
}
export default Login;
