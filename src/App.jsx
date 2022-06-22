import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Navbar from "./Navbar";
function App()
{
return(
    <div>
        <Navbar />
<Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/clubs" element={<Clubs />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
</Router>
</div>
);
}


export default App;