// eslint-disable-next-line
import React,{useState} from "react";
import  { useNavigate }  from "react-router-dom"
import axios from "axios";
import "./pageLogin.css"

function Administrator() {
const navigate=useNavigate()
const [user7,setUser]=useState({
  email:"",
  password:""
})

function handleChange(event){
  const newuser={...user7}
  newuser[event.target.id]=event.target.value
  setUser(newuser)
  console.log(newuser);
}

function handlebttn(event){
  event.preventDefault();
  axios.post("http://localhost:9002/administrator",user7)
  .then(res=>{
    alert(res.data.message)
    if(res.data.message==="Welcome Gaurav Ahuja")
    {
    navigate("/manager")
    }
    else if(res.data.message==="You are not an admin.Please login as User!!")
    {
        navigate("/");
    }
    })
}

return (
    <div className="abc fluid-container">
        <section className="box2">
      
      <h1 className="text-center">Admin Panel Log in</h1>
      <div className="form1 fluid-container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handlebttn}>
              <div className="form-group">
                <label>Enter your Email id</label>
                <input
                  type="email"
                  id="email"
                  value={user7.email}
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
                  value={user7.password}
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
        <p> Login as <a href="/">User</a></p>
      </div>
      
      </section>
      
    </div>
  );              
}
export default Administrator;
