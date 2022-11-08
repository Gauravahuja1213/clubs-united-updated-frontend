import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Manager from "./Manager";
import Administrator from "./Administrator";

function App()
{

const[ user ,setLoginUser]=useState({})

return(
    <div>
    <Router>
    <Routes>
    {user && user._id ?<Route path="/" element={<Home />} /> :<Route path="/" element={<Login setLoginUser={setLoginUser}/>} />}
    <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
    <Route path="/about" element={<About />} />
    <Route path="/clubs" element={<Clubs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/manager" element={<Manager/>} />
    <Route path="/administrator" element={<Administrator/>} />
    </Routes>
    </Router>
</div>
);
}


export default App;